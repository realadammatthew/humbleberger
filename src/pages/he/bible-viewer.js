import { useEffect, useRef, useState } from "react";
import Head from "next/head";

const HebrewBibleViewer = () => {
  const canvasRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        // Load PDF.js from CDN
        const pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

        // Load the PDF document
        const loadingTask = pdfjsLib.getDocument('/assets/Modern-Hebrew-New-Testament.pdf');
        const pdfDoc = await loadingTask.promise;
        
        setPdf(pdfDoc);
        setTotalPages(pdfDoc.numPages);
        setLoading(false);
      } catch (error) {
        console.error('Error loading PDF:', error);
        // Fallback to direct PDF link
        window.location.href = '/assets/Modern-Hebrew-New-Testament.pdf';
      }
    };

    loadPDF();
  }, []);

  useEffect(() => {
    const renderPage = async () => {
      if (!pdf || !canvasRef.current || loading) return;

      try {
        const page = await pdf.getPage(currentPage);
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set canvas dimensions
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render the page
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        await page.render(renderContext).promise;
      } catch (error) {
        console.error('Error rendering page:', error);
      }
    };

    renderPage();
  }, [pdf, currentPage, loading]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) {
    return (
      <>
        <Head>
          <title>הברית החדשה בעברית</title>
          <script src="/pdf.min.js"></script>
        </Head>
        <div style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f5f5'
        }}>
          <div style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#666'
          }}>
            טוען את הברית החדשה...
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>הברית החדשה בעברית</title>
        <script src="/pdf.min.js"></script>
      </Head>
      
      {/* Navigation Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '10px 20px',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
      }}>
        <button
          onClick={goToPreviousPage}
          disabled={currentPage <= 1}
          style={{
            background: currentPage <= 1 ? '#666' : '#0070f3',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          ← הקודם
        </button>
        
        <span style={{ fontSize: '14px' }}>
          עמוד {currentPage} מתוך {totalPages}
        </span>
        
        <button
          onClick={goToNextPage}
          disabled={currentPage >= totalPages}
          style={{
            background: currentPage >= totalPages ? '#666' : '#0070f3',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          הבא →
        </button>
      </div>

      {/* PDF Viewer */}
      <div style={{
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '60px'
      }}>
        <canvas
          ref={canvasRef}
          style={{
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: 'white',
            margin: '20px'
          }}
        />
      </div>
    </>
  );
};

export default HebrewBibleViewer; 
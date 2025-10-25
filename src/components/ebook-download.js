import { useTranslation } from 'react-i18next';

const EbookDownload = () => {
  const { t } = useTranslation();

  const handlePDFDownload = () => {
    window.open('/encountering-messiah-ebook-en.pdf', '_blank');
  };

  const handleEPUBDownload = () => {
    window.open('/encountering-messiah-ebook-en.epub', '_blank');
  };

  return (
    <div className="ebook-download-section">
      <div className="ebook-download-content">
        <h3>{t('ebook.title')}</h3>
        <p>{t('ebook.description')}</p>
        <div className="ebook-features">
          <ul>
            <li>{t('ebook.feature1')}</li>
            <li>{t('ebook.feature2')}</li>
            <li>{t('ebook.feature3')}</li>
            <li>{t('ebook.feature4')}</li>
          </ul>
        </div>
        <div className="download-buttons">
          <button 
            className="ebook-download-button pdf-button"
            onClick={handlePDFDownload}
          >
            📖 {t('ebook.downloadPDF')}
          </button>
          <button 
            className="ebook-download-button epub-button"
            onClick={handleEPUBDownload}
          >
            📱 {t('ebook.downloadEPUB')}
          </button>
        </div>
        <p className="ebook-note">{t('ebook.note')}</p>
      </div>
      
      <style jsx>{`
        .ebook-download-section {
          background: linear-gradient(135deg, rgba(184, 134, 11, 0.15) 0%, rgba(218, 165, 32, 0.15) 100%);
          color: #f5f5f5;
          padding: 2.5rem;
          border-radius: 16px;
          margin: 2rem 0;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(184, 134, 11, 0.3);
        }

        .ebook-download-content h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #f5d976;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .ebook-download-content p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #d0d0d0;
        }

        .ebook-features {
          margin: 1.5rem 0;
        }

        .ebook-features ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin: 0;
        }

        .ebook-features li {
          background: rgba(184, 134, 11, 0.1);
          padding: 1rem 1.25rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(184, 134, 11, 0.2);
          color: #e8e8e8;
          font-weight: 500;
        }

        .download-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin: 1.5rem 0;
        }

        .ebook-download-button {
          display: inline-block;
          color: #1a1d23;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          margin: 0.5rem 0;
          border: none;
          cursor: pointer;
          font-family: inherit;
          min-width: 160px;
        }

        .pdf-button {
          background: linear-gradient(135deg, #b8860b 0%, #daa520 100%);
          box-shadow: 0 4px 15px rgba(184, 134, 11, 0.4);
        }

        .pdf-button:hover:not(:disabled) {
          background: linear-gradient(135deg, #daa520 0%, #f5d976 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(184, 134, 11, 0.6);
        }

        .epub-button {
          background: linear-gradient(135deg, #b8860b 0%, #daa520 100%);
          box-shadow: 0 4px 15px rgba(184, 134, 11, 0.4);
        }

        .epub-button:hover:not(:disabled) {
          background: linear-gradient(135deg, #daa520 0%, #f5d976 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(184, 134, 11, 0.6);
        }
        
        .ebook-download-button:active:not(:disabled) {
          transform: translateY(0);
        }
        
        .ebook-download-button:disabled {
          background: #95a5a6;
          cursor: not-allowed;
          transform: none;
          box-shadow: 0 4px 15px rgba(149, 165, 166, 0.3);
        }
        
        .ebook-note {
          font-size: 0.9rem;
          color: #a0a0a0;
          margin-top: 1rem;
          font-style: italic;
        }
        
        @media (max-width: 768px) {
          .ebook-download-section {
            padding: 1.5rem;
            margin: 1.5rem 0;
          }

          .ebook-download-content p,
          .ebook-features,
          .ebook-note {
            display: none;
          }

          .ebook-download-content h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .download-buttons {
            flex-direction: column;
            align-items: center;
            margin: 0;
          }

          .ebook-download-button {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </div>
  );
};

export default EbookDownload; 
import { useTranslation } from 'react-i18next';

const EbookDownload = () => {
  const { t } = useTranslation();

  const handleDownload = () => {
    window.open('/encountering-messiah-ebook.pdf', '_blank');
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
        <button 
          className="ebook-download-button"
          onClick={handleDownload}
        >
          📖 {t('ebook.downloadButton')}
        </button>
        <p className="ebook-note">{t('ebook.note')}</p>
      </div>
      
      <style jsx>{`
        .ebook-download-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          margin: 2rem 0;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .ebook-download-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .ebook-download-content p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.6;
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
          background: rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .ebook-download-button {
          display: inline-block;
          background: #2ecc71;
          color: white;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
          margin: 1rem 0;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        
        .ebook-download-button:hover:not(:disabled) {
          background: #27ae60;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(46, 204, 113, 0.4);
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
          opacity: 0.8;
          margin-top: 1rem;
          font-style: italic;
        }
        
        @media (max-width: 768px) {
          .ebook-download-section {
            padding: 1.5rem;
            margin: 1.5rem 0;
          }
          
          .ebook-features ul {
            grid-template-columns: 1fr;
          }
          
          .ebook-download-button {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EbookDownload; 
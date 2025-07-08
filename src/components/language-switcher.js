import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const { currentLanguage, switchLanguage, isHebrew } = useLanguage();

  return (
    <div className="language-switcher">
      <button 
        className={`lang-btn ${!isHebrew ? 'active' : ''}`}
        onClick={() => switchLanguage('en')}
        title={t('language.switch')}
      >
        🇺🇸 {t('language.english')}
      </button>
      <button 
        className={`lang-btn ${isHebrew ? 'active' : ''}`}
        onClick={() => switchLanguage('he')}
        title={t('language.switch')}
      >
        🇮🇱 {t('language.hebrew')}
      </button>
      <style jsx>{`
        .language-switcher {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          display: flex;
          gap: 8px;
          background: rgba(0, 0, 0, 0.8);
          padding: 8px;
          border-radius: 25px;
          backdrop-filter: blur(10px);
        }
        
        .lang-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 20px;
          text-decoration: none;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          background: none;
          cursor: pointer;
          font-family: inherit;
        }
        
        .lang-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }
        
        .lang-btn.active {
          background: #0070f3;
          border-color: #0070f3;
        }
        
        @media (max-width: 768px) {
          .language-switcher {
            top: 10px;
            right: 10px;
            padding: 6px;
          }
          
          .lang-btn {
            padding: 6px 12px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher; 
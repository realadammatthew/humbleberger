import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const CallToActionButtons = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <div className="blog-post-ctas" style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <a
        className="button"
        href={isHebrew ? "https://chat.humbleberger.org/he?translation=csb" : "https://chat.humbleberger.org/en?translation=csb"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {isHebrew ? '💬 צ\'אט' : '💬 Chat'}
      </a>
      <a
        className="button"
        href={isHebrew ? "https://mailchi.mp/2757d0257dda/humbleberger-ministries-he" : "https://eepurl.com/ja6zNY"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {isHebrew ? '📰 הרשמה' : '📰 Subscribe'}
      </a>
      <a
        className="button donate-button"
        href="https://donorbox.org/humbleberger-ministries"
        target="_blank"
        rel="noopener noreferrer"
      >
        {isHebrew ? '❤️ תרמו' : '❤️ Donate'}
      </a>
    </div>
  );
};

export default CallToActionButtons; 
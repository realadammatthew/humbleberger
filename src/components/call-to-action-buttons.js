import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const CallToActionButtons = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <div className="blog-post-ctas" style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <a
        className="button"
        href={t('urls.chat')}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('button.chat')}
      </a>
      <a
        className="button"
        href={t('urls.newsletter')}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('button.subscribe')}
      </a>
      <Link href={t('urls.internal.donate')} legacyBehavior>
        <a className="button donate-button">
          {t('button.donate')}
        </a>
      </Link>
    </div>
  );
};

export default CallToActionButtons; 
import { useTranslation } from 'react-i18next';

const GoogleAdsCTAs = () => {
  const { t } = useTranslation();

  return (
    <div className="google-ads-ctas" style={{ marginTop: '3rem', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '1.5rem', color: '#f5d976', fontSize: '2rem', fontWeight: '700' }}>
        {t('meetMessiah.readyToLearn')}
      </h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.2rem',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <a
          href={t('meetMessiah.cta.whoIsYeshuaLink')}
          className="button"
          style={{
            display: 'block',
            padding: '1.1rem 2rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            textAlign: 'center',
            transition: 'all 0.3s',
            boxShadow: '0 2px 8px rgba(0, 112, 243, 0.3)'
          }}
        >
          {t('meetMessiah.cta.whoIsYeshua')}
        </a>
        <a
          href={t('meetMessiah.cta.encounteringMessiahLink')}
          className="button"
          style={{
            display: 'block',
            padding: '1.1rem 2rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            textAlign: 'center',
            transition: 'all 0.3s',
            boxShadow: '0 2px 8px rgba(0, 112, 243, 0.3)'
          }}
        >
          {t('meetMessiah.cta.encounteringMessiah')}
        </a>
        <a
          href={t('meetMessiah.cta.chatLink')}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          style={{
            display: 'block',
            padding: '1.1rem 2rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            textAlign: 'center',
            transition: 'all 0.3s',
            boxShadow: '0 2px 8px rgba(0, 112, 243, 0.3)'
          }}
        >
          {t('meetMessiah.cta.chat')}
        </a>
        <a
          href={t('meetMessiah.cta.subscribeLink')}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          style={{
            display: 'block',
            padding: '1.1rem 2rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            textAlign: 'center',
            transition: 'all 0.3s',
            boxShadow: '0 2px 8px rgba(0, 112, 243, 0.3)'
          }}
        >
          {t('meetMessiah.cta.subscribe')}
        </a>
        <a
          href={t('meetMessiah.cta.donateLink')}
          className="button donate-button"
          style={{
            display: 'block',
            padding: '1.1rem 2rem',
            backgroundColor: '#dc3545',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            textAlign: 'center',
            transition: 'all 0.3s',
            boxShadow: '0 2px 8px rgba(220, 53, 69, 0.3)'
          }}
        >
          {t('meetMessiah.cta.donate')}
        </a>
      </div>
      
      {/* Trust badges */}
      <div style={{ marginTop: '2rem', fontSize: '1.1rem', color: '#d0d0d0', lineHeight: '1.6' }}>
        <p>{t('meetMessiah.trustBadge')}</p>
      </div>
    </div>
  );
};

export default GoogleAdsCTAs; 
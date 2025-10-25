import { useTranslation } from 'react-i18next';

const GoogleAdsCTAs = () => {
  const { t } = useTranslation();

  return (
    <div className="google-ads-ctas" style={{ marginTop: '3rem', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.8rem' }}>
        {t('meetMessiah.readyToLearn')}
      </h3>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem', 
        maxWidth: '600px', 
        margin: '0 auto' 
      }}>
        <a
          href={t('meetMessiah.cta.whoIsYeshuaLink')}
          className="button"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textAlign: 'center',
            transition: 'background-color 0.3s'
          }}
        >
          {t('meetMessiah.cta.whoIsYeshua')}
        </a>
        <a
          href={t('meetMessiah.cta.encounteringMessiahLink')}
          className="button"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textAlign: 'center',
            transition: 'background-color 0.3s'
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
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textAlign: 'center',
            transition: 'background-color 0.3s'
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
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textAlign: 'center',
            transition: 'background-color 0.3s'
          }}
        >
          {t('meetMessiah.cta.subscribe')}
        </a>
        <a
          href={t('meetMessiah.cta.donateLink')}
          className="button donate-button"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#dc3545',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textAlign: 'center',
            transition: 'background-color 0.3s'
          }}
        >
          {t('meetMessiah.cta.donate')}
        </a>
      </div>
      
      {/* Trust badges */}
      <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#ccc' }}>
        <p>{t('meetMessiah.trustBadge')}</p>
      </div>
    </div>
  );
};

export default GoogleAdsCTAs; 
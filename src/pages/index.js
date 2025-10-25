import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import withBanner from "../utils/with-banner";
import CookieBanner from "../components/cookies";

const Home = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <>
      <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
        <section>
          <h2>{t('home.about.title')}</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '1.5rem 0 2rem',
            maxWidth: '100%'
          }}>
            <img
              src="/social-preview.png"
              alt="Humbleberger Ministries"
              style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
              }}
            />
          </div>
          <p style={{textAlign: "center", fontSize: "1.6rem"}}>
            {t('home.about.welcome')}
          </p>
          <p style={{textAlign: "center", fontSize: "1.3rem", lineHeight: "1.75"}}>
            {t('home.about.description')}
          </p>
          {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
            <video controls width='100%'>
              <source src='/video/shalom-website-intro.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div> */}
          <div className="home-cta-buttons">
            <a
              href={t('urls.internal.whoIsYeshuaFromHome')}
              className="button primary-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "1.5rem",
                width: "100%",
                maxWidth: "500px",
                padding: "1.25rem 2rem",
                background: "linear-gradient(135deg, #b8860b 0%, #daa520 50%, #f5d976 100%)",
                color: "#1a1d23",
                textDecoration: "none",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(184, 134, 11, 0.5), 0 2px 8px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                fontWeight: "800",
                textTransform: "none",
                letterSpacing: "0.02em",
                border: "2px solid rgba(245, 217, 118, 0.3)"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 8px 25px rgba(184, 134, 11, 0.6), 0 4px 12px rgba(0,0,0,0.4)";
                e.target.style.background = "linear-gradient(135deg, #daa520 0%, #f5d976 50%, #fff8dc 100%)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 6px 20px rgba(184, 134, 11, 0.5), 0 2px 8px rgba(0,0,0,0.3)";
                e.target.style.background = "linear-gradient(135deg, #b8860b 0%, #daa520 50%, #f5d976 100%)";
              }}
            >
              ✨ {t('home.cta.whoIsYeshua')}
            </a>
            <a
              href={t('urls.internal.encounteringMessiah')}
              className="button primary-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "1.5rem",
                width: "100%",
                maxWidth: "500px",
                padding: "1.25rem 2rem",
                background: "linear-gradient(135deg, #b8860b 0%, #daa520 50%, #f5d976 100%)",
                color: "#1a1d23",
                textDecoration: "none",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(184, 134, 11, 0.5), 0 2px 8px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                fontWeight: "800",
                textTransform: "none",
                letterSpacing: "0.02em",
                border: "2px solid rgba(245, 217, 118, 0.3)"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 8px 25px rgba(184, 134, 11, 0.6), 0 4px 12px rgba(0,0,0,0.4)";
                e.target.style.background = "linear-gradient(135deg, #daa520 0%, #f5d976 50%, #fff8dc 100%)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 6px 20px rgba(184, 134, 11, 0.5), 0 2px 8px rgba(0,0,0,0.3)";
                e.target.style.background = "linear-gradient(135deg, #b8860b 0%, #daa520 50%, #f5d976 100%)";
              }}
            >
              📖 {t('home.cta.encounteringMessiah')}
            </a>
          </div>
        </section>
        {/* <section>
          <h2 style={{ textAlign: 'center' }}>Watch our founder live on YouTube!</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe src="https://www.youtube.com/embed/xQjqDt8euF0" title="The Carter Truman Show | Ep. 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{ borderRadius: '10px', width: '100%', height: '100%', maxWidth: '1000px', maxHeight: '600px', aspectRatio: '16/9' }}></iframe>
          </div>
          <div style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: '1rem', fontStyle: 'italic' }}>
            *Please note: All opinions expressed are those of the speaker and do not necessarily reflect the views of Humbleberger Ministries. As a registered 501(c)(3) non-profit, we take an active stance on non-political affiliation.
          </div>
        </section> */}
        <section>
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <h2>{t('home.connect.title')}</h2>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.7rem",
                color: "#333",
                marginBottom: "1rem",
                textAlign: "center",
                color: "#fff",
              }}
            >
              {t('home.connect.subtitle')}
            </p>
            <div className="button-group">
              <a
                className="button"
                href={t('urls.chat')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('home.connect.chat')}
              </a>
              <Link href={t('urls.internal.blog')} legacyBehavior>
                <a className="button">
                  {t('home.connect.blog')}
                </a>
              </Link>
              <div className="other-buttons-grid">
                <a
                  className="button"
                  href={t('urls.bible')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('home.connect.bible')}
                </a>
                <a
                  className="button"
                  href={t('urls.synagogue')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('home.connect.synagogue')}
                </a>
                <a
                  className="button"
                  href={t('urls.newsletter')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('home.connect.newsletter')}
                </a>
                <a
                  className="button"
                  href={t('urls.instagram')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('home.connect.instagram')}
                </a>
                <a
                  className="button"
                  href={t('urls.facebook')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('home.connect.facebook')}
                </a>
                <a
                  className="button"
                  href={t('urls.youtube')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('home.connect.youtube')}
                </a>
                <a
                  className="button"
                  href={t('urls.twitter')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('home.connect.follow')}
                </a>
                <a className="button" href={t('urls.internal.contact')}>
                  {t('home.connect.contact')}
                </a>
                <Link href={t('urls.internal.donate')} legacyBehavior>
                  <a className="button donate-button">
                    {t('home.connect.donate')}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CookieBanner />
    </>
  );
};

export default withBanner(Home);

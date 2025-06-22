import Link from "next/link";
import { useTranslation } from "react-i18next";
import withBanner from "../../utils/with-banner";
import CookieBanner from "../../components/cookies";
import LanguageSwitcher from "../../components/language-switcher";

const HebrewHome = () => {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSwitcher />
      <main style={{ direction: 'rtl', textAlign: 'right' }}>
        <section>
          <h2>{t('home.about.title')}</h2>
          <p style={{textAlign: "center", fontSize: "1.6rem"}}>
            {t('home.about.welcome')}
          </p>
          <p style={{textAlign: "center", fontSize: "1.3rem"}}>
            {t('home.about.description')}
          </p>
          <div className="home-cta-buttons">
            <a
              href={t('urls.internal.whoIsYeshuaFromHome')}
              className="button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "1.2rem",
                width: "100%",
                maxWidth: "300px",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#0070f3",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "background-color 0.3s, transform 0.2s",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}
            >
              {t('home.cta.whoIsYeshua')}
            </a>
            <a
              href={t('urls.internal.encounteringMessiah')}
              className="button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "1.2rem",
                width: "100%",
                maxWidth: "300px",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#0070f3",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "background-color 0.3s, transform 0.2s",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}
            >
              {t('home.cta.encounteringMessiah')}
            </a>
          </div>
        </section>
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
                <a className="button" href={t('urls.internal.contact')}>
                  {t('home.connect.contact')}
                </a>
                <a
                  className="button"
                  href={t('urls.twitter')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('home.connect.follow')}
                </a>
                <a
                  className="button donate-button"
                  href={t('urls.donate')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('home.connect.donate')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CookieBanner />
    </>
  );
};

export default withBanner(HebrewHome); 
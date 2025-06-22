import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import ReturnToHome from "../components/return-to-home";
import withBanner from "../utils/with-banner";

const AntiSemitism = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <>
      <Head>
        <title>{t('antiSemitism.title')}</title>
        <meta
          name="description"
          content={t('antiSemitism.description')}
        />
      </Head>
      <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
        <section>
          <h2>{t('antiSemitism.heading')}</h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              marginBottom: "2.5rem",
            }}
          >
            {t('antiSemitism.intro')}
          </p>

          <div className="statement-item">
            <h3>{t('antiSemitism.section1.title')}</h3>
            <p>
              {t('antiSemitism.section1.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('antiSemitism.section2.title')}</h3>
            <p>
              {t('antiSemitism.section2.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('antiSemitism.section3.title')}</h3>
            <p>
              {t('antiSemitism.section3.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('antiSemitism.section4.title')}</h3>
            <p>
              {t('antiSemitism.section4.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('antiSemitism.section5.title')}</h3>
            <p>
              {t('antiSemitism.section5.content')}
            </p>
          </div>
        </section>
        <ReturnToHome />
      </main>
    </>
  );
};

export default withBanner(AntiSemitism);

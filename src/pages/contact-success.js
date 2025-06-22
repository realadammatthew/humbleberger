import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import ReturnToHome from "../components/return-to-home";
import withBanner from "../utils/with-banner";

const ContactSuccessPage = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <>
      <Head>
        <title>{t('contact.success.title')} - {isHebrew ? 'משרדים של האמבלברגר' : 'Humbleberger Ministries'}</title>
      </Head>
      <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
        <section style={{ textAlign: "center" }}>
          <h2>{t('contact.success.title')}</h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            {t('contact.success.message')}
          </p>
        </section>
        <ReturnToHome />
      </main>
    </>
  );
};

export default withBanner(ContactSuccessPage); 
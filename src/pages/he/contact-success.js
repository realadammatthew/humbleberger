import { useTranslation } from "react-i18next";
import ReturnToHome from "../../components/return-to-home";
import withBanner from "../../utils/with-banner";

const HebrewContactSuccess = () => {
  const { t } = useTranslation();

  return (
    <main style={{ direction: 'rtl', textAlign: 'right' }}>
      <section>
        <h2>{t('contact.success.title')}</h2>
        <p style={{ textAlign: "center", fontSize: "1.3rem" }}>
          {t('contact.success.message')}
        </p>
      </section>
      <ReturnToHome />
    </main>
  );
};

export default withBanner(HebrewContactSuccess); 
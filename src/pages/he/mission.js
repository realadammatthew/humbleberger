import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import ReturnToHome from "../../components/return-to-home";
import withBanner from "../../utils/with-banner";

const HebrewMission = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <section>
        <h2 style={{ marginBottom: '1rem' }}>{t('mission.title')}</h2>

        <div
          className="mission-content"
          style={{
            textAlign: "center",
            padding: "0 2rem 2rem",
          }}
        >
          <p style={{ margin: 0, fontSize: "1.6rem", lineHeight: "1.85" }}>
            {t('mission.content')}
          </p>
        </div>
      </section>
      <ReturnToHome />
    </main>
  );
};

export default withBanner(HebrewMission); 
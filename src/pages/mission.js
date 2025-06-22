import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import ReturnToHome from "../components/return-to-home";
import withBanner from "../utils/with-banner";

const Mission = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <section>
        <h2>{t('mission.title')}</h2>

        <div
          className="mission-content"
          style={{
            textAlign: "center",
            padding: "2rem",
            fontSize: "1.3rem",
            lineHeight: "1.6",
          }}
        >
          <p>
            {isHebrew 
              ? 'שירותי האמבלברגר קיימים כדי להלל את אלוהים על ידי הכרזת הבשורה של ישוע המשיח, עם קריאה ממוקדת להביא את הבשורה הטובה לעם היהודי בערים כמו ניו יורק ותל אביב. מושרשים ברוחו של השליח פאולוס, המשימה שלנו היא לבשר, לחנך ולהקים מטיפים ומורים נאמנים לנטוע ולרעות כנסיות ברחבי העולם. בעוד שהמיקוד העיקרי שלנו הוא משימות יהודיות, אנו עומדים במלואם על הצו הגדול, מבקשים להגיע לכל האבודים ולשרת את הכנסייה הגלובלית כפי שהאדון מוביל.'
              : 'Humbleberger Ministries exists to glorify God by proclaiming the gospel of Jesus Christ, with a focused calling to bring the good news to the Jewish people in cities like New York and Tel Aviv. Rooted in the spirit of the Apostle Paul, our mission is to evangelize, disciple, and raise up faithful preachers and teachers to plant and shepherd churches across the globe. While our primary focus is Jewish missions, we stand fully on the Great Commission, seeking to reach all the lost and serve the global Church as the Lord leads.'
            }
          </p>
        </div>
      </section>
      <ReturnToHome />
    </main>
  );
};

export default withBanner(Mission);

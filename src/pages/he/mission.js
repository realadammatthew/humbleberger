import ReturnToHome from "../../components/return-to-home";
import withBanner from "../../utils/with-banner";

const HebrewMission = () => (
  <main style={{ direction: 'rtl', textAlign: 'right' }}>
    <section>
      <h2>המשימה שלנו</h2>

      <div
        class="mission-content"
        style={{
          textAlign: "center",
          padding: "2rem",
          fontSize: "1.3rem",
          lineHeight: "1.6",
        }}
      >
        <p>
          משרדים המאוחדים של המבלברגר קיימים כדי לפאר את אלוהים על ידי הכרזת
          הבשורה של ישוע המשיח, עם קריאה ממוקדת להביא את הבשורה הטובה לעם
          היהודי בערים כמו ניו יורק ותל אביב. מושרשים ברוחו של השליח פאולוס,
          המשימה שלנו היא לבשר, לחנך, ולהקים מטיפים ומורים נאמנים לנטוע
          ולרעות כנסיות ברחבי העולם. בעוד שהמיקוד העיקרי שלנו הוא משימות
          יהודיות, אנו עומדים במלואם על הצו הגדול, שואפים להגיע לכל האבודים
          ולשרת את הכנסייה העולמית כפי שהאדון מוביל.
        </p>
      </div>
    </section>
    <ReturnToHome />
  </main>
);

export default withBanner(HebrewMission); 
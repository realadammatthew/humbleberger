import Link from "next/link";
import withBanner from "../../utils/with-banner";
import CookieBanner from "../../components/cookies";
import LanguageSwitcher from "../../components/language-switcher";

const HebrewHome = () => (
  <>
    <LanguageSwitcher />
    <main style={{ direction: 'rtl', textAlign: 'right' }}>
      <section>
        <h2>אודות המשימה</h2>
        <p style={{textAlign: "center", fontSize: "1.6rem"}}>
          ברוכים הבאים למשרדים המאוחדים של המבלברגר – שם אנו מכריזים על הבשורה של
          ישוע (ישו) עם לב מיוחד לעם היהודי. המשימה שלנו מושרשת ברומים א':16: "כי
          אינני בוש בבשורה, כי היא כוח אלוהים לישועה לכל המאמין, ליהודי בראשונה,
          וגם ליווני."
        </p>
        <p style={{textAlign: "center", fontSize: "1.3rem"}}>
          דרך תלמידות, הפצה ברחובות, וכלים דיגיטליים, אנו מכשירים מאמינים להגיע
          לאלה המחפשים אמת באהבה ובאמת. יש לכם שאלות? אתם יכולים לצ'וטט איתנו או
          למצוא כנסייה מאמינה בתנ"ך לידכם.
        </p>
        <div className="home-cta-buttons">
          <a
            href="/he/blog/who-is-yeshua?from=home"
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
            מי הוא ישוע?
          </a>
          <a
            href="/he/encountering-messiah"
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
            פגישה עם המשיח
          </a>
        </div>
      </section>
      <section>
        <div style={{ margin: "2rem 0", textAlign: "center" }}>
          <h2>צרו קשר איתנו</h2>
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
            🤔 סקרנים לגבי ישוע או התנ"ך? נשמח לצ'וטט איתכם!
          </p>
          <div className="button-group">
            <a
              className="button"
              href="https://chat.humbleberger.org/he?translation=csb"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 צ'וטטו איתנו
            </a>
            <Link href="/he/blog" legacyBehavior>
              <a className="button">
                🌐 קראו את הבלוג שלנו
              </a>
            </Link>
            <div className="other-buttons-grid">
              <a
                className="button"
                href="../../assets/Modern-Hebrew-New-Testament.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                📖 קראו את התנ"ך
              </a>
              <a
                className="button"
                href="https://www.9marks.org/church-search/"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 מצאו בית כנסת מקומי
              </a>
              <a
                className="button"
                href="https://eepurl.com/ja6zNY"
                target="_blank"
                rel="noopener noreferrer"
              >
                📰 קבלו את הניוזלטר שלנו
              </a>
              <a className="button" href="/he/contact">
                📬 צרו קשר
              </a>
              <a
                className="button"
                href="https://x.com/humbleberger"
                target="_blank"
                rel="noopener noreferrer"
              >
                𝕏 עקבו אחרינו ב-X
              </a>
              <a
                className="button donate-button"
                href="https://donorbox.org/humbleberger-ministries"
                target="_blank"
                rel="noopener noreferrer"
              >
                ❤️ תרמו
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <CookieBanner />
  </>
);

export default withBanner(HebrewHome); 
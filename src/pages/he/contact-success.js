import ReturnToHome from "../../components/return-to-home";
import withBanner from "../../utils/with-banner";

const HebrewContactSuccess = () => (
  <main style={{ direction: 'rtl', textAlign: 'right' }}>
    <section>
      <h2>תודה לכם!</h2>
      <p style={{ textAlign: "center", fontSize: "1.3rem" }}>
        ההודעה שלכם נשלחה בהצלחה. נחזור אליכם בהקדם האפשרי.
      </p>
    </section>
    <ReturnToHome />
  </main>
);

export default withBanner(HebrewContactSuccess); 
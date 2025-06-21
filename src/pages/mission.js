import ReturnToHome from "../components/return-to-home";
import withBanner from "../utils/with-banner";

const Mission = () => (
  <main>
    <section>
      <h2>Our Mission</h2>

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
          Humbleberger Ministries exists to glorify God by proclaiming the
          gospel of Jesus Christ, with a focused calling to bring the good news
          to the Jewish people in cities like New York and Tel Aviv. Rooted in
          the spirit of the Apostle Paul, our mission is to evangelize,
          disciple, and raise up faithful preachers and teachers to plant and
          shepherd churches across the globe. While our primary focus is Jewish
          missions, we stand fully on the Great Commission, seeking to reach all
          the lost and serve the global Church as the Lord leads.
        </p>
      </div>
    </section>
    <ReturnToHome />
  </main>
);

export default withBanner(Mission);

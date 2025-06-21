import Link from "next/link";
import withBanner from "../utils/with-banner";
import CookieBanner from "../components/cookies";

const Home = () => (
  <>
    <main>
      <section>
        <h2>About the Mission</h2>
        <p style={{textAlign: "center", fontSize: "1.6rem"}}>
          Welcome to Humbleberger Ministries – where we proclaim the gospel of
          Jesus (Yeshua) with a special heart for the Jewish people. Our mission
          is rooted in Romans 1:16: "For I am not ashamed of the gospel, because
          it is the power of God for salvation to everyone who believes, first
          to the Jew, and also to the Greek."
        </p>
        <p style={{textAlign: "center", fontSize: "1.3rem"}}>
          Through discipleship, street outreach, and digital tools, we're
          equipping believers to reach those searching for truth with love and
          truth. Got questions? You can chat with us or find a Bible-believing
          church near you.
        </p>
        <div className="home-cta-buttons">
          <a
            href="/blog/who-is-yeshua"
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
            Who is Yeshua?
          </a>
          <a
            href="/encountering-messiah"
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
            Encountering Messiah
          </a>
        </div>
      </section>
      <section>
        <div style={{ margin: "2rem 0", textAlign: "center" }}>
          <h2>Connect With Us</h2>
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
            🤔 Curious about God or the Bible? We'd love to chat with you!
          </p>
          <div className="button-group">
            <a
              className="button"
              href="https://chat.humbleberger.org/en?translation=csb"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat with Us
            </a>
            <Link href="/blog" legacyBehavior>
              <a className="button">
                🌐 Read Our Blog
              </a>
            </Link>
            <div className="other-buttons-grid">
              <a
                className="button"
                href="https://app.logos.com/books/LLS%3ACSB/references/bible%2Bcsb2.64.1.1?layout=reading&rightSidebar=closed"
                target="_blank"
                rel="noopener noreferrer"
              >
                📖 Read the Bible
              </a>
              <a
                className="button"
                href="https://www.google.com/maps/search/?api=1&query=messianic+church+near+me"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Find a Local Church
              </a>
              <a
                className="button"
                href="https://eepurl.com/ja6zNY"
                target="_blank"
                rel="noopener noreferrer"
              >
                📰 Get Our Newsletter
              </a>
              <a className="button" href="/contact">
                📬 Contact Us
              </a>
              <a
                className="button"
                href="https://x.com/humbleberger"
                target="_blank"
                rel="noopener noreferrer"
              >
                𝕏 Follow Us on X
              </a>
              <a
                className="button"
                href="https://donorbox.org/humbleberger-ministries"
                target="_blank"
                rel="noopener noreferrer"
              >
                ❤️ Donate
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <CookieBanner />
  </>
);

export default withBanner(Home);

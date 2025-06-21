import Head from "next/head";
import withBanner from "../utils/with-banner";
import Link from "next/link";

const ContactSuccessPage = () => (
  <>
    <Head>
      <title>Message Sent - Humbleberger Ministries</title>
    </Head>
    <main>
      <section style={{ textAlign: "center" }}>
        <h2>Message Sent!</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Thank you for getting in touch. We've received your message and will
          get back to you shortly.
        </p>
        <Link href="/" legacyBehavior>
          <a
            className="button"
            style={{
              display: "inline-block",
              width: "auto",
              fontSize: "1.1rem",
            }}
          >
            ← Return to Home
          </a>
        </Link>
      </section>
    </main>
  </>
);

export default withBanner(ContactSuccessPage); 
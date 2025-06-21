import Head from "next/head";
import ReturnToHome from "../components/return-to-home";
import withBanner from "../utils/with-banner";

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
      </section>
      <ReturnToHome />
    </main>
  </>
);

export default withBanner(ContactSuccessPage); 
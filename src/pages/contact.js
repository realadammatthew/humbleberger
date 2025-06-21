import Head from "next/head";
import withBanner from "../utils/with-banner";
import Link from "next/link";

const ContactPage = () => (
  <>
    <Head>
      <title>Contact Us - Humbleberger Ministries</title>
      <meta
        name="description"
        content="Get in touch with Humbleberger Ministries. Send us a message through our contact form."
      />
    </Head>
    <main>
      <section>
        <h2>Contact Us</h2>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Have a question, a prayer request, or want to get in touch? Send us a
          message below, and we'll get back to you as soon as possible.
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/contact-success"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display: "none" }}>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div>
            <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid #444",
                background: "#2a2d2e",
                color: "#fff",
                fontSize: "1rem",
              }}
            />
          </div>
          <div>
            <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid #444",
                background: "#2a2d2e",
                color: "#fff",
                fontSize: "1rem",
              }}
            />
          </div>
          <div>
            <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid #444",
                background: "#2a2d2e",
                color: "#fff",
                fontSize: "1rem",
                resize: "vertical",
              }}
            ></textarea>
          </div>
          <div>
            <button type="submit" className="button" style={{ width: "100%", fontSize: "1.2rem" }}>
              Send Message
            </button>
          </div>
        </form>
      </section>
      <nav style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/" legacyBehavior>
          <a style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>← Return to Home</a>
        </Link>
      </nav>
    </main>
  </>
);

export default withBanner(ContactPage); 
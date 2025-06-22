import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import withBanner from "../utils/with-banner";
import ReturnToHome from "../components/return-to-home";
import { useState } from "react";
import { useRouter } from "next/router";

const ContactPage = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(event.target.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        router.push(isHebrew ? "/he/contact-success/" : "/contact-success/");
      } else {
        // You can add more robust error handling here
        alert(isHebrew ? "אירעה שגיאה בשליחת הטופס. אנא נסה שוב." : "There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(isHebrew ? "אירעה שגיאה בלתי צפויה. אנא נסה שוב מאוחר יותר." : "An unexpected error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>{t('contact.title')} - {isHebrew ? 'משרדים של האמבלברגר' : 'Humbleberger Ministries'}</title>
        <meta
          name="description"
          content={isHebrew ? 'צרו קשר עם משרדים של האמבלברגר. שלחו לנו הודעה דרך טופס יצירת הקשר שלנו.' : 'Get in touch with Humbleberger Ministries. Send us a message through our contact form.'}
        />
      </Head>
      <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
        <section>
          <h2>{t('contact.title')}</h2>
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            {t('contact.description')}
          </p>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xnnvbwvz"
            method="POST"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <div>
              <label
                htmlFor="name"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                {t('contact.name')}
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
              <label
                htmlFor="email"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                {t('contact.email')}
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
              <label
                htmlFor="message"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                {t('contact.message')}
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
              <button
                type="submit"
                className="button"
                disabled={submitting}
                style={{
                  width: "100%",
                  fontSize: "1.2rem",
                  opacity: submitting ? 0.6 : 1,
                }}
              >
                {submitting ? (isHebrew ? "שולח..." : "Sending...") : t('contact.send')}
              </button>
            </div>
          </form>
        </section>
        <ReturnToHome />
      </main>
    </>
  );
};

export default withBanner(ContactPage); 
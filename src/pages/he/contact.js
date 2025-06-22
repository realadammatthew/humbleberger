import Head from "next/head";
import withBanner from "../../utils/with-banner";
import ReturnToHome from "../../components/return-to-home";
import { useState } from "react";
import { useRouter } from "next/router";

const HebrewContactPage = () => {
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
        router.push("/he/contact-success/");
      } else {
        // You can add more robust error handling here
        alert("אירעה שגיאה בשליחת הטופס. אנא נסו שוב.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("אירעה שגיאה בלתי צפויה. אנא נסו שוב מאוחר יותר.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>צרו קשר - משרדים המאוחדים של המבלברגר</title>
        <meta
          name="description"
          content="צרו קשר עם משרדים המאוחדים של המבלברגר. שלחו לנו הודעה דרך טופס יצירת הקשר שלנו."
        />
      </Head>
      <main style={{ direction: 'rtl', textAlign: 'right' }}>
        <section>
          <h2>צרו קשר</h2>
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            יש לכם שאלה, בקשה לתפילה, או רוצים ליצור קשר? שלחו לנו הודעה למטה,
            ונחזור אליכם בהקדם האפשרי.
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
                השם שלכם
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
                האימייל שלכם
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
                הודעה
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
                {submitting ? "שולח..." : "שלח הודעה"}
              </button>
            </div>
          </form>
        </section>
        <ReturnToHome />
      </main>
    </>
  );
};

export default withBanner(HebrewContactPage); 
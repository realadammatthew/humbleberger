import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import withBanner from "../utils/with-banner";
import ReturnToHome from "../components/return-to-home";
import Script from "next/script";

const DonatePage = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <>
      <Head>
        <title>{t('pageTitle.donate')}</title>
        <meta
          name="description"
          content={t('meta.donate')}
        />
      </Head>

      <Script
        src="https://donorbox.org/widget.js"
        strategy="lazyOnload"
      />

      <main style={{ direction: isHebrew ? 'rtl' : 'ltr', padding: '0' }}>
        <section style={{ padding: '1.5rem 1rem', margin: '1rem 0' }}>
          <h2 style={{ marginBottom: '1rem', marginTop: 0 }}>{t('donate.title')}</h2>
          <div
            style={{
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "1.4rem",
                color: "#d0d0d0",
                lineHeight: 1.8,
                maxWidth: "700px",
                margin: "0 auto 0.75rem",
              }}
            >
              {t('donate.description')}
            </p>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#a0a0a0",
                fontStyle: "italic",
                maxWidth: "700px",
                margin: "0 auto 1rem",
              }}
            >
              {t('donate.taxDeductible')}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              width: "100%",
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "442px",
                margin: "0 auto",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://donorbox.org/embed/humbleberger-ministries?amount=1000&show_content=true"
                name="donorbox"
                allowpaymentrequest="allowpaymentrequest"
                seamless="seamless"
                frameBorder="0"
                scrolling="no"
                height="900px"
                width="442"
                style={{
                  maxWidth: "442px",
                  minWidth: "250px",
                  width: "442px",
                  maxHeight: "none",
                  border: "none",
                  overflow: "hidden",
                  display: "block",
                  margin: "0",
                  padding: 0,
                }}
                allow="payment"
              />
            </div>
          </div>

          <div
            style={{
              marginTop: "3rem",
              textAlign: "center",
              padding: "2rem",
              background: "rgba(184, 134, 11, 0.1)",
              borderRadius: "12px",
              border: "1px solid rgba(184, 134, 11, 0.2)",
            }}
          >
            <h3
              style={{
                color: "#f5d976",
                fontSize: "1.6rem",
                marginBottom: "1rem",
              }}
            >
              {t('donate.whySupport.title')}
            </h3>
            <p
              style={{
                fontSize: "1.3rem",
                color: "#d0d0d0",
                lineHeight: 1.8,
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              {t('donate.whySupport.description')}
            </p>
          </div>
        </section>
        <div style={{ padding: '0 1rem' }}>
          <ReturnToHome />
        </div>
      </main>
    </>
  );
};

export default withBanner(DonatePage);

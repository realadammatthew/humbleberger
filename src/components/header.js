import Head from "next/head";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{t("header.title")}</title>
      <meta
        name="description"
        content={t("header.description")}
      />
      <meta
        name="keywords"
        content={t("header.keywords")}
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://humbleberger.org/" />
      <meta
        property="og:title"
        content={t("header.ogTitle")}
      />
      <meta
        property="og:description"
        content={t("header.ogDescription")}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://humbleberger.org/" />
      <meta
        property="og:image"
        content="https://humbleberger.org/social-preview.png"
      />
      <meta property="og:site_name" content="Humbleberger Ministries" />
      <meta property="og:locale" content={i18n.language === 'he' ? 'he_IL' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={t("header.twitterTitle")}
      />
      <meta
        name="twitter:description"
        content={t("header.twitterDescription")}
      />
      <meta
        name="twitter:image"
        content="https://humbleberger.org/social-preview.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "NonprofitOrganization",
          "name": "Humbleberger Ministries",
          "url": "https://humbleberger.org",
          "logo": "https://humbleberger.org/logo.png",
          "description": "${t("header.structuredDataDescription")}",
          "founder": {
            "@type": "Person",
            "name": "Daniel J. Cross",
            "email": "shalom@humbleberger.org",
            "url": "https://humbleberger.org"
          },
          "email": "shalom@humbleberger.org",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "NC",
            "addressCountry": "US"
          },
          "nonprofitStatus": "https://schema.org/Nonprofit501c3",
          "taxID": "33-4533201",
          "areaServed": "Worldwide",
          "sameAs": [
            "https://x.com/humbleberger"
          ],
          "hasPart": [
            {
              "@type": "WebPage",
              "name": "${t("header.statementOfFaith")}",
              "url": "https://humbleberger.org/statement-of-faith"
            },
            {
              "@type": "WebPage",
              "name": "${t("header.statementOnAntisemitism")}",
              "url": "https://humbleberger.org/anti-semitism"
            },
            {
              "@type": "WebPage",
              "name": "${t("header.countingTheCost")}",
              "url": "https://humbleberger.org/counting-the-cost"
            },
            {
              "@type": "DonateAction",
              "name": "${t("header.donate")}",
              "url": "https://donorbox.org/humbleberger-ministries",
              "target": "https://donorbox.org/humbleberger-ministries"
            }
          ]
        }`,
        }}
      />
      <meta name="author" content="Humbleberger Ministries" />
      <meta name="theme-color" content="#101828" />
      <meta name="language" content={i18n.language === 'he' ? 'he-IL' : 'en-US'} />
      <meta
        name="copyright"
        content={t("header.copyright")}
      />
      <link rel="alternate" hrefLang="en" href="https://humbleberger.org/" />
      <link rel="alternate" type="application/rss+xml" title="Humbleberger Ministries Blog RSS Feed" href="https://humbleberger.org/rss.xml" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="stylesheet" href="/styles.css" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WDGNT0XVNN"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-WDGNT0XVNN');`,
        }}
      />
    </Head>
  );
};
export default Header;

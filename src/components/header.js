import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import { useRouter } from "next/router";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { isHebrew } = useLanguage();
  const router = useRouter();
  
  // Generate dynamic URLs based on current language
  // Remove /he prefix from asPath if it exists to avoid duplication
  const cleanPath = router.asPath.replace(/^\/he/, '');
  const currentUrl = isHebrew ? `${t('urls.site')}/he${cleanPath}` : `${t('urls.site')}${cleanPath}`;
  const canonicalUrl = isHebrew ? `${t('urls.site')}/he/` : `${t('urls.site')}/`;

  // Fix alternate hreflang URLs
  const englishAlternateUrl = `${t('urls.site')}/`;
  const hebrewAlternateUrl = `${t('urls.site')}/he/`;

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
      <link rel="canonical" href={canonicalUrl} />
      <meta
        property="og:title"
        content={t("header.ogTitle")}
      />
      <meta
        property="og:description"
        content={t("header.ogDescription")}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta
        property="og:image"
        content={t("urls.socialPreview")}
      />
      <meta property="og:site_name" content={t("header.title")} />
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
        content={t("urls.socialPreview")}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "NonprofitOrganization",
          "name": "${t("header.title")}",
          "url": "${canonicalUrl}",
          "logo": "${t('urls.logo')}",
          "description": "${t("header.structuredDataDescription")}",
          "founder": {
            "@type": "Person",
            "name": "${t('person.founder.name')}",
            "email": "${t('person.founder.email')}",
            "url": "${canonicalUrl}"
          },
          "email": "${t('person.founder.email')}",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "NC",
            "addressCountry": "US"
          },
          "nonprofitStatus": "https://schema.org/Nonprofit501c3",
          "taxID": "${t('common.fein.number')}",
          "areaServed": "Worldwide",
          "sameAs": [
            "${t('urls.twitter')}"
          ],
          "hasPart": [
            {
              "@type": "WebPage",
              "name": "${t("header.statementOfFaith")}",
              "url": "${t('urls.site')}${t('urls.internal.statementOfFaith')}"
            },
            {
              "@type": "WebPage",
              "name": "${t("header.statementOnAntisemitism")}",
              "url": "${t('urls.site')}${t('urls.internal.antisemitism')}"
            },
            {
              "@type": "WebPage",
              "name": "${t("header.countingTheCost")}",
              "url": "${t('urls.site')}${t('urls.internal.countingCost')}"
            },
            {
              "@type": "DonateAction",
              "name": "${t("header.donate")}",
              "url": "${t('urls.donate')}",
              "target": "${t('urls.donate')}"
            }
          ]
        }`,
        }}
      />
      <meta name="author" content={t("header.title")} />
      <meta name="theme-color" content="#101828" />
      <meta name="language" content={i18n.language === 'he' ? 'he-IL' : 'en-US'} />
      <meta
        name="copyright"
        content={t("header.copyright")}
      />
      <link rel="alternate" hrefLang="en" href={englishAlternateUrl} />
      <link rel="alternate" hrefLang="he" href={hebrewAlternateUrl} />
      <link rel="alternate" type="application/rss+xml" title={t("header.rssTitle")} href={isHebrew ? `${t('urls.site')}/rss-he.xml` : `${t('urls.site')}/rss.xml`} />
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

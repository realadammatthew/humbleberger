import Head from "next/head";

const Header = () => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Humbleberger Ministries – Jewish Evangelism & Gospel Mission</title>
    <meta
      name="description"
      content="Humbleberger Ministries exists to glorify God through gospel proclamation, with a calling to reach the Jewish people and the nations with the message of salvation through Yeshua the Messiah."
    />
    <meta
      name="keywords"
      content="Jewish evangelism, gospel proclamation, Messianic outreach, Christian discipleship, Romans 1:16, Yeshua the Messiah, street ministry, Bible truth, gospel to the Jew first, Christ-centered mission, Christian nonprofit, find a church, Bible resources, Christian giving, North Carolina ministry"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://humbleberger.org/" />
    <meta
      property="og:title"
      content="Humbleberger Ministries | Jewish Evangelism & Gospel Mission"
    />
    <meta
      property="og:description"
      content="Proclaiming the gospel of Jesus (Yeshua) with love and truth — to the Jew first, and also to the Gentile. Explore our mission, connect with us, or support Christ-centered outreach."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://humbleberger.org/" />
    <meta
      property="og:image"
      content="https://humbleberger.org/social-preview.png"
    />
    <meta property="og:site_name" content="Humbleberger Ministries" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Humbleberger Ministries – Gospel Proclamation Rooted in Romans 1:16"
    />
    <meta
      name="twitter:description"
      content="Jewish evangelism. Christ-centered outreach. Connect with us to learn about Jesus, find a church, or support the mission."
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
        "description": "Humbleberger Ministries proclaims the gospel of Jesus (Yeshua) with a heart for Jewish evangelism, discipleship, and digital outreach. Rooted in Romans 1:16.",
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
            "name": "Statement of Faith",
            "url": "https://humbleberger.org/statement-of-faith"
          },
          {
            "@type": "WebPage",
            "name": "Statement on Antisemitism",
            "url": "https://humbleberger.org/anti-semitism"
          },
          {
            "@type": "WebPage",
            "name": "Counting the Cost",
            "url": "https://humbleberger.org/counting-the-cost"
          },
          {
            "@type": "DonateAction",
            "name": "Donate to Humbleberger Ministries",
            "url": "https://donorbox.org/humbleberger-ministries",
            "target": "https://donorbox.org/humbleberger-ministries"
          }
        ]
      }`,
      }}
    />
    <meta name="author" content="Humbleberger Ministries" />
    <meta name="theme-color" content="#101828" />
    <meta name="language" content="en-US" />
    <meta
      name="copyright"
      content="© 2025 Humbleberger Ministries. All rights reserved."
    />
    <link rel="alternate" hrefLang="en" href="https://humbleberger.org/" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
export default Header;

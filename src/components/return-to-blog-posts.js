import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";

const ReturnToBlogPosts = ({ referrer }) => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();
  const router = useRouter();
  
  // Determine if we're on a Hebrew page by checking the current path
  const isHebrewPage = router.asPath.startsWith('/he');
  const [returnUrl, setReturnUrl] = useState(isHebrewPage ? "/he/blog" : "/blog");
  const [returnText, setReturnText] = useState(t('blog.title'));

  useEffect(() => {
    // If a specific referrer is provided, use it
    if (referrer) {
      let hebrewReferrer;
      if (isHebrewPage) {
        // If the referrer already starts with /he, don't add it again
        hebrewReferrer = referrer.startsWith('/he') ? referrer : `/he${referrer}`;
      } else {
        hebrewReferrer = referrer;
      }
      setReturnUrl(hebrewReferrer);
      if (referrer === "/encountering-messiah") {
        setReturnText(isHebrewPage ? 'פגישה עם המשיח' : 'Encountering Messiah');
      } else if (referrer === "/") {
        setReturnText(t('common.home'));
      } else {
        setReturnText(t('blog.title'));
      }
      return;
    }

    // Check URL parameters for referrer information
    if (typeof window !== "undefined" && router.query.from) {
      if (router.query.from === "encountering-messiah") {
        setReturnUrl(isHebrewPage ? "/he/encountering-messiah" : "/encountering-messiah");
        setReturnText(isHebrewPage ? 'פגישה עם המשיח' : 'Encountering Messiah');
      } else if (router.query.from === "home") {
        setReturnUrl(isHebrewPage ? "/he" : "/");
        setReturnText(t('common.home'));
      }
    }
  }, [referrer, router.query.from, isHebrewPage, t]);

  return (
    <nav style={{ marginTop: "2rem", textAlign: "center" }}>
      <Link href={returnUrl} legacyBehavior>
        <a
          style={{
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          {isHebrewPage ? '← חזרה ל' : '← Return to '}{returnText}
        </a>
      </Link>
    </nav>
  );
};

export default ReturnToBlogPosts; 
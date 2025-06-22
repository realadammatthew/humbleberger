import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";

const ReturnToBlogPosts = ({ referrer }) => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();
  const [returnUrl, setReturnUrl] = useState(isHebrew ? "/he/blog" : "/blog");
  const [returnText, setReturnText] = useState(t('blog.title'));
  const router = useRouter();

  useEffect(() => {
    // If a specific referrer is provided, use it
    if (referrer) {
      const hebrewReferrer = isHebrew ? `/he${referrer}` : referrer;
      setReturnUrl(hebrewReferrer);
      if (referrer === "/encountering-messiah") {
        setReturnText(isHebrew ? 'פגישה עם המשיח' : 'Encountering Messiah');
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
        setReturnUrl(isHebrew ? "/he/encountering-messiah" : "/encountering-messiah");
        setReturnText(isHebrew ? 'פגישה עם המשיח' : 'Encountering Messiah');
      } else if (router.query.from === "home") {
        setReturnUrl(isHebrew ? "/he" : "/");
        setReturnText(t('common.home'));
      }
    }
  }, [referrer, router.query.from, isHebrew, t]);

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
          {isHebrew ? '← חזרה ל' : '← Return to '}{returnText}
        </a>
      </Link>
    </nav>
  );
};

export default ReturnToBlogPosts; 
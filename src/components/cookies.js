import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";

export default function CookieBanner() {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !localStorage.getItem("cookiesAccepted")
    ) {
      setVisible(true);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };
  
  if (!visible) return null;
  
  return (
    <div
      id="cookie-banner"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(0,0,0,0.9)",
        color: "white",
        padding: "1rem",
        zIndex: 1000,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
        direction: isHebrew ? 'rtl' : 'ltr',
      }}
    >
      <div
        className="content"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <p style={{ margin: 0, color: "white" }}>
          {t('cookies.message')}
        </p>
        <button
          id="accept-cookies"
          onClick={acceptCookies}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: 4,
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {t('cookies.accept')}
        </button>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";

const Banner = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <header style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <div
        className="header-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "1rem",
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link href={isHebrew ? "/he" : "/"} legacyBehavior>
            <a>
              <img
                src="/logo.png"
                alt={t('banner.logoAlt')}
                style={{ maxWidth: "120px", height: "auto" }}
              />
            </a>
          </Link>
          <h1
            style={{
              margin: 0,
              lineHeight: 1.1,
              fontSize: "3.5rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {isHebrew ? (
              <>
                שירותי
                <br />
                האמבלברגר
              </>
            ) : (
              <>
                Humbleberger
                <br />
                Ministries
              </>
            )}
          </h1>
        </div>
        <p
          style={{
            marginTop: "0.25rem",
            fontSize: "2rem",
            color: "#e0e0e0",
            maxWidth: "600px",
          }}
        >
          {t('banner.jewishEvangelism')}
        </p>
        <p
          style={{
            marginTop: "-3rem",
            fontSize: "1.6rem",
            color: "#e0e0e0",
            maxWidth: "600px",
          }}
        >
          {t('banner.gospelProclamation')}
        </p>
        <p
          style={{
            marginTop: "-2.65rem",
            fontSize: "1.8rem",
            color: "#e0e0e0",
            maxWidth: "600px",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          {t('banner.messiahCentered')}
        </p>
        <p
          style={{
            marginTop: "-2rem",
            fontSize: "0.85rem",
            color: "#e0e0e0",
            maxWidth: "600px",
          }}
        >
          {t('banner.ministryReference')}
        </p>
      </div>
    </header>
  );
};

export default Banner;

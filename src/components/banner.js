import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";

const Banner = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <header
      style={{
        direction: isHebrew ? 'rtl' : 'ltr',
        background: 'linear-gradient(180deg, rgba(26, 29, 35, 0.8) 0%, rgba(35, 39, 46, 0.6) 100%)',
        borderBottom: '1px solid rgba(184, 134, 11, 0.2)',
      }}
    >
      <div
        className="header-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "0.75rem",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "2rem 1.5rem 2.5rem",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "1.5rem",
            color: "#d0d0d0",
            maxWidth: "700px",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          {t('banner.jewishEvangelism')}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "1.35rem",
            color: "#c8c8c8",
            maxWidth: "700px",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          {t('banner.gospelProclamation')}
        </p>
        <p
          style={{
            margin: "0.5rem 0 0",
            fontSize: "1.55rem",
            color: "#f5d976",
            maxWidth: "700px",
            fontWeight: 700,
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          {t('banner.messiahCentered')}
        </p>
        <p
          style={{
            margin: "0.75rem 0 0",
            fontSize: "0.85rem",
            color: "#a0a0a0",
            maxWidth: "700px",
            fontStyle: "italic",
          }}
        >
          {t('banner.ministryReference')}
        </p>
      </div>
    </header>
  );
};

export default Banner;

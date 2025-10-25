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
        background: 'transparent',
        borderBottom: 'none',
        padding: 0,
        margin: 0,
      }}
    >
    </header>
  );
};

export default Banner;

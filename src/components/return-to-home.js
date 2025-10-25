import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";

const ReturnToHome = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <nav style={{ marginTop: "2rem", textAlign: "center" }}>
      <Link href={isHebrew ? "/he" : "/"} legacyBehavior>
        <a
          style={{
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1.1rem",
          }}
        >
          {t('common.returnToHome')}
        </a>
      </Link>
    </nav>
  );
};

export default ReturnToHome; 
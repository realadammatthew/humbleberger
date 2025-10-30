import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";

const Copyright = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <footer style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <div className="footer-content">
        <p>
          {t('copyright.text')}
        </p>
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.9rem",
            color: "#666",
            textAlign: "center",
          }}
        >
          {t('copyright.legal')}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem", fontSize: "0.9rem" }}>
          <Link href={t('urls.internal.countingCostFromHome')} legacyBehavior>
            <a
              style={{
                color: "#666",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('nav.countingCost')}
            </a>
          </Link>
          <span style={{ color: "#666" }}>|</span>
          <Link href={t('urls.internal.whoIsYeshuaFromHome')} legacyBehavior>
            <a
              style={{
                color: "#666",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('nav.whoIsYeshua')}
            </a>
          </Link>
          <span style={{ color: "#666" }}>|</span>
          <Link href={t('urls.internal.fromTrenchesFromHome')} legacyBehavior>
            <a
              style={{
                color: "#666",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('nav.fromTrenches')}
            </a>
          </Link>
          <span style={{ color: "#666" }}>|</span>
          <Link href={t('urls.internal.shemaFromHome')} legacyBehavior>
            <a
              style={{
                color: "#666",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('nav.shema')}
            </a>
          </Link>
          <span style={{ color: "#666" }}>|</span>
          <Link href={t('urls.internal.encounteringMessiah')} legacyBehavior>
            <a
              style={{
                color: "#666",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('nav.encounteringMessiah')}
            </a>
          </Link>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontSize: "0.9rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <Link href={t('urls.internal.mission')} legacyBehavior>
            <a
              style={{
                color: "#666",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('common.mission')}
            </a>
          </Link>
          <span style={{ color: "#666" }}>|</span>
          <Link href={t('urls.internal.statementOfFaith')} legacyBehavior>
            <a
              style={{
                color: "#666",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('copyright.statement')}
            </a>
          </Link>
          <span style={{ color: "#666" }}>|</span>
          <Link href={t('urls.internal.antisemitism')} legacyBehavior>
            <a
              style={{
                color: "#666",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('nav.antisemitism')}
            </a>
          </Link>
        </div>
        <div
          style={{
            fontSize: "0.9rem",
            marginTop: "0.8rem",
            color: "#999",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <Link href={t('urls.internal.home')} legacyBehavior>
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('common.home')}
            </a>
          </Link>
          <span style={{ color: "#888" }}>|</span>
          <Link
            href={t('urls.chat')}
            legacyBehavior
          >
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('common.chat')}
            </a>
          </Link>
          <span style={{ color: "#888" }}>|</span>
          <Link href={t('urls.internal.blog')} legacyBehavior>
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('common.blog')}
            </a>
          </Link>
          <span style={{ color: "#888" }}>|</span>
          <Link href={t('urls.internal.rss')} legacyBehavior>
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('common.rss')}
            </a>
          </Link>
          <span style={{ color: "#888" }}>|</span>

          <Link href={t('urls.newsletter')} legacyBehavior>
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('common.subscribe')}
            </a>
          </Link>
          <span style={{ color: "#888" }}>|</span>
          <Link
            href={t('urls.internal.donate')}
            legacyBehavior
          >
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('common.donate')}
            </a>
          </Link>
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            marginTop: "0.5rem",
            color: "#888",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <Link href={t('urls.internal.privacyPolicy')} legacyBehavior>
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('copyright.privacy')}
            </a>
          </Link>
          <span style={{ color: "#888" }}>|</span>
          <Link href={t('urls.internal.termsOfUse')} legacyBehavior>
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('copyright.terms')}
            </a>
          </Link>
          <span style={{ color: "#888" }}>|</span>
          <Link href={t('urls.internal.copyright')} legacyBehavior>
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('common.copyright')}
            </a>
          </Link>
          <span style={{ color: "#888" }}>|</span>
          <Link href={t('urls.internal.contact')} legacyBehavior>
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('common.contact')}
            </a>
          </Link>
          <span style={{ color: "#888" }}>|</span>
          <Link href={t('urls.internal.meetMessiah')} legacyBehavior>
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              {t('nav.meetMessiah')}
            </a>
          </Link>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(184, 134, 11, 0.3)",
            marginTop: "1.5rem",
            paddingTop: "1rem",
            fontSize: "0.85rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <Link href={t('urls.external.work')} legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#b8860b",
                margin: "0 5px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                borderBottom: "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#daa520";
                e.currentTarget.style.borderBottomColor = "#daa520";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#b8860b";
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              {t('nav.work')}
            </a>
          </Link>
          <span style={{ color: "#555" }}>•</span>
          <Link href={t('urls.external.policy')} legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#b8860b",
                margin: "0 5px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                borderBottom: "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#daa520";
                e.currentTarget.style.borderBottomColor = "#daa520";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#b8860b";
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              {t('nav.policy')}
            </a>
          </Link>
          <span style={{ color: "#555" }}>•</span>
          <Link href={t('urls.external.chat')} legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#b8860b",
                margin: "0 5px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                borderBottom: "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#daa520";
                e.currentTarget.style.borderBottomColor = "#daa520";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#b8860b";
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              {t('nav.chat')}
            </a>
          </Link>
          <span style={{ color: "#555" }}>•</span>
          <Link href={t('urls.external.blog')} legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#b8860b",
                margin: "0 5px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                borderBottom: "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#daa520";
                e.currentTarget.style.borderBottomColor = "#daa520";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#b8860b";
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              {t('nav.blog')}
            </a>
          </Link>
        </div>
        <p style={{ fontSize: "0.7rem", marginTop: "1rem", color: "#666" }}>
          {t('common.fein.title')}: {t('common.fein.number')}
        </p>
        <p style={{ fontSize: "0.7rem", marginTop: "0.1rem", color: "#666" }}>
          {t('copyright.developedBy')} <a href="https://hire.adam.matthewsteinberger.com" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "underline" }}>Adam Matthew Steinberger LLC</a>
        </p>
      </div>
    </footer>
  );
};

export default Copyright;

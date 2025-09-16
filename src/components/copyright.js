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
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
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
            href={t('urls.donate')}
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

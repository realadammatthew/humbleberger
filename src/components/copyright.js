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
          {isHebrew 
            ? t('copyright.legal')
            : 'Humbleberger Ministries is officially registered with the state of North Carolina and the Internal Revenue Service as a 501(c)(3) non-profit organization. All donations are tax-deductible.'
          }
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
          <Link href={isHebrew ? "/he/blog/counting-the-cost?from=home" : "/blog/counting-the-cost?from=home"} legacyBehavior>
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
          <Link href={isHebrew ? "/he/blog/who-is-yeshua?from=home" : "/blog/who-is-yeshua?from=home"} legacyBehavior>
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
          <Link href={isHebrew ? "/he/blog/from-the-trenches-an-evangelism-guide?from=home" : "/blog/from-the-trenches-an-evangelism-guide?from=home"} legacyBehavior>
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
          <Link href={isHebrew ? "/he/blog/yeshua-and-the-shema?from=home" : "/blog/yeshua-and-the-shema?from=home"} legacyBehavior>
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
          <Link href={isHebrew ? "/he/encountering-messiah" : "/encountering-messiah"} legacyBehavior>
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
          <Link href={isHebrew ? "/he/mission" : "/mission"} legacyBehavior>
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
          <Link href={isHebrew ? "/he/statement-of-faith" : "/statement-of-faith"} legacyBehavior>
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
          <Link href={isHebrew ? "/he/anti-semitism" : "/anti-semitism"} legacyBehavior>
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
          <Link href={isHebrew ? "/he" : "/"} legacyBehavior>
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
            href={isHebrew ? "https://chat.humbleberger.org/he?translation=csb" : "https://chat.humbleberger.org/en?translation=csb"}
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
          <Link href={isHebrew ? "/he/blog" : "/blog"} legacyBehavior>
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
          <Link href={isHebrew ? "/rss-he.xml" : "/rss.xml"} legacyBehavior>
            <a
              style={{
                color: "#888",
                margin: "0 5px",
                textDecoration: "underline",
              }}
            >
              RSS
            </a>
          </Link>
          <span style={{ color: "#888" }}>|</span>

          <Link href={isHebrew ? "https://mailchi.mp/2757d0257dda/humbleberger-ministries-he" : "https://eepurl.com/ja6zNY"} legacyBehavior>
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
            href="https://donorbox.org/humbleberger-ministries"
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
          <Link href={isHebrew ? "/he/privacy-policy" : "/privacy-policy"} legacyBehavior>
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
          <Link href={isHebrew ? "/he/terms-of-use" : "/terms-of-use"} legacyBehavior>
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
          <Link href={isHebrew ? "/he/copyright" : "/copyright"} legacyBehavior>
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
          <Link href={isHebrew ? "/he/contact" : "/contact"} legacyBehavior>
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
        </div>
        <p style={{ fontSize: "0.7rem", marginTop: "1rem", color: "#666" }}>
          FEIN: 33-4533201
        </p>
      </div>
    </footer>
  );
};

export default Copyright;

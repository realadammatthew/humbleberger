import Head from "next/head";
import withBanner from "../utils/with-banner";
import Link from "next/link";
import ReturnToHome from "../components/return-to-home";
import { useTranslation } from "react-i18next";

const TermsOfUse = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('terms.title')} - {t('org.name')}</title>
        <meta
          name="description"
          content={t('legal.terms.description')}
        />
      </Head>
      <main>
        <section>
          <h2>{t('terms.title')}</h2>

          <div className="terms-content">
            <p>
              <em>{t('terms.lastUpdated')}</em>
            </p>

            <p>
              {t('terms.intro')}
            </p>

            <h3>{t('terms.acceptance.title')}</h3>
            <p>
              {t('terms.acceptance.content')}
            </p>

            <h3>{t('terms.content.title')}</h3>
            <p>
              {t('terms.content.content')}
            </p>

            <h3>{t('terms.conduct.title')}</h3>
            <p>{t('terms.conduct.intro')}</p>
            <ul>
              <li>{t('terms.conduct.item1')}</li>
              <li>{t('terms.conduct.item2')}</li>
              <li>
                {t('terms.conduct.item3')}
              </li>
              <li>
                {t('terms.conduct.item4')}
              </li>
              <li>
                {t('terms.conduct.item5')}
              </li>
              <li>
                {t('terms.conduct.item6')}
              </li>
            </ul>

            <h3>{t('terms.links.title')}</h3>
            <p>
              {t('terms.links.content')}
            </p>

            <h3>{t('terms.userContent.title')}</h3>
            <p>
              {t('terms.userContent.content')}
            </p>

            <h3>{t('terms.disclaimer.title')}</h3>
            <p>
              {t('terms.disclaimer.content')}
            </p>

            <h3>{t('terms.liability.title')}</h3>
            <p>
              {t('terms.liability.content')}
            </p>

            <h3>{t('terms.indemnification.title')}</h3>
            <p>
              {t('terms.indemnification.content')}
            </p>

            <h3>{t('terms.changes.title')}</h3>
            <p>
              {t('terms.changes.content')}
            </p>

            <h3>{t('terms.governing.title')}</h3>
            <p>
              {t('terms.governing.content')}
            </p>

            <h3>{t('terms.contact.title')}</h3>
            <p>
              {t('terms.contact.content')} <a href="/contact" style={{ color: "#2563eb" }}>{t('terms.contact.link')}</a>.
            </p>
          </div>
        </section>
        <ReturnToHome />
      </main>
    </>
  );
};

export default withBanner(TermsOfUse);

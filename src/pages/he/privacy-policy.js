import Head from "next/head";
import ReturnToHome from "../../components/return-to-home";
import withBanner from "../../utils/with-banner";
import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "react-i18next";

const PrivacyPolicyHebrew = () => {
  const { isHebrew } = useLanguage();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('legal.privacy.title')} - {t('copyright.privacy')}</title>
        <meta
          name="description"
          content={t('legal.privacy.description')}
        />
      </Head>
      <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
        <section>
          <h2>{t('privacy.title')}</h2>

          <div className="policy-content">
            <p>
              <em>{t('privacy.lastUpdated')}</em>
            </p>

            <p>
              {t('privacy.intro')}
            </p>

            <h3>{t('privacy.collect.title')}</h3>
            <p>
              {t('privacy.collect.content')}
            </p>

            <h3>{t('privacy.use.title')}</h3>
            <p>{t('privacy.use.intro')}</p>
            <ul>
              <li>
                {t('privacy.use.item1')}
              </li>
              <li>
                {t('privacy.use.item2')}
              </li>
              <li>{t('privacy.use.item3')}</li>
              <li>
                {t('privacy.use.item4')}
              </li>
            </ul>

            <h3>{t('privacy.cookies.title')}</h3>
            <p>
              {t('privacy.cookies.content')}
            </p>

            <h3>{t('privacy.thirdParty.title')}</h3>
            <p>
              {t('privacy.thirdParty.content')}
            </p>

            <h3>{t('privacy.rights.title')}</h3>
            <p>{t('privacy.rights.intro')}</p>
            <ul>
              <li>{t('privacy.rights.item1')}</li>
              <li>{t('privacy.rights.item2')}</li>
              <li>{t('privacy.rights.item3')}</li>
              <li>{t('privacy.rights.item4')}</li>
            </ul>

            <h3>{t('privacy.children.title')}</h3>
            <p>
              {t('privacy.children.content')}
            </p>

            <h3>{t('privacy.changes.title')}</h3>
            <p>
              {t('privacy.changes.content')}
            </p>

            <h3>{t('privacy.contact.title')}</h3>
            <p>
              {t('privacy.contact.content')} <a href="/he/contact" style={{ color: "#2563eb" }}>{t('privacy.contact.link')}</a>.
            </p>
          </div>
        </section>
        <ReturnToHome />
      </main>
    </>
  );
}

export default withBanner(PrivacyPolicyHebrew); 
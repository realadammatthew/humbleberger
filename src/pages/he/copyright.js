import Head from "next/head";
import ReturnToHome from "../../components/return-to-home";
import withBanner from "../../utils/with-banner";
import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "react-i18next";

const CopyrightPageHebrew = () => {
  const { isHebrew } = useLanguage();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('copyright.page.title')}</title>
        <meta
          name="description"
          content={t('copyright.page.description')}
        />
      </Head>
      <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
        <section>
          <h2>{t('copyright.page.heading')}</h2>

          <div className="copyright-content">
            <p>
              <em>{t('copyright.page.lastUpdated')}</em>
            </p>

            <h3>{t('copyright.page.websiteContent.title')}</h3>
            <p>
              {t('copyright.page.websiteContent.text', { year: new Date().getFullYear() })}
            </p>

            <h3>{t('copyright.page.trademarks.title')}</h3>
            <p>
              {t('copyright.page.trademarks.text')}
            </p>

            <h3>{t('copyright.page.biblicalContent.title')}</h3>
            <p>
              {t('copyright.page.biblicalContent.csb')}
            </p>
            <p>
              {t('copyright.page.biblicalContent.esv')}
            </p>
            <p>
              {t('copyright.page.biblicalContent.niv')}
            </p>

            <h3>{t('copyright.page.educationalUse.title')}</h3>
            <p>
              {t('copyright.page.educationalUse.text')}
            </p>
            <ul>
              <li>{t('copyright.page.educationalUse.rule1')}</li>
              <li>{t('copyright.page.educationalUse.rule2')}</li>
              <li>
                {t('copyright.page.educationalUse.rule3')}
              </li>
              <li>
                {t('copyright.page.educationalUse.rule4')}
              </li>
            </ul>

            <h3>{t('copyright.page.permission.title')}</h3>
            <p>
              {t('copyright.page.permission.text')}
            </p>
            <p>
              {t('copyright.page.permission.contactText')} <a href="/he/contact" style={{ color: "#2563eb" }}>{t('copyright.page.permission.link')}</a>.
            </p>

            <h3>{t('copyright.page.infringement.title')}</h3>
            <p>
              {t('copyright.page.infringement.text')}
            </p>
            <ul>
              <li>
                {t('copyright.page.infringement.item1')}
              </li>
              <li>
                {t('copyright.page.infringement.item2')}
              </li>
              <li>
                {t('copyright.page.infringement.item3')}
              </li>
              <li>
                {t('copyright.page.infringement.item4')}
              </li>
              <li>
                {t('copyright.page.infringement.item5')}
              </li>
            </ul>

            <p>{t('copyright.page.infringement.notice')}</p>
            <p>
              {t('copyright.page.infringement.contact').split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < 2 && <br />}
                </span>
              ))}
            </p>
          </div>
        </section>
        <ReturnToHome />
      </main>
    </>
  );
}

export default withBanner(CopyrightPageHebrew); 
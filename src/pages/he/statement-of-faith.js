import Head from "next/head";
import ReturnToHome from "../../components/return-to-home";
import withBanner from "../../utils/with-banner";
import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "react-i18next";

const StatementOfFaithHebrew = () => {
  const { isHebrew } = useLanguage();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('statement.title')} - {t('org.name')}</title>
        <meta
          name="description"
          content={t('legal.statement.description')}
        />
      </Head>
      <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
        <section>
          <h2>{t('statement.title')}</h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              marginBottom: "2.5rem",
            }}
          >
            {t('statement.description')}
          </p>

          <div className="statement-item">
            <h3>{t('statement.item1.title')}</h3>
            <p>
              {t('statement.item1.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item2.title')}</h3>
            <p>
              {t('statement.item2.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item3.title')}</h3>
            <p>
              {t('statement.item3.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item4.title')}</h3>
            <p>
              {t('statement.item4.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item5.title')}</h3>
            <p>
              {t('statement.item5.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item6.title')}</h3>
            <p>
              {t('statement.item6.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item7.title')}</h3>
            <p>
              {t('statement.item7.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item8.title')}</h3>
            <p>
              {t('statement.item8.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item9.title')}</h3>
            <p>
              {t('statement.item9.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item10.title')}</h3>
            <p>
              {t('statement.item10.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item11.title')}</h3>
            <p>
              {t('statement.item11.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item12.title')}</h3>
            <p>
              {t('statement.item12.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item13.title')}</h3>
            <p>
              {t('statement.item13.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item14.title')}</h3>
            <p>
              {t('statement.item14.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item15.title')}</h3>
            <p>
              {t('statement.item15.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item16.title')}</h3>
            <p>
              {t('statement.item16.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item17.title')}</h3>
            <p>
              {t('statement.item17.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item18.title')}</h3>
            <p>
              {t('statement.item18.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item19.title')}</h3>
            <p>
              {t('statement.item19.content')}
            </p>
          </div>

          <div className="statement-item">
            <h3>{t('statement.item20.title')}</h3>
            <p>
              {t('statement.item20.content')}
            </p>
          </div>
        </section>
        <ReturnToHome />
      </main>
    </>
  );
}

export default withBanner(StatementOfFaithHebrew); 
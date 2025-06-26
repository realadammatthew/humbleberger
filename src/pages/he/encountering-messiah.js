import { useTranslation } from 'react-i18next';
import CallToActionButtons from '../../components/call-to-action-buttons';
import ReturnToHome from '../../components/return-to-home';
import { useLanguage } from '../../hooks/useLanguage';
import withBanner from '../../utils/with-banner';

const EncounteringMessiahHebrew = () => {
  const { isHebrew } = useLanguage();
  const { t } = useTranslation();

  return (
    <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <section>
        <header className='blog-post-header'>
          <h1 className='blog-post-title big-title'>
            {t('encountering.title')}
          </h1>
          <p className='blog-post-subtitle'>
            <strong>{t('encountering.subtitle')}</strong>
          </p>
        </header>

        <article className='blog-post-article'>
          <div className='encountering-messiah-content'>
            <div className='section'>
              <h2>{t('encountering.section1.title')}</h2>
              <p>
                <em>{t('encountering.section1.subtitle')}</em>
              </p>

              <ul>
                <li>
                  <a href={t('urls.encountering.whoIsYeshua')}>
                    {t('encountering.section1.whoIsYeshua')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.didYeshuaExist')}>
                    {t('encountering.section1.didYeshuaExist')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.wasYeshuaSinless')}>
                    {t('encountering.section1.wasYeshuaSinless')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.wasYeshuaBornVirgin')}>
                    {t('encountering.section1.wasYeshuaBornVirgin')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.didYeshuaDieCross')}>
                    {t('encountering.section1.didYeshuaDieCross')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.didYeshuaRise')}>
                    {t('encountering.section1.didYeshuaRise')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.didYeshuaAscend')}>
                    {t('encountering.section1.didYeshuaAscend')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.isYeshuaAlive')}>
                    {t('encountering.section1.isYeshuaAlive')}
                  </a>
                </li>
              </ul>
            </div>

            <hr />

            <div className='section'>
              <h2>{t('encountering.section2.title')}</h2>
              <p>
                <em>{t('encountering.section2.subtitle')}</em>
              </p>

              <ul>
                <li>
                  <a href={t('urls.encountering.couldYeshuaBeMessiah')}>
                    {t('encountering.section2.couldYeshuaBeMessiah')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.hasMessiahCome')}>
                    {t('encountering.section2.hasMessiahCome')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.whatWillMessiahDo')}>
                    {t('encountering.section2.whatWillMessiahDo')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.whatDoesTanakhSay')}>
                    {t('encountering.section2.whatDoesTanakhSay')}
                  </a>
                </li>
              </ul>
            </div>

            <hr />

            <div className='section'>
              <h2>{t('encountering.section3.title')}</h2>
              <p>
                <em>{t('encountering.section3.subtitle')}</em>
              </p>

              <ul>
                <li>
                  <a href={t('urls.encountering.daniel9')}>
                    {t('encountering.section3.daniel9')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.isaiah53')}>
                    {t('encountering.section3.isaiah53')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.jeremiah31')}>
                    {t('encountering.section3.jeremiah31')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.fulfillsNotReplaces')}>
                    {t('encountering.section3.fulfillsNotReplaces')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.redemption')}>
                    {t('encountering.section3.redemption')}
                  </a>
                </li>
              </ul>
            </div>

            <hr />

            <div className='section'>
              <h2>{t('encountering.section4.title')}</h2>
              <p>
                <em>{t('encountering.section4.subtitle')}</em>
              </p>

              <ul>
                <li>
                  <a href={t('urls.encountering.whatIsSin')}>
                    {t('encountering.section4.whatIsSin')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.whatIsRedemption')}>
                    {t('encountering.section4.sacrificeRole')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.atonementWithoutTemple')}>
                    {t('encountering.section4.atonementWithoutTemple')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.rightRelationshipWithGod')}>
                    {t('encountering.section4.rightRelationship')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.whatToDoSaved')}>
                    {t('encountering.section4.whatToDoSaved')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.howToBecomeJewishChristian')}>
                    {t('encountering.section4.becomeJewishChristian')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.howToGetToHeaven')}>
                    {t('encountering.section4.goToHeaven')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.doesHellExist')}>
                    {t('encountering.section4.hellExists')}
                  </a>
                </li>
              </ul>
            </div>

            <hr />

            <div className='section'>
              <h2>{t('encountering.section5.title')}</h2>
              <p>
                <em>{t('encountering.section5.subtitle')}</em>
              </p>

              <ul>
                <li>
                  <a href={t('urls.encountering.isItPossibleToBeJewishChristian')}>
                    {t('encountering.section5.jewishAndBelieve')}
                  </a>
                </li>
                <li>
                  <a href={t('urls.encountering.whySomeJewsBelieve')}>
                    {t('encountering.section5.whySomeBelieve')}
                  </a>
                </li>
                <li>
                  <em>{t('encountering.section5.whySomeReject')}</em>{' '}
                  <span className='coming-soon'>
                    {t('encountering.comingSoon')}
                  </span>
                </li>
              </ul>
            </div>

            <hr />

            <div className='section'>
              <h2>{t('encountering.section6.title')}</h2>
              <p>
                <em>{t('encountering.section6.subtitle')}</em>
              </p>

              <ul>
                <li>
                  <em>{t('encountering.section6.all613Mitzvot')}</em>{' '}
                  <span className='coming-soon'>
                    {t('encountering.comingSoon')}
                  </span>
                </li>
                <li>
                  <em>{t('encountering.section6.keepKosher')}</em>{' '}
                  <span className='coming-soon'>
                    {t('encountering.comingSoon')}
                  </span>
                </li>
                <li>
                  <em>{t('encountering.section6.keepShabbat')}</em>{' '}
                  <span className='coming-soon'>
                    {t('encountering.comingSoon')}
                  </span>
                </li>
              </ul>
            </div>

            <hr />

            <div className='section'>
              <h2>{t('encountering.section7.title')}</h2>
              <p>
                <em>{t('encountering.section7.subtitle')}</em>
              </p>

              <ul>
                <li>
                  <em>{t('encountering.section7.encounterYeshua')}</em>{' '}
                  <span className='coming-soon'>
                    {t('encountering.comingSoon')}
                  </span>
                </li>
                <li>
                  <em>{t('encountering.section7.personalRelationship')}</em>{' '}
                  <span className='coming-soon'>
                    {t('encountering.comingSoon')}
                  </span>
                </li>
                <li>
                  <em>{t('encountering.section7.recognizeVoice')}</em>{' '}
                  <span className='coming-soon'>
                    {t('encountering.comingSoon')}
                  </span>
                </li>
              </ul>
            </div>

            <CallToActionButtons />
          </div>
        </article>
      </section>
      <ReturnToHome />
    </main>
  );
};

export default withBanner(EncounteringMessiahHebrew);

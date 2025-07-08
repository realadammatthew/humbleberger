import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

// Define the encountering messiah articles in order (both languages use same slugs)
const encounteringMessiahArticles = [
  'who-is-yeshua',
  'did-yeshua-really-exist',
  'was-yeshua-really-sinless',
  'was-yeshua-really-born-of-a-virgin',
  'did-yeshua-really-die-on-a-cross',
  'did-yeshua-really-rise-from-the-dead',
  'did-yeshua-really-ascend-into-heaven',
  'is-yeshua-still-alive-today',
  'could-yeshua-be-the-messiah',
  'has-messiah-already-come',
  'what-will-the-messiah-do',
  'what-does-the-tanakh-say-about-messiah',
  'when-was-the-messiah-supposed-to-come',
  'who-is-the-suffering-servant',
  'the-new-covenant-that-was-promised',
  'the-fulfillment-of-the-hebrew-scriptures',
  'redemption-in-the-hebrew-scriptures',
  'what-is-sin',
  'the-heart-of-atonement',
  'atonement-without-the-temple',
  'right-relationship-with-god',
  'what-must-i-do-to-be-saved',
  'how-to-become-a-jewish-christian',
  'how-to-get-to-heaven',
  'does-hell-exist',
  'is-it-possible-to-be-a-jewish-christian',
  'why-some-jews-believe',
  'why-some-jews-reject',
  'what-about-the-613-mitzvot',
  'what-about-the-kosher-laws',
  'what-about-shabbat',
  'how-do-i-fellowship-with-the-spirit',
  'how-do-i-meet-messiah'
];

const SeriesNavigation = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();
  const router = useRouter();
  
  // Get current article slug from URL
  const currentSlug = router.query.id;
  
  // Find current article index in the series
  const currentIndex = encounteringMessiahArticles.indexOf(currentSlug);
  
  // If not in the series, don't show navigation
  if (currentIndex === -1) {
    return null;
  }
  
  // Get previous and next articles
  const prevSlug = currentIndex > 0 ? encounteringMessiahArticles[currentIndex - 1] : null;
  const nextSlug = currentIndex < encounteringMessiahArticles.length - 1 ? encounteringMessiahArticles[currentIndex + 1] : null;
  
  // Get the base URL (English or Hebrew)
  const baseUrl = isHebrew ? '/he/blog' : '/blog';
  
  // Get article titles from translation keys
  const getArticleTitle = (slug) => {
    const titleMap = {
      'who-is-yeshua': t('encountering.section1.whoIsYeshua'),
      'did-yeshua-really-exist': t('encountering.section1.didYeshuaExist'),
      'was-yeshua-really-sinless': t('encountering.section1.wasYeshuaSinless'),
      'was-yeshua-really-born-of-a-virgin': t('encountering.section1.wasYeshuaBornVirgin'),
      'did-yeshua-really-die-on-a-cross': t('encountering.section1.didYeshuaDieCross'),
      'did-yeshua-really-rise-from-the-dead': t('encountering.section1.didYeshuaRise'),
      'did-yeshua-really-ascend-into-heaven': t('encountering.section1.didYeshuaAscend'),
      'is-yeshua-still-alive-today': t('encountering.section1.isYeshuaAlive'),
      'could-yeshua-be-the-messiah': t('encountering.section2.couldYeshuaBeMessiah'),
      'has-messiah-already-come': t('encountering.section2.hasMessiahCome'),
      'what-will-the-messiah-do': t('encountering.section2.whatWillMessiahDo'),
      'what-does-the-tanakh-say-about-messiah': t('encountering.section2.whatDoesTanakhSay'),
      'when-was-the-messiah-supposed-to-come': t('encountering.section3.daniel9'),
      'who-is-the-suffering-servant': t('encountering.section3.isaiah53'),
      'the-new-covenant-that-was-promised': t('encountering.section3.jeremiah31'),
      'the-fulfillment-of-the-hebrew-scriptures': t('encountering.section3.fulfillsNotReplaces'),
      'redemption-in-the-hebrew-scriptures': t('encountering.section3.redemption'),
      'what-is-sin': t('encountering.section4.whatIsSin'),
      'the-heart-of-atonement': t('encountering.section4.sacrificeRole'),
      'atonement-without-the-temple': t('encountering.section4.atonementWithoutTemple'),
      'right-relationship-with-god': t('encountering.section4.rightRelationship'),
      'what-must-i-do-to-be-saved': t('encountering.section4.whatToDoSaved'),
      'how-to-become-a-jewish-christian': t('encountering.section4.becomeJewishChristian'),
      'how-to-get-to-heaven': t('encountering.section4.goToHeaven'),
      'does-hell-exist': t('encountering.section4.hellExists'),
      'is-it-possible-to-be-a-jewish-christian': t('encountering.section5.jewishAndBelieve'),
      'why-some-jews-believe': t('encountering.section5.whySomeBelieve'),
      'why-some-jews-reject': t('encountering.section5.whySomeReject'),
      'what-about-the-613-mitzvot': t('encountering.section6.all613Mitzvot'),
      'what-about-the-kosher-laws': t('encountering.section6.keepKosher'),
      'what-about-shabbat': t('encountering.section6.keepShabbat'),
      'how-do-i-fellowship-with-the-spirit': t('encountering.section7.personalRelationship'),
      'how-do-i-meet-messiah': t('encountering.section7.encounterYeshua')
    };
    // Debug output
    // eslint-disable-next-line no-console
    console.log('SeriesNavigation: slug', slug, 'title', titleMap[slug]);
    // Fallback to slug if translation is missing or same as key
    if (!titleMap[slug] || titleMap[slug] === `encountering.section1.${slug}` || titleMap[slug] === slug) {
      return slug.replace(/-/g, ' ');
    }
    return titleMap[slug];
  };
  
  return (
    <nav className="series-navigation" style={{
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: '#181c20', // dark background
      borderRadius: '8px',
      border: '1px solid #23272f',
      color: '#f1f1f1', // light text
      boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {prevSlug ? (
          <Link href={`${baseUrl}/${prevSlug}?from=encountering-messiah`} legacyBehavior>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                backgroundColor: '#232b36', // dark button
                color: '#f1f1f1',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'background-color 0.2s',
                maxWidth: '45%',
                flex: '1',
                border: '1px solid #2d3742',
                boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#364152')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#232b36')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>←</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{isHebrew ? 'הקודם' : 'Previous'}</div>
                  <div style={{ fontWeight: 'bold' }}>{getArticleTitle(prevSlug)}</div>
                </div>
              </div>
            </a>
          </Link>
        ) : (
          <div style={{ flex: '1' }}></div>
        )}
        
        {nextSlug ? (
          <Link href={`${baseUrl}/${nextSlug}?from=encountering-messiah`} legacyBehavior>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                backgroundColor: '#232b36', // dark button
                color: '#f1f1f1',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'background-color 0.2s',
                maxWidth: '45%',
                flex: '1',
                justifyContent: 'flex-end',
                border: '1px solid #2d3742',
                boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#364152')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#232b36')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{isHebrew ? 'הבא' : 'Next'}</div>
                  <div style={{ fontWeight: 'bold' }}>{getArticleTitle(nextSlug)}</div>
                </div>
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </div>
            </a>
          </Link>
        ) : (
          <div style={{ flex: '1' }}></div>
        )}
      </div>
      
      <div style={{
        textAlign: 'center',
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid #23272f',
        fontSize: '0.9rem',
        color: '#b0b6be'
      }}>
        {isHebrew ? 'חלק מסדרת "פגישה עם המשיח"' : 'Part of the "Encountering Messiah" series'}
      </div>
    </nav>
  );
};

export default SeriesNavigation; 
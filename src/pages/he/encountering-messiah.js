import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import withBanner from '../../utils/with-banner';
import CallToActionButtons from '../../components/call-to-action-buttons';
import ReturnToHome from '../../components/return-to-home';

const EncounteringMessiahHebrew = () => {
  const { isHebrew } = useLanguage();
  const { t } = useTranslation();

  return (
    <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <section>
        <header className="blog-post-header">
          <h1 className="blog-post-title big-title">{t('encountering.title')}</h1>
          <p className="blog-post-subtitle">
            <strong>{t('encountering.subtitle')}</strong>
          </p>
        </header>
        
        <article className="blog-post-article">
          <div className="encountering-messiah-content">
            
            <div className="section">
              <h2>{t('encountering.section1.title')}</h2>
              <p><em>{t('encountering.section1.subtitle')}</em></p>
              
              <ul>
                <li><a href="/he/blog/who-is-yeshua?from=encountering-messiah">מי הוא ישוע?</a></li>
                <li><a href="/he/blog/did-yeshua-really-exist?from=encountering-messiah">האם ישוע באמת היה קיים?</a></li>
                <li><a href="/he/blog/was-yeshua-really-sinless?from=encountering-messiah">האם ישוע היה באמת ללא חטא?</a></li>
                <li><a href="/he/blog/was-yeshua-really-born-of-a-virgin?from=encountering-messiah">האם ישוע נולד באמת מבתולה?</a></li>
                <li><a href="/he/blog/did-yeshua-really-die-on-a-cross?from=encountering-messiah">האם ישוע באמת מת על צלב?</a></li>
                <li><a href="/he/blog/did-yeshua-really-rise-from-the-dead?from=encountering-messiah">האם ישוע באמת קם מהמתים?</a></li>
                <li><a href="/he/blog/did-yeshua-really-ascend-into-heaven?from=encountering-messiah">האם ישוע באמת עלה לשמיים?</a></li>
                <li><a href="/he/blog/is-yeshua-still-alive-today?from=encountering-messiah">האם ישוע עדיין חי היום?</a></li>
              </ul>
            </div>

            <hr />

            <div className="section">
              <h2>{t('encountering.section2.title')}</h2>
              <p><em>{t('encountering.section2.subtitle')}</em></p>
              
              <ul>
                <li><a href="/he/blog/could-yeshua-be-the-messiah?from=encountering-messiah">האם ישוע יכול להיות המשיח שנחזה בתנ"ך?</a></li>
                <li><a href="/he/blog/has-messiah-already-come?from=encountering-messiah">האם ייתכן שהמשיח כבר בא?</a></li>
                <li><a href="/he/blog/what-will-the-messiah-do?from=encountering-messiah">מה אומרים כתבי הקודש העבריים שהמשיח יעשה?</a></li>
                <li><em>מה אומר התנ"ך על המשיח?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
              </ul>
            </div>

            <hr />

            <div className="section">
              <h2>{t('encountering.section3.title')}</h2>
              <p><em>{t('encountering.section3.subtitle')}</em></p>
              
              <ul>
                <li><em>מה אומר דניאל ט' על מועד בואו של המשיח?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>למי או למה מתייחס ישעיהו נ"ג בתנ"ך?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>מה אומר ירמיהו ל"א על 'הברית החדשה' בתנ"ך?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>האם יש דרכים שבהן ישוע מגשים, במקום להחליף, את כתבי הקודש העבריים?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>מה מלמד התנ"ך על גאולה?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
              </ul>
            </div>

            <hr />

            <div className="section">
              <h2>{t('encountering.section4.title')}</h2>
              <p><em>{t('encountering.section4.subtitle')}</em></p>
              
              <ul>
                <li><a href="/he/blog/what-is-sin?from=encountering-messiah">מהו חטא?</a></li>
                <li><em>איזה תפקיד מילא הקורבן בכפרה בתורה, וכיצד מטפלים בו כיום?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>איך מבינים כפרה היום ללא בית המקדש?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>מה זה אומר להיות ביחסים נכונים עם אלוהים?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>מה עליי לעשות כדי להיוושע?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>איך אני הופך להיות יהודי משיחי?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>מה זה אומר ללכת לגן עדן?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>האם הגיהנום קיים?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
              </ul>
            </div>

            <hr />

            <div className="section">
              <h2>{t('encountering.section5.title')}</h2>
              <p><em>{t('encountering.section5.subtitle')}</em></p>
              
              <ul>
                <li><em>האם אדם יכול להיות יהודי ולהאמין בישוע?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>מדוע חלק מהיהודים מאמינים בישוע כיום?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>מדוע חלק מהיהודים דוחים את הרעיון של ישוע כמשיח?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
              </ul>
            </div>

            <hr />

            <div className="section">
              <h2>{t('encountering.section6.title')}</h2>
              <p><em>{t('encountering.section6.subtitle')}</em></p>
              
              <ul>
                <li><em>האם עליי לשמור את כל תרי"ג המצוות?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>האם יהודים משיחיים שומרים כשרות?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>האם יהודים משיחיים שומרים שבת?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
              </ul>
            </div>

            <hr />

            <div className="section">
              <h2>{t('encountering.section7.title')}</h2>
              <p><em>{t('encountering.section7.subtitle')}</em></p>
              
              <ul>
                <li><em>איך אני יכול לפגוש באופן אישי את ישוע היום?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>מה זה אומר לקיים יחסים אישיים עם המשיח?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
                <li><em>איך אני יכול לזהות את קולו של המשיח בחיי?</em> <span className="coming-soon">{t('encountering.comingSoon')}</span></li>
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
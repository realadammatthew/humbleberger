import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      'header.title': 'Humbleberger Ministries - Proclaiming the Gospel of Yeshua',
      'header.description': 'Proclaiming the gospel of Yeshua (Jesus) with a special heart for the Jewish people. Find answers about Yeshua, the Bible, and our mission.',
      'header.keywords': 'Yeshua, Jesus, Messiah, Jewish, gospel, ministry, Bible, evangelism',
      'header.ogTitle': 'Humbleberger Ministries - Proclaiming the Gospel of Yeshua',
      'header.ogDescription': 'Proclaiming the gospel of Yeshua (Jesus) with a special heart for the Jewish people.',
      'header.twitterTitle': 'Humbleberger Ministries - Proclaiming the Gospel of Yeshua',
      'header.twitterDescription': 'Proclaiming the gospel of Yeshua (Jesus) with a special heart for the Jewish people.',
      'header.structuredDataDescription': 'Proclaiming the gospel of Yeshua (Jesus) with a special heart for the Jewish people.',
      'header.statementOfFaith': 'Statement of Faith',
      'header.statementOnAntisemitism': 'Statement on Anti-Semitism',
      'header.countingTheCost': 'Counting the Cost',
      'header.donate': 'Donate',
      'header.copyright': '© 2025 Humbleberger Ministries. All rights reserved.',
      'header.mission': 'Mission',
      'header.blog': 'Blog',
      'header.contact': 'Contact',
      'header.home': 'Home',
      
      // Language Switcher
      'language.switch': 'Switch Language',
      'language.english': 'English',
      'language.hebrew': 'עברית',
      
      // Home Page
      'home.about.title': 'About the Mission',
      'home.about.welcome': 'Welcome to Humbleberger Ministries – where we proclaim the gospel of Yeshua (Jesus) with a special heart for the Jewish people. Our mission is rooted in Romans 1:16: "For I am not ashamed of the gospel, because it is the power of God for salvation to everyone who believes, first to the Jew, and also to the Greek."',
      'home.about.description': 'Through discipleship, street outreach, and digital tools, we\'re equipping believers to reach those searching for truth with love and truth. Got questions? You can chat with us or find a Bible-believing church near you.',
      'home.cta.whoIsYeshua': 'Who is Yeshua?',
      'home.cta.encounteringMessiah': 'Encountering Messiah',
      'home.connect.title': 'Connect With Us',
      'home.connect.subtitle': '🤔 Curious about Yeshua or the Bible? We\'d love to chat with you!',
      'home.connect.chat': '💬 Chat with Us',
      'home.connect.blog': '🌐 Read Our Blog',
      'home.connect.bible': '📖 Read the Bible',
      'home.connect.synagogue': '📍 Find a Local Synagogue',
      'home.connect.newsletter': '📰 Get Our Newsletter',
      'home.connect.contact': '📬 Contact Us',
      'home.connect.follow': '𝕏 Follow Us on X',
      'home.connect.donate': '❤️ Donate',
      
      // Blog
      'blog.title': 'Blog Posts',
      'blog.readMore': 'Read More',
      'blog.backToBlog': '← Back to Blog',
      'blog.backToHome': '← Back to Home',
      'blog.page': 'Page',
      'blog.of': 'of',
      'blog.previous': 'Previous',
      'blog.next': 'Next',
      'blog.noPosts': 'No blog posts found.',
      
      // Contact
      'contact.title': 'Contact Us',
      'contact.description': 'Have questions about Yeshua, the Bible, or our ministry? We\'d love to hear from you!',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send Message',
      'contact.success.title': 'Message Sent!',
      'contact.success.message': 'Thank you for your message! We\'ll get back to you soon.',
      'contact.success.back': '← Back to Home',
      
      // Mission
      'mission.title': 'Our Mission',
      'mission.description': 'At Humbleberger Ministries, we are passionate about sharing the gospel of Yeshua (Jesus) with everyone, with a special heart for the Jewish people.',
      
      // Footer/Copyright
      'copyright.text': '© 2025 Humbleberger Ministries. All rights reserved.',
      'copyright.privacy': 'Privacy Policy',
      'copyright.terms': 'Terms of Use',
      'copyright.statement': 'Statement of Faith',
      
      // Cookie Banner
      'cookies.message': 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
      'cookies.accept': 'Accept',
      'cookies.learnMore': 'Learn More',
      
      // Site Banner
      'banner.message': '🎉 New: Hebrew version of our site is now available!',
      'banner.link': 'View Hebrew Site',
      
      // Search
      'search.placeholder': 'Search blog posts...',
      'search.noResults': 'No results found.',
      
      // Pagination
      'pagination.previous': 'Previous',
      'pagination.next': 'Next',
      'pagination.page': 'Page',
      'pagination.of': 'of',
      
      // Legal Pages
      'legal.privacy.title': 'Privacy Policy',
      'legal.terms.title': 'Terms of Use',
      'legal.statement.title': 'Statement of Faith',
      'legal.antiSemitism.title': 'Anti-Semitism Statement',
      
      // Common
      'common.loading': 'Loading...',
      'common.error': 'An error occurred.',
      'common.back': 'Back',
      'common.home': 'Home',
      'common.contact': 'Contact',
      'common.blog': 'Blog',
      'common.mission': 'Mission',
    }
  },
  he: {
    translation: {
      // Header
      'header.title': 'משרדים של האמבלברגר - מכריזים את הבשורה של ישוע',
      'header.description': 'מכריזים את הבשורה של ישוע (ישו) עם לב מיוחד לעם היהודי. מצאו תשובות לגבי ישוע, התנ"ך והמשימה שלנו.',
      'header.keywords': 'ישוע, ישו, משיח, יהודי, בשורה, משרד, תנ"ך, אוונגליזם',
      'header.ogTitle': 'משרדים של האמבלברגר - מכריזים את הבשורה של ישוע',
      'header.ogDescription': 'מכריזים את הבשורה של ישוע (ישו) עם לב מיוחד לעם היהודי.',
      'header.twitterTitle': 'משרדים של האמבלברגר - מכריזים את הבשורה של ישוע',
      'header.twitterDescription': 'מכריזים את הבשורה של ישוע (ישו) עם לב מיוחד לעם היהודי.',
      'header.structuredDataDescription': 'מכריזים את הבשורה של ישוע (ישו) עם לב מיוחד לעם היהודי.',
      'header.statementOfFaith': 'הצהרת אמונה',
      'header.statementOnAntisemitism': 'הצהרה נגד אנטישמיות',
      'header.countingTheCost': 'ספירת העלות',
      'header.donate': 'תרמו',
      'header.copyright': '© 2025 משרדים של האמבלברגר. כל הזכויות שמורות.',
      'header.mission': 'המשימה',
      'header.blog': 'בלוג',
      'header.contact': 'צור קשר',
      'header.home': 'בית',
      
      // Language Switcher
      'language.switch': 'החלף שפה',
      'language.english': 'English',
      'language.hebrew': 'עברית',
      
      // Home Page
      'home.about.title': 'אודות המשימה',
      'home.about.welcome': 'ברוכים הבאים למשרדים של האמבלברגר – שם אנו מכריזים את הבשורה של ישוע (ישו) עם לב מיוחד לעם היהודי. המשימה שלנו מושרשת ברומים א:טז: "כי אינני בוש בבשורה, כי היא כוח אלוהים לישועה לכל המאמין, ליהודי בראשונה וגם ליווני."',
      'home.about.description': 'דרך תלמידות, פעילות רחוב וכלים דיגיטליים, אנו מכשירים מאמינים להגיע לאלה המחפשים אמת באהבה ובאמת. יש לכם שאלות? אתם יכולים לצ\'וטט איתנו או למצוא כנסייה מאמינה בקרבת מקום.',
      'home.cta.whoIsYeshua': 'מי הוא ישוע?',
      'home.cta.encounteringMessiah': 'פגישה עם המשיח',
      'home.connect.title': 'התחברו אלינו',
      'home.connect.subtitle': '🤔 סקרנים לגבי ישוע או התנ"ך? נשמח לצ\'וטט איתכם!',
      'home.connect.chat': '💬 צ\'וטטו איתנו',
      'home.connect.blog': '🌐 קראו את הבלוג שלנו',
      'home.connect.bible': '📖 קראו את התנ"ך',
      'home.connect.synagogue': '📍 מצאו בית כנסת מקומי',
      'home.connect.newsletter': '📰 קבלו את הניוזלטר שלנו',
      'home.connect.contact': '📬 צרו קשר',
      'home.connect.follow': '𝕏 עקבו אחרינו ב-X',
      'home.connect.donate': '❤️ תרמו',
      
      // Blog
      'blog.title': 'פוסטים בבלוג',
      'blog.readMore': 'קרא עוד',
      'blog.backToBlog': '← חזרה לבלוג',
      'blog.backToHome': '← חזרה לבית',
      'blog.page': 'עמוד',
      'blog.of': 'מתוך',
      'blog.previous': 'הקודם',
      'blog.next': 'הבא',
      'blog.noPosts': 'לא נמצאו פוסטים בבלוג.',
      
      // Contact
      'contact.title': 'צרו קשר',
      'contact.description': 'יש לכם שאלות לגבי ישוע, התנ"ך או המשרד שלנו? נשמח לשמוע מכם!',
      'contact.name': 'שם',
      'contact.email': 'אימייל',
      'contact.message': 'הודעה',
      'contact.send': 'שלח הודעה',
      'contact.success.title': 'ההודעה נשלחה!',
      'contact.success.message': 'תודה על ההודעה שלכם! נחזור אליכם בקרוב.',
      'contact.success.back': '← חזרה לבית',
      
      // Mission
      'mission.title': 'המשימה שלנו',
      'mission.description': 'במשרדים של האמבלברגר, אנו נלהבים לחלוק את הבשורה של ישוע (ישו) עם כולם, עם לב מיוחד לעם היהודי.',
      
      // Footer/Copyright
      'copyright.text': '© 2025 משרדים של האמבלברגר. כל הזכויות שמורות.',
      'copyright.privacy': 'מדיניות פרטיות',
      'copyright.terms': 'תנאי שימוש',
      'copyright.statement': 'הצהרת אמונה',
      
      // Cookie Banner
      'cookies.message': 'אנו משתמשים בעוגיות כדי לשפר את החוויה שלכם. בהמשך הביקור באתר זה אתם מסכימים לשימוש שלנו בעוגיות.',
      'cookies.accept': 'קבל',
      'cookies.learnMore': 'למידע נוסף',
      
      // Site Banner
      'banner.message': '🎉 חדש: הגרסה העברית של האתר שלנו זמינה כעת!',
      'banner.link': 'צפה באתר העברי',
      
      // Search
      'search.placeholder': 'חפש פוסטים בבלוג...',
      'search.noResults': 'לא נמצאו תוצאות.',
      
      // Pagination
      'pagination.previous': 'הקודם',
      'pagination.next': 'הבא',
      'pagination.page': 'עמוד',
      'pagination.of': 'מתוך',
      
      // Legal Pages
      'legal.privacy.title': 'מדיניות פרטיות',
      'legal.terms.title': 'תנאי שימוש',
      'legal.statement.title': 'הצהרת אמונה',
      'legal.antiSemitism.title': 'הצהרה נגד אנטישמיות',
      
      // Common
      'common.loading': 'טוען...',
      'common.error': 'אירעה שגיאה.',
      'common.back': 'חזור',
      'common.home': 'בית',
      'common.contact': 'צור קשר',
      'common.blog': 'בלוג',
      'common.mission': 'משימה',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n; 
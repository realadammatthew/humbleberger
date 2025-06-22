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
      'blog.rssTitle': 'Subscribe to RSS Feed',
      
      // Contact
      'contact.title': 'Contact Us',
      'contact.description': 'Have questions about Yeshua, the Bible, or our ministry? We\'d love to hear from you!',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send Message',
      'contact.sending': 'Sending...',
      'contact.success.title': 'Message Sent!',
      'contact.success.message': 'Thank you for your message! We\'ll get back to you soon.',
      'contact.success.back': '← Back to Home',
      'contact.error.submit': 'There was an error submitting the form. Please try again.',
      'contact.error.unexpected': 'An unexpected error occurred. Please try again later.',
      
      // Mission
      'mission.title': 'Our Mission',
      'mission.description': 'At Humbleberger Ministries, we are passionate about sharing the gospel of Yeshua (Jesus) with everyone, with a special heart for the Jewish people.',
      
      // Footer/Copyright
      'copyright.text': '© 2025 Humbleberger Ministries. All rights reserved.',
      'copyright.privacy': 'Privacy Policy',
      'copyright.terms': 'Terms of Use',
      'copyright.statement': 'Statement of Faith',
      'copyright.legal': 'Humbleberger Ministries is officially registered with the state of North Carolina and the Internal Revenue Service as a 501(c)(3) non-profit organization. All donations are tax-deductible.',
      
      // Cookie Banner
      'cookies.message': 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
      'cookies.accept': 'Accept',
      'cookies.learnMore': 'Learn More',
      
      // Site Banner
      'banner.message': '🎉 New: Hebrew version of our site is now available!',
      'banner.link': 'View Hebrew Site',
      'banner.logoAlt': 'Humbleberger Ministries Logo',
      'banner.jewishEvangelism': 'Jewish Evangelism.',
      'banner.gospelProclamation': 'Gospel Proclamation.',
      'banner.messiahCentered': 'Messiah-Centered Mission.',
      'banner.ministryReference': '– A Jeremiah 20:9 Ministry –',
      
      // Search
      'search.placeholder': 'Search blog posts...',
      'search.noResults': 'No results found.',
      'search.clear': 'Clear search',
      'search.loading': 'Loading...',
      
      // Pagination
      'pagination.previous': 'Previous',
      'pagination.next': 'Next',
      'pagination.page': 'Page',
      'pagination.of': 'of',
      'pagination.ariaLabel': 'Blog posts pagination',
      'pagination.prevAria': 'Previous page',
      'pagination.nextAria': 'Next page',
      
      // Legal Pages
      'legal.privacy.title': 'Privacy Policy',
      'legal.terms.title': 'Terms of Use',
      'legal.statement.title': 'Statement of Faith',
      'legal.antiSemitism.title': 'Anti-Semitism Statement',
      'legal.privacy.description': 'Privacy Policy for Humbleberger Ministries website.',
      'legal.terms.description': 'Terms of Use for Humbleberger Ministries website.',
      'legal.statement.description': 'Statement of Faith and core beliefs of Humbleberger Ministries.',
      'legal.antiSemitism.description': 'Humbleberger Ministries statement on anti-Semitism and our commitment to biblical truth and love for the Jewish people.',
      'legal.copyright.description': 'Copyright information for Humbleberger Ministries.',
      
      // Encountering Messiah Page
      'encountering.title': 'Encountering Messiah: A Journey to Jewish Hearts',
      'encountering.subtitle': 'Ancient questions. Modern seekers. One promised hope.',
      'encountering.section1.title': '1. Basic Questions About Yeshua',
      'encountering.section1.subtitle': 'Basic facts about his life, death, resurrection, and identity',
      'encountering.section2.title': '2. Messiah in the Bible',
      'encountering.section2.subtitle': 'Questions of identity and messianic expectation',
      'encountering.section3.title': '3. Messianic Prophecy and Fulfillment',
      'encountering.section3.subtitle': 'Specific prophecies and their fulfillment in Yeshua',
      'encountering.section4.title': '4. Atonement, Sin, and Salvation',
      'encountering.section4.subtitle': 'How salvation works; sin, atonement, and the afterlife',
      'encountering.section5.title': '5. Jewish Identity and Messianic Faith',
      'encountering.section5.subtitle': 'Jewish believers in Yeshua and Jewish-Christian questions',
      'encountering.section6.title': '6. Torah Observance and Christian Practice',
      'encountering.section6.subtitle': 'Halacha, commandments, and how Messianic Jews live',
      'encountering.section7.title': '7. Personal Encounter with Messiah',
      'encountering.section7.subtitle': 'Personal relationships and spiritual encounter',
      'encountering.comingSoon': '(Coming Soon)',
      
      // Common
      'common.loading': 'Loading...',
      'common.error': 'An error occurred.',
      'common.back': 'Back',
      'common.home': 'Home',
      'common.contact': 'Contact',
      'common.blog': 'Blog',
      'common.mission': 'Mission',
      'common.donate': 'Donate',
      'common.copyright': 'Copyright',
      'common.subscribe': 'Subscribe',
      'common.chat': 'Chat',
      'common.returnTo': '← Return to',
      'common.returnToHome': '← Return to Home',
      
      // Navigation
      'nav.antisemitism': 'Statement on Antisemitism',
      'nav.encounteringMessiah': 'Encountering Messiah',
      'nav.shema': 'The Shema',
      'nav.fromTrenches': 'From the Trenches',
      'nav.whoIsYeshua': 'Who is Yeshua?',
      'nav.countingCost': 'Counting the Cost',
      
      // Buttons
      'button.donate': '❤️ Donate',
      'button.subscribe': '📰 Subscribe',
      'button.chat': '💬 Chat',
      'button.clearSearch': 'Clear search',
      
      // Search
      'search.noResultsFor': 'No posts found for "{{searchTerm}}"',
      'search.resultsFound': 'Found {{count}} post{{plural}} for "{{searchTerm}}"',
      
      // RSS
      'rss.subscribe': 'Subscribe to RSS Feed',
      
      // Page Titles
      'pageTitle.contact': 'Contact Us - Humbleberger Ministries',
      'pageTitle.contactSuccess': 'Message Sent! - Humbleberger Ministries',
      'pageTitle.contactHebrew': 'Contact Us - שירותי האמבלברגר',
      'pageTitle.contactSuccessHebrew': 'ההודעה נשלחה! - שירותי האמבלברגר',
      
      // Meta Descriptions
      'meta.contact': 'Get in touch with Humbleberger Ministries. Send us a message through our contact form.',
      'meta.contactHebrew': 'צרו קשר עם שירותי האמבלברגר. שלחו לנו הודעה דרך טופס יצירת הקשר שלנו.',
    }
  },
  he: {
    translation: {
      // Header
      'header.title': 'שירותי האמבלברגר - מכריזים את הבשורה של ישוע',
      'header.description': 'מכריזים את הבשורה של ישוע (ישו) עם לב מיוחד לעם היהודי. מצאו תשובות לגבי ישוע, התנ"ך והמשימה שלנו.',
      'header.keywords': 'ישוע, ישו, משיח, יהודי, בשורה, משרד, תנ"ך, אוונגליזם',
      'header.ogTitle': 'שירותי האמבלברגר - מכריזים את הבשורה של ישוע',
      'header.ogDescription': 'מכריזים את הבשורה של ישוע (ישו) עם לב מיוחד לעם היהודי.',
      'header.twitterTitle': 'שירותי האמבלברגר - מכריזים את הבשורה של ישוע',
      'header.twitterDescription': 'מכריזים את הבשורה של ישוע (ישו) עם לב מיוחד לעם היהודי.',
      'header.structuredDataDescription': 'מכריזים את הבשורה של ישוע (ישו) עם לב מיוחד לעם היהודי.',
      'header.statementOfFaith': 'הצהרת אמונה',
      'header.statementOnAntisemitism': 'הצהרה נגד אנטישמיות',
      'header.countingTheCost': 'ספירת העלות',
      'header.donate': 'תרמו',
      'header.copyright': '© 2025 שירותי האמבלברגר. כל הזכויות שמורות.',
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
      'home.about.welcome': 'ברוכים הבאים לשירותי האמבלברגר – שם אנו מכריזים את הבשורה של ישוע עם לב מיוחד לעם היהודי. המשימה שלנו מושרשת ברומים א:טז: "כי אינני בוש בבשורה, כי היא כוח אלוהים לישועה לכל המאמין, ליהודי בראשונה וגם ליווני."',
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
      'blog.rssTitle': 'הירשמו ל-RSS Feed',
      
      // Contact
      'contact.title': 'צרו קשר',
      'contact.description': 'יש לכם שאלות לגבי ישוע, התנ"ך או המשרד שלנו? נשמח לשמוע מכם!',
      'contact.name': 'שם',
      'contact.email': 'אימייל',
      'contact.message': 'הודעה',
      'contact.send': 'שלח הודעה',
      'contact.sending': 'שולח...',
      'contact.success.title': 'ההודעה נשלחה!',
      'contact.success.message': 'תודה על ההודעה שלכם! נחזור אליכם בקרוב.',
      'contact.success.back': '← חזרה לבית',
      'contact.error.submit': 'אירעה שגיאה בשליחת הטופס. אנא נסו שוב.',
      'contact.error.unexpected': 'אירעה שגיאה בלתי צפויה. אנא נסו שוב מאוחר יותר.',
      
      // Mission
      'mission.title': 'המשימה שלנו',
      'mission.description': 'בשירותי האמבלברגר, אנו נלהבים לחלוק את הבשורה של ישוע עם כולם, עם לב מיוחד לעם היהודי.',
      
      // Footer/Copyright
      'copyright.text': '© 2025 שירותי האמבלברגר. כל הזכויות שמורות.',
      'copyright.privacy': 'מדיניות פרטיות',
      'copyright.terms': 'תנאי שימוש',
      'copyright.statement': 'הצהרת אמונה',
      'copyright.legal': 'שירותי האמבלברגר רשומים כחוק במדינת צפון קרוליינה וברשות המיסים של ארצות הברית כארגון ללא מטרות רווח. כל התרומות מוכרות לצורכי מס.',
      
      // Cookie Banner
      'cookies.message': 'אנו משתמשים בעוגיות כדי לשפר את החוויה שלכם. בהמשך הביקור באתר זה אתם מסכימים לשימוש שלנו בעוגיות.',
      'cookies.accept': 'קבל',
      'cookies.learnMore': 'למידע נוסף',
      
      // Site Banner
      'banner.message': '🎉 חדש: הגרסה העברית של האתר שלנו זמינה כעת!',
      'banner.link': 'צפה באתר העברי',
      'banner.logoAlt': 'לוגו שירותי האמבלברגר',
      'banner.jewishEvangelism': 'אוונגליזם יהודי.',
      'banner.gospelProclamation': 'הכרזת הבשורה.',
      'banner.messiahCentered': 'משימה ממוקדת משיח.',
      'banner.ministryReference': '– משרד ירמיהו כ:ט –',
      
      // Search
      'search.placeholder': 'חפש פוסטים בבלוג...',
      'search.noResults': 'לא נמצאו תוצאות.',
      'search.clear': 'נקה חיפוש',
      'search.loading': 'טוען...',
      
      // Pagination
      'pagination.previous': 'הקודם',
      'pagination.next': 'הבא',
      'pagination.page': 'עמוד',
      'pagination.of': 'מתוך',
      'pagination.ariaLabel': 'ניווט פוסטים בבלוג',
      'pagination.prevAria': 'עמוד קודם',
      'pagination.nextAria': 'עמוד הבא',
      
      // Legal Pages
      'legal.privacy.title': 'מדיניות פרטיות',
      'legal.terms.title': 'תנאי שימוש',
      'legal.statement.title': 'הצהרת אמונה',
      'legal.antiSemitism.title': 'הצהרה נגד אנטישמיות',
      'legal.privacy.description': 'מדיניות הפרטיות של אתר שירותי האמבלברגר.',
      'legal.terms.description': 'תנאי השימוש של אתר שירותי האמבלברגר.',
      'legal.statement.description': 'הצהרת האמונה והאמונות הליבה של שירותי האמבלברגר.',
      'legal.antiSemitism.description': 'הצהרת שירותי האמבלברגר על אנטישמיות ומחויבותנו לאמת המקראית ולאהבת העם היהודי.',
      'legal.copyright.description': 'מידע על זכויות יוצרים עבור שירותי האמבלברגר.',
      
      // Encountering Messiah Page
      'encountering.title': 'פגישה עם המשיח: מסע ללבבות יהודיים',
      'encountering.subtitle': 'שאלות עתיקות. מחפשים מודרניים. תקווה אחת מובטחת.',
      'encountering.section1.title': '1. שאלות יסוד על ישוע',
      'encountering.section1.subtitle': 'עובדות בסיסיות על חייו, מותו, תחייתו וזהותו',
      'encountering.section2.title': '2. המשיחיות בתנ"ך',
      'encountering.section2.subtitle': 'שאלות של זהות וציפייה משיחית',
      'encountering.section3.title': '3. נבואה משיחית והגשמתה',
      'encountering.section3.subtitle': 'נבואות ספציפיות והגשמתן בישוע',
      'encountering.section4.title': '4. כפרה, חטא וישועה',
      'encountering.section4.subtitle': 'איך עובדת הישועה; חטא, כפרה, והעולם הבא',
      'encountering.section5.title': '5. זהות יהודית ואמונה משיחית',
      'encountering.section5.subtitle': 'מאמינים יהודים בישוע ושאלות יהודיות-נוצריות',
      'encountering.section6.title': '6. שמירת תורה ופרקטיקה נוצרית',
      'encountering.section6.subtitle': 'הלכה, מצוות, וכיצד חיים יהודים משיחיים',
      'encountering.section7.title': '7. פגישה אישית עם המשיח',
      'encountering.section7.subtitle': 'יחסים אישיים ומפגש רוחני',
      'encountering.comingSoon': '(בקרוב)',
      
      // Common
      'common.loading': 'טוען...',
      'common.error': 'אירעה שגיאה.',
      'common.back': 'חזור',
      'common.home': 'בית',
      'common.contact': 'צור קשר',
      'common.blog': 'בלוג',
      'common.mission': 'משימה',
      'common.donate': 'תרמו',
      'common.copyright': 'זכויות יוצרים',
      'common.subscribe': 'הרשמה',
      'common.chat': 'צ\'אט',
      'common.returnTo': '← חזרה ל',
      'common.returnToHome': '← חזרה לבית',
      
      // Navigation
      'nav.antisemitism': 'הצהרה נגד אנטישמיות',
      'nav.encounteringMessiah': 'פגישה עם המשיח',
      'nav.shema': 'השמע',
      'nav.fromTrenches': 'מהשוחות',
      'nav.whoIsYeshua': 'מי הוא ישוע?',
      'nav.countingCost': 'ספירת העלות',
      
      // Buttons
      'button.donate': '❤️ תרמו',
      'button.subscribe': '📰 הרשמה',
      'button.chat': '💬 צ\'אט',
      'button.clearSearch': 'נקה חיפוש',
      
      // Search
      'search.noResultsFor': 'לא נמצאו פוסטים עבור "{{searchTerm}}"',
      'search.resultsFound': 'נמצאו {{count}} פוסט{{plural}} עבור "{{searchTerm}}"',
      
      // RSS
      'rss.subscribe': 'הרשמה ל-RSS',
      
      // Page Titles
      'pageTitle.contact': 'Contact Us - Humbleberger Ministries',
      'pageTitle.contactSuccess': 'Message Sent! - Humbleberger Ministries',
      'pageTitle.contactHebrew': 'צרו קשר - שירותי האמבלברגר',
      'pageTitle.contactSuccessHebrew': 'ההודעה נשלחה! - שירותי האמבלברגר',
      
      // Meta Descriptions
      'meta.contact': 'Get in touch with Humbleberger Ministries. Send us a message through our contact form.',
      'meta.contactHebrew': 'צרו קשר עם שירותי האמבלברגר. שלחו לנו הודעה דרך טופס יצירת הקשר שלנו.',
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
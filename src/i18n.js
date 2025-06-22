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
      
      // Meta Descriptions
      'meta.contact': 'Get in touch with Humbleberger Ministries. Send us a message through our contact form.',
      
      // Organization Name
      'org.name': 'Humbleberger\nMinistries',
      
      // URLs
      'urls.chat': 'https://chat.humbleberger.org/en?translation=csb',
      'urls.newsletter': 'https://eepurl.com/ja6zNY',
      'urls.donate': 'https://donorbox.org/humbleberger-ministries',
      'urls.synagogue': 'https://www.9marks.org/church-search/',
      'urls.twitter': 'https://x.com/humbleberger',
      'urls.bible': 'https://app.logos.com/books/LLS%3ACSB/references/bible%2Bcsb2.64.1.1?layout=reading&rightSidebar=closed',
      'urls.contactForm': 'https://formspree.io/f/xnnvbwvz',
      
      // Internal URLs
      'urls.internal.blog': '/blog',
      'urls.internal.home': '/',
      'urls.internal.contact': '/contact',
      'urls.internal.mission': '/mission',
      'urls.internal.encounteringMessiah': '/encountering-messiah',
      'urls.internal.countingCost': '/blog/counting-the-cost',
      'urls.internal.whoIsYeshua': '/blog/who-is-yeshua',
      'urls.internal.fromTrenches': '/blog/from-the-trenches-an-evangelism-guide',
      'urls.internal.shema': '/blog/yeshua-and-the-shema',
      'urls.internal.antisemitism': '/anti-semitism',
      'urls.internal.statementOfFaith': '/statement-of-faith',
      'urls.internal.privacyPolicy': '/privacy-policy',
      'urls.internal.termsOfUse': '/terms-of-use',
      'urls.internal.copyright': '/copyright',
      'urls.internal.rss': '/rss.xml',
      'urls.internal.contactSuccess': '/contact-success',
      
      // Internal URLs with parameters
      'urls.internal.countingCostFromHome': '/blog/counting-the-cost?from=home',
      'urls.internal.whoIsYeshuaFromHome': '/blog/who-is-yeshua?from=home',
      'urls.internal.fromTrenchesFromHome': '/blog/from-the-trenches-an-evangelism-guide?from=home',
      'urls.internal.shemaFromHome': '/blog/yeshua-and-the-shema?from=home',
      
      // Header URLs
      'urls.site': 'https://humbleberger.org',
      'urls.logo': 'https://humbleberger.org/logo.png',
      'urls.socialPreview': 'https://humbleberger.org/social-preview.png',
      
      // Person names
      'person.founder.name': 'Daniel J. Cross',
      'person.founder.email': 'shalom@humbleberger.org',
      
      // Common terms
      'common.rss': 'RSS',
      'common.fein.title': 'FEIN',
      'common.fein.number': '33-4533201',
      
      // Anti-Semitism Page
      'antiSemitism.title': 'Statement on Antisemitism - Humbleberger Ministries',
      'antiSemitism.description': 'Humbleberger Ministries\' statement on antisemitism and our commitment to biblical truth and love for the Jewish people.',
      'antiSemitism.heading': 'Statement on Antisemitism, Jewish Identity, and Gospel Love',
      'antiSemitism.intro': 'As a ministry founded upon the gospel of Jesus Christ and committed to the salvation of the Jewish people and the nations, Humbleberger Ministries stands firmly and unequivocally against all forms of antisemitism, both past and present, whether political, cultural, social, or theological.',
      
      'antiSemitism.section1.title': 'I. A Posture of Love and Respect',
      'antiSemitism.section1.content': 'Humbleberger Ministries is deeply committed to honoring the Jewish people as beloved in God\'s redemptive history and heritage. We grieve the ways Jewish communities have suffered throughout history, including injustices carried out in the name of Christianity. As followers of Jesus, we are called to walk in humility and love — not only in doctrine, but in how we carry and communicate the gospel.',
      
      'antiSemitism.section2.title': 'II. Honoring the Jewish People and Their Calling',
      'antiSemitism.section2.content': 'We recognize and rejoice in the unique role of the Jewish people in God\'s redemptive plan. The covenants, the promises, the patriarchs, the prophets, and ultimately the Messiah have come through them (Romans 9:4–5). We do not seek to erase Jewish identity or heritage, but to affirm its deep significance — believing that its fullest expression is found in Yeshua, the Messiah promised in the Hebrew Scriptures.',
      
      'antiSemitism.section3.title': 'III. A Ministry of Invitation, Not Coercion',
      'antiSemitism.section3.content': 'We believe that Jesus is the Messiah of Israel and Savior of the world. With deep respect, we seek to share this good news with Jewish people not through pressure or argument, but through Scripture, prayer, relationship, and testimony — always grounded in love and reverence.',
      
      'antiSemitism.section4.title': 'IV. A Commitment to Reconciliation and Integrity',
      'antiSemitism.section4.content': 'We acknowledge the Church\'s need to walk humbly before the Jewish people, recognizing past failures and seeking to be a bridge, not a barrier. We stand against every form of antisemitism — not simply as a historical evil, but as something contrary to the heart of God.',
      
      'antiSemitism.section5.title': 'V. Our Heart for the Jewish People',
      'antiSemitism.section5.content': 'Our desire is not to win arguments but to share hope. We long for Jewish people everywhere to encounter the Messiah foretold in their own Scriptures — the One who fulfills the law and the prophets, brings peace with God, and invites all people, Jew and Gentile, into one redeemed family in Christ.',
      
      // Copyright Page
      'copyright.page.title': 'Copyright - Humbleberger Ministries',
      'copyright.page.description': 'Copyright information for Humbleberger Ministries.',
      'copyright.page.heading': 'Copyright Notice',
      'copyright.page.lastUpdated': 'Last Updated: April 18, 2025',
      
      'copyright.page.websiteContent.title': 'Website Content',
      'copyright.page.websiteContent.text': '© {{year}} Humbleberger Ministries. All rights reserved. The content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Humbleberger Ministries and is protected by United States and international copyright laws.',
      
      'copyright.page.trademarks.title': 'Trademarks',
      'copyright.page.trademarks.text': 'The Humbleberger Ministries name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Humbleberger Ministries or its affiliates. You may not use such marks without the prior written permission of Humbleberger Ministries.',
      
      'copyright.page.biblicalContent.title': 'Biblical Content',
      'copyright.page.biblicalContent.csb': 'Scripture quotations marked CSB® are taken from the Christian Standard Bible®, Copyright © 2017 by Holman Bible Publishers. Used by permission. Christian Standard Bible® and CSB® are federally registered trademarks of Holman Bible Publishers.',
      'copyright.page.biblicalContent.esv': 'Scripture quotations marked ESV® are from the ESV® Bible (The Holy Bible, English Standard Version®), copyright © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.',
      'copyright.page.biblicalContent.niv': 'Scripture quotations marked NIV® are taken from the Holy Bible, New International Version®, NIV®. Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™ Used by permission of Zondervan. All rights reserved worldwide. www.zondervan.com The "NIV" and "New International Version" are trademarks registered in the United States Patent and Trademark Office by Biblica, Inc.™',
      
      'copyright.page.educationalUse.title': 'Educational and Ministry Use',
      'copyright.page.educationalUse.text': 'We encourage the use of our materials for educational and ministry purposes. You may download and print content from our website for non-commercial, educational, personal, or congregational use, provided that:',
      'copyright.page.educationalUse.rule1': 'You do not modify the content',
      'copyright.page.educationalUse.rule2': 'You include proper attribution to Humbleberger Ministries',
      'copyright.page.educationalUse.rule3': 'You do not remove any copyright or other proprietary notices',
      'copyright.page.educationalUse.rule4': 'You do not use the content in a way that suggests Humbleberger Ministries endorses you or your use',
      
      'copyright.page.permission.title': 'Permission Requests',
      'copyright.page.permission.text': 'For permission to use content from our website beyond the scope described above, please contact us at:',
      'copyright.page.permission.link': 'online form',
      'copyright.page.permission.contactText': 'Contact us using our',
      
      'copyright.page.infringement.title': 'Copyright Infringement',
      'copyright.page.infringement.text': 'If you believe that your copyrighted work has been used on our website in a way that constitutes copyright infringement, please provide us with the following information:',
      'copyright.page.infringement.item1': 'A description of the copyrighted work that you claim has been infringed',
      'copyright.page.infringement.item2': 'A description of where the allegedly infringing material is located on our website',
      'copyright.page.infringement.item3': 'Your contact information, including address, telephone number, and email address',
      'copyright.page.infringement.item4': 'A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law',
      'copyright.page.infringement.item5': 'A statement by you, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner\'s behalf',
      'copyright.page.infringement.notice': 'Such notices should be sent to:',
      'copyright.page.infringement.contact': 'Humbleberger Ministries\nAttn: Copyright Agent\nContact us using our online form.',
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
      'pageTitle.contact': 'צרו קשר - שירותי האמבלברגר',
      'pageTitle.contactSuccess': 'ההודעה נשלחה! - שירותי האמבלברגר',
      
      // Meta Descriptions
      'meta.contact': 'צרו קשר עם שירותי האמבלברגר. שלחו לנו הודעה דרך טופס יצירת הקשר שלנו.',
      
      // Organization Name
      'org.name': 'שירותי\nהאמבלברגר',
      
      // URLs
      'urls.chat': 'https://chat.humbleberger.org/he?translation=csb',
      'urls.newsletter': 'https://mailchi.mp/2757d0257dda/humbleberger-ministries-he',
      'urls.donate': 'https://donorbox.org/humbleberger-ministries',
      'urls.synagogue': 'https://app.kehila.org/he/directory',
      'urls.twitter': 'https://x.com/humbleberger',
      'urls.bible': '/assets/Modern-Hebrew-New-Testament.pdf',
      'urls.contactForm': 'https://formspree.io/f/xnnvbwvz',
      
      // Internal URLs
      'urls.internal.blog': '/he/blog',
      'urls.internal.home': '/he',
      'urls.internal.contact': '/he/contact',
      'urls.internal.mission': '/he/mission',
      'urls.internal.encounteringMessiah': '/he/encountering-messiah',
      'urls.internal.countingCost': '/he/blog/counting-the-cost',
      'urls.internal.whoIsYeshua': '/he/blog/who-is-yeshua',
      'urls.internal.fromTrenches': '/he/blog/from-the-trenches-an-evangelism-guide',
      'urls.internal.shema': '/he/blog/yeshua-and-the-shema',
      'urls.internal.antisemitism': '/he/anti-semitism',
      'urls.internal.statementOfFaith': '/he/statement-of-faith',
      'urls.internal.privacyPolicy': '/he/privacy-policy',
      'urls.internal.termsOfUse': '/he/terms-of-use',
      'urls.internal.copyright': '/he/copyright',
      'urls.internal.rss': '/rss-he.xml',
      'urls.internal.contactSuccess': '/he/contact-success',
      
      // Internal URLs with parameters
      'urls.internal.countingCostFromHome': '/he/blog/counting-the-cost?from=home',
      'urls.internal.whoIsYeshuaFromHome': '/he/blog/who-is-yeshua?from=home',
      'urls.internal.fromTrenchesFromHome': '/he/blog/from-the-trenches-an-evangelism-guide?from=home',
      'urls.internal.shemaFromHome': '/he/blog/yeshua-and-the-shema?from=home',
      
      // Header URLs
      'urls.site': 'https://humbleberger.org/he',
      'urls.logo': 'https://humbleberger.org/logo.png',
      'urls.socialPreview': 'https://humbleberger.org/social-preview.png',
      
      // Person names
      'person.founder.name': 'דניאל גיי קרוס',
      'person.founder.email': 'shalom@humbleberger.org',
      
      // Common terms
      'common.rss': 'RSS',
      'common.fein.title': 'FEIN',
      'common.fein.number': '33-4533201',
      
      // Anti-Semitism Page
      'antiSemitism.title': 'הצהרה נגד אנטישמיות - שירותי האמבלברגר',
      'antiSemitism.description': 'הצהרת שירותי האמבלברגר על אנטישמיות ומחויבותנו לאמת המקראית ולאהבת העם היהודי.',
      'antiSemitism.heading': 'הצהרה נגד אנטישמיות, זהות יהודית ואהבת הבשורה',
      'antiSemitism.intro': 'כמשרד המבוסס על בשורת ישוע המשיח ומחויב לישועת העם היהודי והעמים, שירותי האמבלברגר עומדים בתקיפות ובלא סייג נגד כל צורות האנטישמיות, בעבר ובהווה, בין אם פוליטיות, תרבותיות, חברתיות או תאולוגיות.',
      
      'antiSemitism.section1.title': 'I. עמדה של אהבה וכבוד',
      'antiSemitism.section1.content': 'שירותי האמבלברגר מחויבים עמוקות לכבוד העם היהודי כאהוב בהיסטוריה הגואלת של אלוהים ובמורשת. אנו מתאבלים על הדרכים שבהן קהילות יהודיות סבלו לאורך ההיסטוריה, כולל עוולות שבוצעו בשם הנצרות. כחסידי ישוע, אנו נקראים ללכת בענווה ובאהבה — לא רק בתורה, אלא באופן שבו אנו נושאים ומתקשרים את הבשורה.',
      
      'antiSemitism.section2.title': 'II. כבוד לעם היהודי ולקריאתם',
      'antiSemitism.section2.content': 'אנו מכירים ומשמחים בתפקיד הייחודי של העם היהודי בתוכנית הגואלת של אלוהים. הבריתות, ההבטחות, האבות, הנביאים, ולבסוף המשיח הגיעו דרכם (רומים ט:4-5). אנו לא מבקשים למחוק זהות או מורשת יהודית, אלא לאשר את המשמעות העמוקה שלה — מאמינים שהביטוי המלא ביותר שלה נמצא בישוע, המשיח שהובטח בכתבי הקודש העבריים.',
      
      'antiSemitism.section3.title': 'III. משרד של הזמנה, לא כפייה',
      'antiSemitism.section3.content': 'אנו מאמינים שישוע הוא המשיח של ישראל ומושיע העולם. בכבוד עמוק, אנו מבקשים לחלוק את הבשורה הטובה הזו עם אנשים יהודים לא דרך לחץ או ויכוח, אלא דרך הכתובים, תפילה, מערכת יחסים ועדות — תמיד מבוססים באהבה ויראת כבוד.',
      
      'antiSemitism.section4.title': 'IV. מחויבות לפיוס ויושרה',
      'antiSemitism.section4.content': 'אנו מכירים בצורך של הכנסייה ללכת בענווה לפני העם היהודי, להכיר בכישלונות העבר ולבקש להיות גשר, לא מחסום. אנו עומדים נגד כל צורה של אנטישמיות — לא פשוט כרע היסטורי, אלא כדבר הסותר את לב אלוהים.',
      
      'antiSemitism.section5.title': 'V. ליבנו לעם היהודי',
      'antiSemitism.section5.content': 'הרצון שלנו הוא לא לנצח ויכוחים אלא לחלוק תקווה. אנו משתוקקים שאנשים יהודים בכל מקום יפגשו את המשיח שניבא בכתבי הקודש שלהם — זה שממלא את התורה והנביאים, מביא שלום עם אלוהים, ומזמין את כל האנשים, יהודים וגויים, למשפחה אחת נגאלת במשיח.',
      
      // Copyright Page
      'copyright.page.title': 'זכויות יוצרים - שירותי האמבלברגר',
      'copyright.page.description': 'מידע על זכויות יוצרים עבור שירותי האמבלברגר.',
      'copyright.page.heading': 'הודעה על זכויות יוצרים',
      'copyright.page.lastUpdated': 'עודכן לאחרונה: 18 באפריל 2025',
      
      'copyright.page.websiteContent.title': 'תוכן האתר',
      'copyright.page.websiteContent.text': '© {{year}} שירותי האמבלברגר. כל הזכויות שמורות. התוכן באתר זה, כולל אך לא מוגבל לטקסט, גרפיקה, לוגואים, תמונות, קטעי אודיו, הורדות דיגיטליות וקומפילציות נתונים, הוא רכושו של שירותי האמבלברגר ומוגן על ידי חוקי זכויות יוצרים של ארצות הברית והבינלאומיים.',
      
      'copyright.page.trademarks.title': 'סימני מסחר',
      'copyright.page.trademarks.text': 'שם שירותי האמבלברגר, הלוגו וכל השמות הקשורים, לוגואים, שמות מוצרים ושירותים, עיצובים וסיסמאות הם סימני מסחר של שירותי האמבלברגר או השותפים שלו. אסור לכם להשתמש בסימנים כאלה ללא אישור בכתב מראש של שירותי האמבלברגר.',
      
      'copyright.page.biblicalContent.title': 'תוכן מקראי',
      'copyright.page.biblicalContent.csb': 'ציטוטי הכתובים המסומנים CSB® נלקחו מהתנ"ך הנוצרי הסטנדרטי®, זכויות יוצרים © 2017 על ידי הולמן ביבל פאבלישרס. בשימוש באישור. התנ"ך הנוצרי הסטנדרטי® ו-CSB® הם סימני מסחר רשומים פדרלית של הולמן ביבל פאבלישרס.',
      'copyright.page.biblicalContent.esv': 'ציטוטי הכתובים המסומנים ESV® הם מהתנ"ך ESV® (התנ"ך הקדוש, גרסה סטנדרטית באנגלית®), זכויות יוצרים © 2001 על ידי קרוסוויי, משרד פרסום של מוציאים לאור של בשורות טובות. בשימוש באישור. כל הזכויות שמורות.',
      'copyright.page.biblicalContent.niv': 'ציטוטי הכתובים המסומנים NIV® נלקחו מהתנ"ך הקדוש, הגרסה הבינלאומית החדשה®, NIV®. זכויות יוצרים © 1973, 1978, 1984, 2011 על ידי ביבליקה, בע"מ™ בשימוש באישור זונדרוון. כל הזכויות שמורות ברחבי העולם. www.zondervan.com ה-"NIV" ו-"הגרסה הבינלאומית החדשה" הם סימני מסחר רשומים במשרד הפטנטים וסימני המסחר של ארצות הברית על ידי ביבליקה, בע"מ™',
      
      'copyright.page.educationalUse.title': 'שימוש חינוכי ומיניסטריאלי',
      'copyright.page.educationalUse.text': 'אנו מעודדים את השימוש בחומרים שלנו למטרות חינוכיות ומיניסטריאליות. אתם יכולים להוריד ולהדפיס תוכן מהאתר שלנו לשימוש לא מסחרי, חינוכי, אישי או קהילתי, בתנאי ש:',
      'copyright.page.educationalUse.rule1': 'אתם לא משנים את התוכן',
      'copyright.page.educationalUse.rule2': 'אתם כוללים ייחוס מתאים לשירותי האמבלברגר',
      'copyright.page.educationalUse.rule3': 'אתם לא מסירים שום הודעת זכויות יוצרים או הודעות קניין אחרות',
      'copyright.page.educationalUse.rule4': 'אתם לא משתמשים בתוכן באופן שמרמז ששירותי האמבלברגר תומכים בכם או בשימוש שלכם',
      
      'copyright.page.permission.title': 'בקשות אישור',
      'copyright.page.permission.text': 'לאישור להשתמש בתוכן מהאתר שלנו מעבר להיקף המתואר לעיל, אנא צרו איתנו קשר ב:',
      'copyright.page.permission.link': 'טופס מקוון',
      'copyright.page.permission.contactText': 'צרו איתנו קשר באמצעות',
      
      'copyright.page.infringement.title': 'הפרת זכויות יוצרים',
      'copyright.page.infringement.text': 'אם אתם מאמינים שעבודת זכויות היוצרים שלכם שימשה באתר שלנו באופן שמהווה הפרת זכויות יוצרים, אנא ספקו לנו את המידע הבא:',
      'copyright.page.infringement.item1': 'תיאור של עבודת זכויות היוצרים שאתם טוענים שהופרה',
      'copyright.page.infringement.item2': 'תיאור של איפה החומר המפר לכאורה ממוקם באתר שלנו',
      'copyright.page.infringement.item3': 'מידע ליצירת קשר שלכם, כולל כתובת, מספר טלפון וכתובת אימייל',
      'copyright.page.infringement.item4': 'הצהרה שלכם שיש לכם אמונה טובה שהשימוש השנוי במחלוקת אינו מורשה על ידי בעל זכויות היוצרים, הסוכן שלו, או החוק',
      'copyright.page.infringement.item5': 'הצהרה שלכם, שנעשית תחת עונש של עדות שקר, שהמידע בהודעה שלכם מדויק ושאתם בעל זכויות היוצרים או מורשים לפעול בשם בעל זכויות היוצרים',
      'copyright.page.infringement.notice': 'הודעות כאלה יש לשלוח ל:',
      'copyright.page.infringement.contact': 'שירותי האמבלברגר\nלתשומת לב: סוכן זכויות יוצרים\nצרו איתנו קשר באמצעות הטופס המקוון שלנו.',
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
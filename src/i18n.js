import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      'header.title':
        'Humbleberger Ministries - Proclaiming the Gospel of Yeshua',
      'header.description':
        'Proclaiming the gospel of Yeshua with a special heart for the Jewish people. Find answers about Yeshua, the Bible, and our mission.',
      'header.keywords':
        'Yeshua, Jesus, Messiah, Jewish, gospel, ministry, Bible, evangelism, Christian, Christianity, Jewish-Christian, Jewish-Christianity',
      'header.ogTitle':
        'Humbleberger Ministries - Proclaiming the Gospel of Yeshua',
      'header.ogDescription':
        'Proclaiming the gospel of Yeshua with a special heart for the Jewish people.',
      'header.twitterTitle':
        'Humbleberger Ministries - Proclaiming the Gospel of Yeshua',
      'header.twitterDescription':
        'Proclaiming the gospel of Yeshua with a special heart for the Jewish people.',
      'header.structuredDataDescription':
        'Proclaiming the gospel of Yeshua with a special heart for the Jewish people.',
      'header.statementOfFaith': 'Statement of Faith',
      'header.statementOnAntisemitism': 'Statement on Anti-Semitism',
      'header.countingTheCost': 'Counting the Cost',
      'header.donate': 'Donate',
      'header.copyright':
        '© 2025 Humbleberger Ministries. All rights reserved.',
      'header.mission': 'Mission',
      'header.blog': 'Blog',
      'header.contact': 'Contact',
      'header.home': 'Home',
      'header.rssTitle': 'Subscribe to RSS Feed',

      // Language Switcher
      'language.switch': 'Switch Language',
      'language.english': 'English',
      'language.hebrew': 'עברית',

      // Home Page
      'home.about.title': 'About the Mission',
      'home.about.welcome':
        'Welcome to Humbleberger Ministries – where we proclaim the gospel of Yeshua with a special heart for the Jewish people. Our mission is rooted in Romans 1:16: "For I am not ashamed of the gospel, because it is the power of God for salvation to everyone who believes, first to the Jew, and also to the Greek."',
      'home.about.description':
        "Through discipleship, street outreach, and digital tools, we're equipping believers to reach those searching for truth with love and truth. Got questions? You can chat with us or find a Bible-believing church near you.",
      'home.cta.whoIsYeshua': 'Who is Yeshua?',
      'home.cta.encounteringMessiah': 'Encountering Messiah',
      'home.connect.title': 'Connect With Us',
      'home.connect.subtitle':
        "🤔 Curious about Yeshua or the Bible? We'd love to chat with you!",
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
      'contact.description':
        "Have questions about Yeshua, the Bible, or our ministry? We'd love to hear from you!",
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send Message',
      'contact.sending': 'Sending...',
      'contact.success.title': 'Message Sent!',
      'contact.success.message':
        "Thank you for your message! We'll get back to you soon.",
      'contact.success.back': '← Back to Home',
      'contact.error.submit':
        'There was an error submitting the form. Please try again.',
      'contact.error.unexpected':
        'An unexpected error occurred. Please try again later.',

      // Mission
      'mission.title': 'Our Mission',
      'mission.description':
        'At Humbleberger Ministries, we are passionate about sharing the gospel of Yeshua with everyone, with a special heart for the Jewish people.',

      // Footer/Copyright
      'copyright.text': '© 2025 Humbleberger Ministries. All rights reserved.',
      'copyright.privacy': 'Privacy Policy',
      'copyright.terms': 'Terms of Use',
      'copyright.statement': 'Statement of Faith',
      'copyright.legal':
        'Humbleberger Ministries is officially registered with the state of North Carolina and the Internal Revenue Service as a 501(c)(3) non-profit organization. All donations are tax-deductible.',

      // Cookie Banner
      'cookies.message':
        'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
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
      'legal.privacy.description':
        'Privacy Policy for Humbleberger Ministries website.',
      'legal.terms.description':
        'Terms of Use for Humbleberger Ministries website.',
      'legal.statement.description':
        'Statement of Faith and core beliefs of Humbleberger Ministries.',
      'legal.antiSemitism.description':
        'Humbleberger Ministries statement on anti-Semitism and our commitment to biblical truth and love for the Jewish people.',
      'legal.copyright.description':
        'Copyright information for Humbleberger Ministries.',

      // Privacy Policy Page
      'privacy.title': 'Privacy Policy',
      'privacy.lastUpdated': 'Last Updated: April 18, 2025',
      'privacy.intro':
        'At Humbleberger Ministries, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our website and services.',

      'privacy.collect.title': 'Information We Collect',
      'privacy.collect.content':
        'We may collect personal information such as your name, email address, and location when you voluntarily submit this information through our website, such as when signing up for our newsletter or contacting us. Additionally, we automatically collect certain information about your device, including your IP address, browser type, and operating system.',

      'privacy.use.title': 'How We Use Your Information',
      'privacy.use.intro': 'We use the information we collect to:',
      'privacy.use.item1':
        'Respond to your inquiries and provide you with information about our ministry',
      'privacy.use.item2':
        'Send you our newsletter and updates about our activities (with your consent)',
      'privacy.use.item3': 'Improve our website and services',
      'privacy.use.item4':
        'Fulfill any specific purpose for which you provided the information',

      'privacy.cookies.title': 'Cookies and Tracking Technologies',
      'privacy.cookies.content':
        'Our website uses cookies and similar tracking technologies to improve your browsing experience and collect information about how you use our site. You can manage your cookie preferences through your browser settings.',

      'privacy.thirdParty.title': 'Third-Party Service Providers',
      'privacy.thirdParty.content':
        'We may share your information with trusted third-party service providers who assist us in operating our website, conducting our ministry, or servicing you. These third parties are obligated to keep your information confidential.',

      'privacy.rights.title': 'Your Rights',
      'privacy.rights.intro': 'You have the right to:',
      'privacy.rights.item1':
        'Access the personal information we hold about you',
      'privacy.rights.item2': 'Request correction of inaccurate information',
      'privacy.rights.item3': 'Request deletion of your information',
      'privacy.rights.item4': 'Opt-out of receiving communications from us',

      'privacy.children.title': "Children's Privacy",
      'privacy.children.content':
        'Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.',

      'privacy.changes.title': 'Changes to This Privacy Policy',
      'privacy.changes.content':
        'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on this page with a revised "Last Updated" date.',

      'privacy.contact.title': 'Contact Us',
      'privacy.contact.content':
        'If you have any questions or concerns about our Privacy Policy, please contact us using our',
      'privacy.contact.link': 'online form',

      // Encountering Messiah Page
      'encountering.title': 'Encountering Messiah: A Journey for Jewish Hearts',
      'encountering.subtitle':
        'Ancient questions. Modern seekers. One promised hope.',
      'encountering.comingSoon': '(Coming Soon)',

      'encountering.section1.title': '1. FOUNDATIONAL QUESTIONS ABOUT YESHUA',
      'encountering.section1.subtitle':
        'Basic facts about His life, death, resurrection, and identity',
      'encountering.section1.whoIsYeshua': 'Who is Yeshua?',
      'encountering.section1.didYeshuaExist': 'Did Yeshua really exist?',
      'encountering.section1.wasYeshuaSinless': 'Was Yeshua really sinless?',
      'encountering.section1.wasYeshuaBornVirgin':
        'Was Yeshua really born of a virgin?',
      'encountering.section1.didYeshuaDieCross':
        'Did Yeshua really die on a cross?',
      'encountering.section1.didYeshuaRise':
        'Did Yeshua really rise from the dead?',
      'encountering.section1.didYeshuaAscend':
        'Did Yeshua really ascend into heaven?',
      'encountering.section1.isYeshuaAlive': 'Is Yeshua still alive today?',

      'encountering.section2.title': '2. MESSIAHSHIP IN THE HEBREW BIBLE',
      'encountering.section2.subtitle':
        'Questions of identity & messianic expectation',
      'encountering.section2.couldYeshuaBeMessiah':
        'Could Yeshua be the Messiah prophesied in the Hebrew Bible?',
      'encountering.section2.hasMessiahCome':
        'Is it possible that the Messiah has already come?',
      'encountering.section2.whatWillMessiahDo':
        'What do the Hebrew Scriptures say the Messiah will do?',
      'encountering.section2.whatDoesTanakhSay':
        'What does the Tanakh say about the Messiah?',

      'encountering.section3.title': '3. MESSIANIC PROPHECY & FULFILLMENT',
      'encountering.section3.subtitle':
        'Specific prophecies and fulfillment in Yeshua',
      'encountering.section3.daniel9':
        'What does Daniel 9 say about when the Messiah would come?',
      'encountering.section3.isaiah53':
        'Who or what is Isaiah 53 referring to in the Hebrew Bible?',
      'encountering.section3.jeremiah31':
        "What does Jeremiah 31 say about the 'New Covenant' in the Hebrew Bible?",
      'encountering.section3.fulfillsNotReplaces':
        'Are there ways that Yeshua fulfills, rather than replaces, the Hebrew Scriptures?',
      'encountering.section3.redemption':
        'What does the Hebrew Bible teach about redemption?',

      'encountering.section4.title': '4. ATONEMENT, SIN, AND SALVATION',
      'encountering.section4.subtitle':
        'How salvation works; sin, atonement, afterlife',
      'encountering.section4.whatIsSin': 'What is sin?',
      'encountering.section4.sacrificeRole':
        'What role did sacrifice play in atonement in the Torah, and how is it handled today?',
      'encountering.section4.atonementWithoutTemple':
        'How do you understand atonement today without the Temple?',
      'encountering.section4.rightRelationship':
        'What does it mean to be in right relationship with God?',
      'encountering.section4.whatToDoSaved':
        'What do I need to do to be saved?',
      'encountering.section4.becomeJewishChristian':
        'How do I become a Jewish-Christian?',
      'encountering.section4.goToHeaven': 'What does it mean to go to heaven?',
      'encountering.section4.hellExists': 'Does hell exist?',

      'encountering.section5.title': '5. JEWISH IDENTITY & MESSIANIC FAITH',
      'encountering.section5.subtitle':
        'Jewish believers in Yeshua and Jewish-Christian questions',
      'encountering.section5.jewishAndBelieve':
        'Can someone be Jewish and believe in Yeshua?',
      'encountering.section5.whySomeBelieve':
        'Why do some Jewish people believe in Yeshua today?',
      'encountering.section5.whySomeReject':
        'Why do some Jewish people reject the idea of Yeshua as Messiah?',

      'encountering.section6.title':
        '6. TORAH OBSERVANCE & JEWISH-CHRISTIAN PRACTICE',
      'encountering.section6.subtitle':
        'Law, mitzvot, and how Jewish-Christians live',
      'encountering.section6.all613Mitzvot':
        'Do I need to follow all 613 mitzvot?',
      'encountering.section6.keepKosher': 'Do Jewish-Christians keep kosher?',
      'encountering.section6.keepShabbat': 'Do Jewish-Christians keep Shabbat?',

      'encountering.section7.title': '7. MEETING THE MESSIAH PERSONALLY',
      'encountering.section7.subtitle':
        'Personal relationship and spiritual encounter',
      'encountering.section7.encounterYeshua':
        'How can I personally encounter Yeshua today?',
      'encountering.section7.personalRelationship':
        'What does it mean to have a personal relationship with the Messiah?',
      'encountering.section7.recognizeVoice':
        'How can I recognize the voice of the Messiah in my life?',

      // Ebook Download
      'ebook.title': 'Download the Complete Ebook',
      'ebook.description': 'Get the entire "Encountering Messiah" series as a beautifully formatted PDF ebook. Perfect for offline reading, sharing with friends, or studying at your own pace.',
      'ebook.feature1': '📖 All 33 articles in one document',
      'ebook.feature2': '📋 Complete table of contents',
      'ebook.feature3': '🎨 Professional formatting',
      'ebook.feature4': '📱 Works on all devices',
      'ebook.downloadButton': 'Download Free Ebook',
      'ebook.note': 'This ebook is completely free and may be shared with others.',

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
      'search.resultsFound':
        'Found {{count}} post{{plural}} for "{{searchTerm}}"',

      // RSS
      'rss.subscribe': 'Subscribe to RSS Feed',

      // Page Titles
      'pageTitle.contact': 'Contact Us - Humbleberger Ministries',
      'pageTitle.contactSuccess': 'Message Sent! - Humbleberger Ministries',

      // Meta Descriptions
      'meta.contact':
        'Get in touch with Humbleberger Ministries. Send us a message through our contact form.',

      // Organization Name
      'org.name': 'Humbleberger\nMinistries',

      // URLs
      'urls.chat': 'https://chat.humbleberger.org/en?translation=csb',
      'urls.newsletter': 'https://eepurl.com/ja6zNY',
      'urls.donate': 'https://donorbox.org/humbleberger-ministries',
      'urls.synagogue': 'https://www.9marks.org/church-search/',
      'urls.twitter': 'https://x.com/humbleberger',
      'urls.bible':
        'https://app.logos.com/books/LLS%3ACSB/references/bible%2Bcsb2.64.1.1?layout=reading&rightSidebar=closed',
      'urls.contactForm': 'https://formspree.io/f/xnnvbwvz',

      // Internal URLs
      'urls.internal.blog': '/blog',
      'urls.internal.home': '/',
      'urls.internal.contact': '/contact',
      'urls.internal.mission': '/mission',
      'urls.internal.encounteringMessiah': '/encountering-messiah',
      'urls.internal.countingCost': '/blog/counting-the-cost',
      'urls.internal.whoIsYeshua': '/blog/who-is-yeshua',
      'urls.internal.fromTrenches':
        '/blog/from-the-trenches-an-evangelism-guide',
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
      'urls.internal.fromTrenchesFromHome':
        '/blog/from-the-trenches-an-evangelism-guide?from=home',
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
      'antiSemitism.title':
        'Statement on Antisemitism - Humbleberger Ministries',
      'antiSemitism.heading':
        'Statement on Antisemitism, Jewish Identity, and Gospel Love',
      'antiSemitism.description':
        "Humbleberger Ministries' statement on antisemitism and our commitment to biblical truth and love for the Jewish people.",
      'antiSemitism.intro':
        'As a ministry founded upon the gospel of Messiah Yeshua and committed to the salvation of the Jewish people and the nations, Humbleberger Ministries stands firmly and unequivocally against all forms of antisemitism, both past and present, whether political, cultural, social, or theological.',

      'antiSemitism.section1.title': 'I. A Posture of Love and Respect',
      'antiSemitism.section1.content':
        "Humbleberger Ministries is deeply committed to honoring the Jewish people as beloved in God's redemptive history and heritage. We grieve the ways Jewish communities have suffered throughout history, including injustices carried out in the name of Christianity. As followers of Yeshua, we are called to walk in humility and love — not only in doctrine, but in how we carry and communicate the gospel.",

      'antiSemitism.section2.title':
        'II. Honoring the Jewish People and Their Calling',
      'antiSemitism.section2.content':
        "We recognize and rejoice in the unique role of the Jewish people in God's redemptive plan. The covenants, the promises, the patriarchs, the prophets, and ultimately the Messiah have come through them (Romans 9:4–5). We do not seek to erase Jewish identity or heritage, but to affirm its deep significance — believing that its fullest expression is found in Yeshua, the Messiah promised in the Hebrew Scriptures.",

      'antiSemitism.section3.title':
        'III. A Ministry of Invitation, Not Coercion',
      'antiSemitism.section3.content':
        'We believe that Yeshua is the Messiah of Israel and Savior of the world. With deep respect, we seek to share this good news with Jewish people not through pressure or argument, but through Scripture, prayer, relationship, and testimony — always grounded in love and reverence.',

      'antiSemitism.section4.title':
        'IV. A Commitment to Reconciliation and Integrity',
      'antiSemitism.section4.content':
        "We acknowledge the Church's need to walk humbly before the Jewish people, recognizing past failures and seeking to be a bridge, not a barrier. We stand against every form of antisemitism — not simply as a historical evil, but as something contrary to the heart of God.",

      'antiSemitism.section5.title': 'V. Our Heart for the Jewish People',
      'antiSemitism.section5.content':
        'Our desire is not to win arguments but to share hope. We long for Jewish people everywhere to encounter the Messiah foretold in their own Scriptures — the One who fulfills the law and the prophets, brings peace with God, and invites all people, Jew and Gentile, into one redeemed family in Messiah Yeshua.',

      // Copyright Page
      'copyright.page.title': 'Copyright - Humbleberger Ministries',
      'copyright.page.description':
        'Copyright information for Humbleberger Ministries.',
      'copyright.page.heading': 'Copyright Notice',
      'copyright.page.lastUpdated': 'Last Updated: April 18, 2025',

      'copyright.page.websiteContent.title': 'Website Content',
      'copyright.page.websiteContent.text':
        '© {{year}} Humbleberger Ministries. All rights reserved. The content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Humbleberger Ministries and is protected by United States and international copyright laws.',

      'copyright.page.trademarks.title': 'Trademarks',
      'copyright.page.trademarks.text':
        'The Humbleberger Ministries name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Humbleberger Ministries or its affiliates. You may not use such marks without the prior written permission of Humbleberger Ministries.',

      'copyright.page.biblicalContent.title': 'Biblical Content',
      'copyright.page.biblicalContent.csb':
        'Scripture quotations marked CSB® are taken from the Christian Standard Bible®, Copyright © 2017 by Holman Bible Publishers. Used by permission. Christian Standard Bible® and CSB® are federally registered trademarks of Holman Bible Publishers.',
      'copyright.page.biblicalContent.esv':
        'Scripture quotations marked ESV® are from the ESV® Bible (The Holy Bible, English Standard Version®), copyright © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.',
      'copyright.page.biblicalContent.niv':
        'Scripture quotations marked NIV® are taken from the Holy Bible, New International Version®, NIV®. Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™ Used by permission of Zondervan. All rights reserved worldwide. www.zondervan.com The "NIV" and "New International Version" are trademarks registered in the United States Patent and Trademark Office by Biblica, Inc.™',

      'copyright.page.educationalUse.title': 'Educational and Ministry Use',
      'copyright.page.educationalUse.text':
        'We encourage the use of our materials for educational and ministry purposes. You may download and print content from our website for non-commercial, educational, personal, or congregational use, provided that:',
      'copyright.page.educationalUse.rule1': 'You do not modify the content',
      'copyright.page.educationalUse.rule2':
        'You include proper attribution to Humbleberger Ministries',
      'copyright.page.educationalUse.rule3':
        'You do not remove any copyright or other proprietary notices',
      'copyright.page.educationalUse.rule4':
        'You do not use the content in a way that suggests Humbleberger Ministries endorses you or your use',

      'copyright.page.permission.title': 'Permission Requests',
      'copyright.page.permission.text':
        'For permission to use content from our website beyond the scope described above, please contact us at:',
      'copyright.page.permission.link': 'online form',
      'copyright.page.permission.contactText': 'Contact us using our',

      'copyright.page.infringement.title': 'Copyright Infringement',
      'copyright.page.infringement.text':
        'If you believe that your copyrighted work has been used on our website in a way that constitutes copyright infringement, please provide us with the following information:',
      'copyright.page.infringement.item1':
        'A description of the copyrighted work that you claim has been infringed',
      'copyright.page.infringement.item2':
        'A description of where the allegedly infringing material is located on our website',
      'copyright.page.infringement.item3':
        'Your contact information, including address, telephone number, and email address',
      'copyright.page.infringement.item4':
        'A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law',
      'copyright.page.infringement.item5':
        "A statement by you, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf",
      'copyright.page.infringement.notice': 'Such notices should be sent to:',
      'copyright.page.infringement.contact':
        'Humbleberger Ministries\nAttn: Copyright Agent\nContact us using our online form.',

      // Encountering Messiah URLs
      'urls.encountering.whoIsYeshua':
        '/blog/who-is-yeshua?from=encountering-messiah',
      'urls.encountering.didYeshuaExist':
        '/blog/did-yeshua-really-exist?from=encountering-messiah',
      'urls.encountering.wasYeshuaSinless':
        '/blog/was-yeshua-really-sinless?from=encountering-messiah',
      'urls.encountering.wasYeshuaBornVirgin':
        '/blog/was-yeshua-really-born-of-a-virgin?from=encountering-messiah',
      'urls.encountering.didYeshuaDieCross':
        '/blog/did-yeshua-really-die-on-a-cross?from=encountering-messiah',
      'urls.encountering.didYeshuaRise':
        '/blog/did-yeshua-really-rise-from-the-dead?from=encountering-messiah',
      'urls.encountering.didYeshuaAscend':
        '/blog/did-yeshua-really-ascend-into-heaven?from=encountering-messiah',
      'urls.encountering.isYeshuaAlive':
        '/blog/is-yeshua-still-alive-today?from=encountering-messiah',
      'urls.encountering.couldYeshuaBeMessiah':
        '/blog/could-yeshua-be-the-messiah?from=encountering-messiah',
      'urls.encountering.hasMessiahCome':
        '/blog/has-messiah-already-come?from=encountering-messiah',
      'urls.encountering.whatWillMessiahDo':
        '/blog/what-will-the-messiah-do?from=encountering-messiah',
      'urls.encountering.whatDoesTanakhSay':
        '/blog/what-does-the-tanakh-say-about-messiah?from=encountering-messiah',
      'urls.encountering.daniel9':
        '/blog/when-was-the-messiah-supposed-to-come?from=encountering-messiah',
      'urls.encountering.isaiah53':
        '/blog/who-is-the-suffering-servant?from=encountering-messiah',
      'urls.encountering.jeremiah31':
        '/blog/the-new-covenant-that-was-promised?from=encountering-messiah',
      'urls.encountering.fulfillsNotReplaces':
        '/blog/the-fulfillment-of-the-hebrew-scriptures?from=encountering-messiah',
      'urls.encountering.redemption':
        '/blog/redemption-in-the-hebrew-scriptures?from=encountering-messiah',
      'urls.encountering.whatIsSin':
        '/blog/what-is-sin?from=encountering-messiah',
      'urls.encountering.whatIsRedemption':
        '/blog/the-heart-of-atonement?from=encountering-messiah',
      'urls.encountering.atonementWithoutTemple':
        '/blog/atonement-without-the-temple?from=encountering-messiah',
      'urls.encountering.rightRelationshipWithGod':
        '/blog/right-relationship-with-god?from=encountering-messiah',
      'urls.encountering.whatToDoSaved':
        '/blog/what-must-i-do-to-be-saved?from=encountering-messiah',
      'urls.encountering.howToBecomeJewishChristian':
        '/blog/how-to-become-a-jewish-christian?from=encountering-messiah',
      'urls.encountering.howToGetToHeaven':
        '/blog/how-to-get-to-heaven?from=encountering-messiah',
      'urls.encountering.doesHellExist':
        '/blog/does-hell-exist?from=encountering-messiah',
      'urls.encountering.isItPossibleToBeJewishChristian':
        '/blog/is-it-possible-to-be-a-jewish-christian?from=encountering-messiah',
      'urls.encountering.whySomeJewsBelieve':
        '/blog/why-some-jews-believe?from=encountering-messiah',
      'urls.encountering.whySomeJewsReject':
        '/blog/why-some-jews-reject?from=encountering-messiah',
      'urls.encountering.whatAboutThe613Mitzvot':
        '/blog/what-about-the-613-mitzvot?from=encountering-messiah',
      'urls.encountering.whatAboutTheKosherLaws':
        '/blog/what-about-the-kosher-laws?from=encountering-messiah',
      'urls.encountering.whatAboutShabbat':
        '/blog/what-about-shabbat?from=encountering-messiah',
      'urls.encountering.howDoIMeetMessiah':
        '/blog/how-do-i-meet-messiah?from=encountering-messiah',
      'urls.encountering.howDoIFellowshipWithTheSpiritual':
        '/blog/how-do-i-fellowship-with-the-spirit?from=encountering-messiah',
      'urls.encountering.howToRecognizeGodsVoice':
        '/blog/how-to-recognize-gods-voice?from=encountering-messiah',

      // Mission Page
      'mission.title': 'Our Mission',
      'mission.content':
        'Humbleberger Ministries exists to glorify God by proclaiming the gospel of Yeshua the Messiah, with a focused calling to bring the good news to the Jewish people in the cities of New York and Tel Aviv. Rooted in the spirit of the Apostle Paul, our mission is to evangelize, disciple, and raise up faithful preachers and teachers to plant and shepherd churches across the globe. While our primary focus is Jewish missions, we stand fully on the Great Commission, seeking to reach all the lost and serve the global Church as the Lord leads.',

      // Statement of Faith Page
      'statement.title': 'Statement of Faith',
      'statement.description':
        'These are the biblical principles and theological beliefs that guide our ministry.',

      'statement.item1.title': '1. The Authority and Unity of Scripture',
      'statement.item1.content':
        'We believe that the entire Bible — both the Old and New Testaments — is the inspired, inerrant, and infallible Word of God. It is the final and sufficient authority in all matters of faith, doctrine, and practice. The Hebrew Scriptures are foundational and point directly to Yeshua the Messiah.',

      'statement.item2.title': '2. The Triune God',
      'statement.item2.content':
        'We believe in one God, eternally existing in three Persons: Father, Son, and Holy Spirit. Each is fully God, equal in glory, power, and essence, yet distinct in role and relation.',

      'statement.item3.title': '3. The Person and Work of Messiah',
      'statement.item3.content':
        'Yeshua the Messiah, fully God and fully man, was conceived by the Holy Spirit and born of a virgin. He lived a sinless life, died a substitutionary death on the cross, rose bodily from the dead, and now reigns at the right hand of the Father. Salvation is found in Him alone.',

      'statement.item4.title': '4. Salvation by Grace Through Faith',
      'statement.item4.content':
        'Salvation is by grace alone, through faith alone, in Messiah alone. This includes regeneration, justification, sanctification, and glorification. It is the free gift of God and cannot be earned by works or human effort.',

      'statement.item5.title': "5. Believer's Baptism by Immersion",
      'statement.item5.content':
        "We believe baptism is for believers only, as a public profession of faith and obedience to Messiah. It is by immersion, symbolizing the believer's union with Messiah in His death, burial, and resurrection. It is not salvific but is commanded by Yeshua for all who follow Him.",

      'statement.item6.title': '6. The Church',
      'statement.item6.content':
        'The Church consists of all true believers in Messiah. The local church is an autonomous body of baptized believers committed to worship, fellowship, teaching, the ordinances, and mission. Messiah Yeshua is the head of the Church.',

      'statement.item7.title': '7. Spiritual Gifts',
      'statement.item7.content':
        'We affirm the continuing presence and operation of spiritual gifts within the Church, as described in the New Testament. We believe these gifts are to be exercised in a spirit of humility, under the authority of Scripture, and in accordance with the order and purpose taught in the New Testament.',

      'statement.item8.title':
        '8. The Guidance of the Holy Spirit and Personal Experience',
      'statement.item8.content':
        "We affirm the authority of Scripture as supreme yet also recognize the Holy Spirit's ongoing personal guidance. Spirit-led experience is sacred and legitimate when submitted to Scripture, discerned with wisdom, and practiced in community.",

      'statement.item9.title': '9. Biblical Anthropology: Gender and Identity',
      'statement.item9.content':
        "We affirm that all people are created by God in His image with inherent dignity and worth. We believe that God intentionally created humanity as male and female, and that both are equal in value and distinct in role. We affirm that marriage is a sacred covenant between one man and one woman, designed by God for human flourishing. We uphold the sanctity of life from conception to natural death, trusting in God's good design for human identity and purpose.",

      'statement.item10.title': '10. Doctrine of Humanity and Transhumanism',
      'statement.item10.content':
        "We affirm that humanity, created in the image of God, is a sacred and purposeful design. We believe that attempts to alter or enhance human nature through technological, genetic, or artificial means oppose God's intention for human identity and dignity. We affirm that human value is not found in artificial enhancements, but in being fearfully and wonderfully made by our Creator.",

      'statement.item11.title':
        "11. God's Redemptive Plan and the Hope of Jewish Evangelism",
      'statement.item11.content':
        'We believe that God\'s plan of salvation, revealed throughout the Scriptures, has always been by grace through faith — and is fulfilled in Yeshua, the Messiah. In Messiah, God is drawing both Jews and Gentiles into one redeemed people, united by the Spirit and anchored in the promises of the New Covenant. Honoring the priority of the gospel "to the Jew first" (Romans 1:16), we embrace a particular calling to lovingly share the good news of Yeshua with Jewish people around the world, inviting them to receive the Messiah foretold in their own Scriptures.',

      'statement.item12.title':
        "12. Love for the Jewish People and the Fulfillment of God's Promise",
      'statement.item12.content':
        "We affirm God's enduring covenantal love for the Jewish people and recognize the rich spiritual heritage given through them — the patriarchs, the prophets, the Scriptures, and ultimately the Messiah. We honor Jewish identity as part of God's redemptive plan and believe that the promises of the Hebrew Scriptures find their fulfillment in Yeshua, the Messiah of Israel. In this conviction, we approach Jewish people not with pressure or coercion, but with humility, gratitude, and hope — longing to share the good news of Yeshua with compassion and deep respect.",

      'statement.item13.title': '13. Non-Political Affiliation',
      'statement.item13.content':
        'We as an organization are not political in nature. We do not promote any party or ideology. Our citizenship is in heaven, and our mission is spiritual: to proclaim the gospel and advance the kingdom of Messiah.',

      'statement.item14.title': '14. Spiritual Warfare',
      'statement.item14.content':
        'We affirm the reality of spiritual warfare. The gospel is proclaimed in contested territory. We are equipped with the full armor of God and empowered by the Spirit to resist the enemy and advance the gospel in power and truth.',

      'statement.item15.title': '15. The Great Commission and Global Missions',
      'statement.item15.content':
        "We exist to make disciples of all nations, especially the Jewish people. We proclaim the gospel, plant churches, disciple believers, and raise up leaders. We affirm Messiah's command to go into all the world until every people hears. We follow the biblical pattern of gospel expansion from Jerusalem to Judea, Samaria, and the ends of the earth (Acts 1:8), laboring first for the Jewish people and then for the nations. Our evangelism is grounded in Scripture, both Old and New Testaments.",

      'statement.item16.title': '16. Truth and Exclusivity of the Gospel',
      'statement.item16.content':
        "We affirm that Yeshua is the only way to God, and that salvation is found in Him alone. We affirm the absolute truth and authority of God's Word in all generations. While we engage diverse cultures with humility and compassion, we hold fast to the exclusive truth of the gospel without compromise.",

      'statement.item17.title':
        '17. The Witness of the Church in a Secular World',
      'statement.item17.content':
        "We affirm the existence of a personal, holy, and sovereign God, who created and sustains all things. We affirm that true knowledge and wisdom begin with the fear of the Lord, and that any worldview which denies God's existence is ultimately incomplete and spiritually bankrupt.",

      'statement.item18.title': '18. The Sanctity of Life',
      'statement.item18.content':
        'We affirm the sanctity of all human life from conception to natural death. Every person bears the image of God and deserves dignity and protection. We affirm that all people, regardless of ability, age, or social status, are fearfully and wonderfully made.',

      'statement.item19.title':
        '19. Unity in the Essentials, Liberty in the Non-Essentials',
      'statement.item19.content':
        'We do not divide over secondary issues. We respect diverse views on creation, eschatology, spiritual gifts, and theological systems such as Reformed theology. However, we do not affirm classical dispensationalism, as we believe God has one people in Messiah Yeshua. We strive for unity in the gospel and charity in all things, provided that these positions uphold the inerrancy and authority of Scripture. We affirm, for example, the historical reality of Adam and Eve, as Yeshua Himself spoke of them as literal persons (Matthew 19:4–6).',

      'statement.item20.title': '20. Final Affirmation',
      'statement.item20.content':
        'We affirm these doctrines not as a cold creed but as a living confession — a call to proclaim Messiah to all people, especially to the Jewish people, with clarity, compassion, and boldness. We pledge to hold fast to the truth, preach the Word in season and out, and go wherever the Lord leads — from New York to Tel Aviv — until every knee bows and every tongue confesses that Yeshua the Messiah is Lord, to the glory of God the Father. Amen.',

      // Terms of Use Page
      'terms.title': 'Terms of Use',
      'terms.lastUpdated': 'Last Updated: April 18, 2025',
      'terms.intro':
        'Welcome to the Humbleberger Ministries website. By accessing or using our website, you agree to be bound by these Terms of Use. Please read them carefully.',

      'terms.acceptance.title': 'Acceptance of Terms',
      'terms.acceptance.content':
        'By accessing and using this website, you accept and agree to be bound by these Terms of Use, our Privacy Policy, and any other policies that may be published on our website. If you do not agree to these terms, please do not use our website.',

      'terms.content.title': 'Use of Content',
      'terms.content.content':
        'The content on our website, including but not limited to text, graphics, logos, images, audio clips, and software, is owned by or licensed to Humbleberger Ministries and is protected by copyright and other intellectual property laws. You may access and view the content for personal, non-commercial use only. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our website without our prior written permission.',

      'terms.conduct.title': 'User Conduct',
      'terms.conduct.intro': 'When using our website, you agree not to:',
      'terms.conduct.item1': 'Violate any applicable laws or regulations',
      'terms.conduct.item2': 'Infringe upon the rights of others',
      'terms.conduct.item3':
        'Use our website in any manner that could disable, overburden, or impair the site',
      'terms.conduct.item4':
        'Attempt to gain unauthorized access to any part of our website',
      'terms.conduct.item5':
        'Use our website to transmit any malicious software or code',
      'terms.conduct.item6':
        "Engage in any conduct that restricts or inhibits anyone's use of our website",

      'terms.links.title': 'Links to Third-Party Websites',
      'terms.links.content':
        'Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of these websites and accept no responsibility for them or for any loss or damage that may arise from your use of them. The inclusion of a link to a third-party website does not imply our endorsement of that website.',

      'terms.userContent.title': 'User-Generated Content',
      'terms.userContent.content':
        'If you submit any content to our website, including comments or feedback, you grant Humbleberger Ministries a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, adapt, publish, translate, and distribute such content in any media. You represent that you have the right to grant such a license.',

      'terms.disclaimer.title': 'Disclaimer of Warranties',
      'terms.disclaimer.content':
        'Our website and its content are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that our website or the servers that make it available are free of viruses or other harmful components.',

      'terms.liability.title': 'Limitation of Liability',
      'terms.liability.content':
        'To the fullest extent permitted by applicable law, Humbleberger Ministries shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of or in connection with your use of our website.',

      'terms.indemnification.title': 'Indemnification',
      'terms.indemnification.content':
        "You agree to indemnify, defend, and hold harmless Humbleberger Ministries and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from your use of our website or your violation of these Terms of Use.",

      'terms.changes.title': 'Changes to Terms',
      'terms.changes.content':
        'We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting the revised Terms of Use on our website. Your continued use of our website after the posting of revised Terms of Use constitutes your acceptance of such changes.',

      'terms.governing.title': 'Governing Law',
      'terms.governing.content':
        'These Terms of Use shall be governed by and construed in accordance with the laws of the State of North Carolina, without regard to its conflict of law provisions.',

      'terms.contact.title': 'Contact Us',
      'terms.contact.content':
        'If you have any questions about these Terms of Use, please contact us using our',
      'terms.contact.link': 'online form',
    },
  },
  he: {
    translation: {
      // Header
      'header.title': 'שירות האמבלברגר — מכריזים את בשורת ישוע המשיח',
      'header.description':
        'מבשרים את הבשורה של ישוע באהבה מיוחדת לעם היהודי. בואו למצוא תשובות על ישוע, על התנ"ך ועל השליחות שלנו.',
      'header.keywords':
        'ישוע, Jesus, המשיח, Messiah, יהודי, Jewish, הבשורה, Gospel, שירות, Ministry, תנ"ך, Bible, בישור, Evangelism, אמונה, Faith, גאולה, Salvation, נבואות המשיח, Messianic Prophecy, הברית החדשה, New Testament, משיחיות, Messianic Judaism, Christian, Christianity, Jewish-Christian, Jewish-Christianity',
      'header.ogTitle': 'שירות האמבלברגר — מכריזים את בשורת ישוע המשיח',
      'header.ogDescription': 'מבשרים את בשורת ישוע עם אהבה מיוחדת לעם ישראל.',
      'header.twitterTitle': 'שירות האמבלברגר — מכריזים את בשורת ישוע המשיח',
      'header.twitterDescription':
        'מבשרים את בשורת ישוע עם אהבה מיוחדת לעם ישראל.',
      'header.structuredDataDescription':
        'מבשרים את בשורת ישוע עם אהבה מיוחדת לעם ישראל.',
      'header.statementOfFaith': 'הצהרת אמונה',
      'header.statementOnAntisemitism': 'הצהרה נגד אנטישמיות',
      'header.countingTheCost': 'ספירת המחיר',
      'header.donate': 'תרום',
      'header.copyright': '© 2025 שירות האמבלברגר. כל הזכויות שמורות.',
      'header.mission': 'שליחות',
      'header.blog': 'בלוג',
      'header.contact': 'צור קשר',
      'header.home': 'בית',
      'header.rssTitle': 'הירשמו להזנת RSS',

      // Language Switcher
      'language.switch': 'החלף שפה',
      'language.english': 'English',
      'language.hebrew': 'עברית',

      // Home Page
      'home.about.title': 'על השליחות',
      'home.about.welcome':
        'ברוכים הבאים לשירות האמבלברגר – כאן אנו מכריזים את בשורת ישוע עם לב מיוחד לעם היהודי. השליחות שלנו מושרשת ברומים א׳:16: "כי אינני בוש בבשורה, שכן היא כוח אלוהים להושיע לכל המאמין, ליהודי בראשונה וגם ליווני."',
      'home.about.description':
        'באמצעות תלמידות, פעילות רחוב וכלים דיגיטליים, אנו מציידים מאמינים להגיע למחפשי האמת באהבה ובאמת.',
      'home.cta.whoIsYeshua': 'מי הוא ישוע?',
      'home.cta.encounteringMessiah': 'מפגש עם המשיח',
      'home.connect.title': 'התחברו איתנו',
      'home.connect.subtitle': '🤔 סקרנים לגבי ישוע או התנ"ך? נשמח לשוחח אתכם.',
      'home.connect.chat': '💬 דברו איתנו',
      'home.connect.blog': '🌐 קראו את הבלוג שלנו',
      'home.connect.bible': '📖 קראו את הברית החדשה בעברית',
      'home.connect.synagogue': '📍 מצאו בית כנסת מקומי',
      'home.connect.newsletter': '📰 קבלו את העלון שלנו',
      'home.connect.contact': '📬 צרו קשר',
      'home.connect.follow': '𝕏 עקבו אחרינו בטוויטר',
      'home.connect.donate': '❤️ תרמו',

      // Blog
      'blog.title': 'פוסטים בבלוג',
      'blog.readMore': 'קראו עוד',
      'blog.backToBlog': '← חזרה לבלוג',
      'blog.backToHome': '← חזרה לבית',
      'blog.page': 'עמוד',
      'blog.of': 'מתוך',
      'blog.previous': 'הקודם',
      'blog.next': 'הבא',
      'blog.noPosts': 'לא נמצאו פוסטים בבלוג.',
      'blog.rssTitle': 'הירשמו להזנת RSS',

      // Contact
      'contact.title': 'צרו קשר',
      'contact.description':
        'יש לכם שאלות על ישוע, על התנ"ך או על השירות שלנו? נשמח לשמוע מכם!',
      'contact.name': 'שם',
      'contact.email': 'אימייל',
      'contact.message': 'הודעה',
      'contact.send': 'שלח הודעה',
      'contact.sending': 'שולח...',
      'contact.success.title': 'ההודעה נשלחה!',
      'contact.success.message': 'תודה על ההודעה! נחזור אליכם בקרוב.',
      'contact.success.back': '← חזרה לבית',
      'contact.error.submit': 'אירעה שגיאה בשליחת הטופס. אנא נסו שוב.',
      'contact.error.unexpected':
        'אירעה שגיאה בלתי צפויה. אנא נסו שוב מאוחר יותר.',

      // Mission
      'mission.title': 'השליחות שלנו',
      'mission.description':
        'בשירות האמבלברגר אנו מלאי תשוקה לשתף את בשורת ישוע עם כולם, עם לב מיוחד לעם היהודי.',

      // Footer/Copyright
      'copyright.text': '© 2025 שירות האמבלברגר. כל הזכויות שמורות.',
      'copyright.privacy': 'מדיניות פרטיות',
      'copyright.terms': 'תנאי שימוש',
      'copyright.statement': 'הצהרת אמונה',
      'copyright.legal':
        'שירות האמבלברגר רשום כחוק בארצות הברית כארגון ללא מטרות רווח. כל התרומות מוכרות לצורכי מס לפי החוק האמריקאי.',

      // Cookie Banner
      'cookies.message':
        'אנו משתמשים בעוגיות כדי לשפר את חוויית השימוש שלך. בהמשך השימוש באתר, הנך מסכים לשימוש בעוגיות.',
      'cookies.accept': 'אישור',
      'cookies.learnMore': 'למידע נוסף',

      // Site Banner
      'banner.message': '🎉 חדש: הגרסה העברית של האתר זמינה כעת!',
      'banner.link': 'צפו באתר בעברית',
      'banner.logoAlt': 'הלוגו של שירות האמבלברגר',
      'banner.jewishEvangelism': 'בישור בקרב יהודים.',
      'banner.gospelProclamation': 'הכרזת הבשורה.',
      'banner.messiahCentered': 'שליחות ממוקדת במשיח.',
      'banner.ministryReference': '– ירמיהו 20:9 –',

      // Search
      'search.placeholder': 'חיפוש בפוסטים בבלוג...',
      'search.noResults': 'לא נמצאו תוצאות.',
      'search.clear': 'נקה חיפוש',
      'search.loading': 'טוען...',

      // Pagination
      'pagination.previous': 'הקודם',
      'pagination.next': 'הבא',
      'pagination.page': 'עמוד',
      'pagination.of': 'מתוך',
      'pagination.ariaLabel': 'ניווט דפים של פוסטים בבלוג',
      'pagination.prevAria': 'העמוד הקודם',
      'pagination.nextAria': 'העמוד הבא',

      // Legal Pages
      'legal.privacy.title': 'מדיניות פרטיות',
      'legal.terms.title': 'תנאי שימוש',
      'legal.statement.title': 'הצהרת אמונה',
      'legal.antiSemitism.title': 'הצהרה נגד אנטישמיות',
      'legal.privacy.description': 'מדיניות פרטיות עבור אתר שירות האמבלברגר.',
      'legal.terms.description': 'תנאי שימוש עבור אתר שירות האמבלברגר.',
      'legal.statement.description':
        'הצהרת אמונה ואמונות היסוד של שירות האמבלברגר.',
      'legal.antiSemitism.description':
        'הצהרת שירות האמבלברגר נגד אנטישמיות והמחויבות שלנו לאמת מקראית ולאהבה לעם היהודי.',
      'legal.copyright.description':
        'מידע על זכויות היוצרים של שירות האמבלברגר.',

      // Privacy Policy Page
      'privacy.title': 'מדיניות פרטיות',
      'privacy.lastUpdated': 'עודכן לאחרונה: 18 באפריל 2025',
      'privacy.intro':
        'בשירות האמבלברגר אנו מחויבים לשמירה על פרטיותך ולהבטחת אבטחת המידע האישי שלך. מדיניות פרטיות זו מתארת כיצד אנו אוספים, משתמשים ושומרים על המידע שאתה מספק בעת השימוש באתר ובשירותים שלנו.',

      'privacy.collect.title': 'המידע שאנו אוספים',
      'privacy.collect.content':
        'אנו עשויים לאסוף מידע אישי כגון שמך, כתובת האימייל והמיקום שלך כאשר אתה מוסר מידע זה מרצונך באתר, למשל בעת הרשמה לעלון שלנו או יצירת קשר איתנו. בנוסף, אנו אוספים באופן אוטומטי מידע מסוים על המכשיר שלך, כולל כתובת ה-IP, סוג הדפדפן ומערכת ההפעלה.',

      'privacy.use.title': 'כיצד אנו משתמשים במידע שלך',
      'privacy.use.intro': 'אנו משתמשים במידע שאנו אוספים לצורך:',
      'privacy.use.item1': 'מענה לפניותיך וסיפוק מידע על השירות שלנו',
      'privacy.use.item2':
        'שליחת עלון ועדכונים על הפעילויות שלנו (בכפוף להסכמתך)',
      'privacy.use.item3': 'שיפור האתר והשירותים שלנו',
      'privacy.use.item4': 'מילוי כל מטרה ספציפית שלשמה מסרת את המידע',

      'privacy.cookies.title': 'קובצי Cookie וטכנולוגיות מעקב',
      'privacy.cookies.content':
        'האתר שלנו משתמש בקובצי Cookie ובטכנולוגיות מעקב דומות כדי לשפר את חוויית הגלישה שלך ולאסוף מידע על השימוש שלך באתר. באפשרותך לנהל את העדפות ה-Cookie שלך דרך הגדרות הדפדפן.',

      'privacy.thirdParty.title': 'ספקי שירות חיצוניים',
      'privacy.thirdParty.content':
        'אנו עשויים לשתף את המידע שלך עם ספקי שירות חיצוניים מהימנים המסייעים לנו בהפעלת האתר, בניהול השירות או במתן שירות עבורך. צדדים שלישיים אלה מחויבים לשמור על סודיות המידע שלך.',

      'privacy.rights.title': 'הזכויות שלך',
      'privacy.rights.intro': 'ברשותך הזכות:',
      'privacy.rights.item1': 'לקבל גישה למידע האישי שאנו מחזיקים עליך',
      'privacy.rights.item2': 'לבקש תיקון של מידע לא מדויק',
      'privacy.rights.item3': 'לבקש מחיקה של המידע שלך',
      'privacy.rights.item4': 'לבקש להפסיק קבלת תקשורת מאיתנו',

      'privacy.children.title': 'פרטיות ילדים',
      'privacy.children.content':
        'האתר שלנו אינו מיועד לילדים מתחת לגיל 13. איננו אוספים ביודעין מידע אישי מילדים מתחת לגיל 13.',

      'privacy.changes.title': 'שינויים במדיניות פרטיות זו',
      'privacy.changes.content':
        'אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת כדי לשקף שינויים בנוהגינו או מסיבות תפעוליות, משפטיות או רגולטוריות אחרות. המדיניות המעודכנת תפורסם בדף זה עם תאריך "עודכן לאחרונה" חדש.',

      'privacy.contact.title': 'צור קשר',
      'privacy.contact.content':
        'אם יש לך שאלות או חששות בנוגע למדיניות הפרטיות שלנו, אנא צור קשר באמצעות',
      'privacy.contact.link': 'הטופס המקוון שלנו',

      // Encountering Messiah Page
      'encountering.title': 'מפגש עם המשיח: מסע ללבבות יהודיים',
      'encountering.subtitle':
        'שאלות עתיקות. מחפשים בני זמננו. תקווה אחת מובטחת.',
      'encountering.comingSoon': '(בקרוב)',

      'encountering.section1.title': '1. שאלות יסוד על ישוע',
      'encountering.section1.subtitle':
        'עובדות בסיסיות על חייו, מותו, תחייתו וזהותו',
      'encountering.section1.whoIsYeshua': 'מי הוא ישוע?',
      'encountering.section1.didYeshuaExist': 'האם ישוע באמת היה קיים?',
      'encountering.section1.wasYeshuaSinless': 'האם ישוע באמת היה ללא חטא?',
      'encountering.section1.wasYeshuaBornVirgin': 'האם ישוע נולד באמת מהעלמה?',
      'encountering.section1.didYeshuaDieCross': 'האם ישוע באמת מת על הצלב?',
      'encountering.section1.didYeshuaRise': 'האם ישוע באמת קם לתחייה מהמתים?',
      'encountering.section1.didYeshuaAscend': 'האם ישוע באמת עלה השמימה?',
      'encountering.section1.isYeshuaAlive': 'האם ישוע חי גם היום?',

      'encountering.section2.title': '2. המשיחיות בתנ"ך',
      'encountering.section2.subtitle': 'שאלות של זהות וציפייה משיחית',
      'encountering.section2.couldYeshuaBeMessiah':
        'האם ישוע יכול להיות המשיח שהתנ"ך ניבא עליו?',
      'encountering.section2.hasMessiahCome': 'האם ייתכן שהמשיח כבר בא?',
      'encountering.section2.whatWillMessiahDo':
        'מה כתבי הקודש אומרים שהמשיח יעשה?',
      'encountering.section2.whatDoesTanakhSay': 'מה אומר התנ"ך על המשיח?',

      'encountering.section3.title': '3. נבואות משיחיות והתגשמותן',
      'encountering.section3.subtitle': 'נבואות ספציפיות והתגשמותן בישוע',
      'encountering.section3.daniel9': "מה אומר דניאל ט' על מועד בוא המשיח?",
      'encountering.section3.isaiah53': 'למי או למה מתייחס ישעיהו נ"ג בתנ"ך?',
      'encountering.section3.jeremiah31':
        'מה אומר ירמיהו ל"א על "הברית החדשה" בתנ"ך?',
      'encountering.section3.fulfillsNotReplaces':
        'האם ישוע ממלא את כתבי הקודש במקום להחליפם?',
      'encountering.section3.redemption': 'מה מלמד התנ"ך על גאולה?',

      'encountering.section4.title': '4. כפרה, חטא וישועה',
      'encountering.section4.subtitle': 'כיצד פועלת הישועה: חטא, כפרה וחיי נצח',
      'encountering.section4.whatIsSin': 'מהו חטא?',
      'encountering.section4.sacrificeRole':
        'מה היה תפקיד הקורבן בכפרה בתורה וכיצד מתמודדים עם זה היום?',
      'encountering.section4.atonementWithoutTemple':
        'כיצד מבינים כיום כפרה ללא בית המקדש?',
      'encountering.section4.rightRelationship':
        'מה פירוש להיות בקשר נכון עם אלוהים?',
      'encountering.section4.whatToDoSaved': 'מה עליי לעשות כדי להיוושע?',
      'encountering.section4.becomeJewishChristian':
        'כיצד אוכל להפוך ליהודי מאמין בישוע?',
      'encountering.section4.goToHeaven': 'מה פירוש להגיע לגן עדן?',
      'encountering.section4.hellExists': 'האם גיהנום קיים?',

      'encountering.section5.title': '5. זהות יהודית ואמונה משיחית',
      'encountering.section5.subtitle':
        'יהודים מאמינים בישוע ושאלות יהודיות-נוצריות',
      'encountering.section5.jewishAndBelieve':
        'האם אפשר להיות יהודי ולהאמין בישוע?',
      'encountering.section5.whySomeBelieve':
        'מדוע יש יהודים שמאמינים בישוע כיום?',
      'encountering.section5.whySomeReject':
        'מדוע יש יהודים הדוחים את הרעיון שישוע הוא המשיח?',

      'encountering.section6.title': '6. שמירת תורה וחיים נוצריים',
      'encountering.section6.subtitle':
        'חוק, מצוות ואורח חייהם של יהודים משיחיים',
      'encountering.section6.all613Mitzvot': 'האם עליי לשמור את כל 613 המצוות?',
      'encountering.section6.keepKosher': 'האם יהודים משיחיים שומרים כשרות?',
      'encountering.section6.keepShabbat': 'האם יהודים משיחיים שומרים שבת?',

      'encountering.section7.title': '7. לפגוש את המשיח באופן אישי',
      'encountering.section7.subtitle': 'קשר אישי ומפגש רוחני',
      'encountering.section7.encounterYeshua':
        'כיצד אוכל לפגוש את ישוע באופן אישי כיום?',
      'encountering.section7.personalRelationship':
        'מה פירוש קשר אישי עם המשיח?',
      'encountering.section7.recognizeVoice':
        'כיצד אוכל לזהות את קול המשיח בחיי?',

      // Common
      'common.loading': 'טוען...',
      'common.error': 'אירעה שגיאה.',
      'common.back': 'חזרה',
      'common.home': 'בית',
      'common.contact': 'צור קשר',
      'common.blog': 'בלוג',
      'common.mission': 'שליחות',
      'common.donate': 'תרום',
      'common.copyright': 'זכויות יוצרים',
      'common.subscribe': 'הירשמו',
      'common.chat': "צ'אט",
      'common.returnTo': '← חזרה אל',
      'common.returnToHome': '← חזרה לבית',

      // Navigation
      'nav.antisemitism': 'הצהרה נגד אנטישמיות',
      'nav.encounteringMessiah': 'מפגש עם המשיח',
      'nav.shema': 'שמע ישראל',
      'nav.fromTrenches': 'מהשטח',
      'nav.whoIsYeshua': 'מי הוא ישוע?',
      'nav.countingCost': 'ספירת המחיר',

      // Buttons
      'button.donate': '❤️ תרמו',
      'button.subscribe': '📰 הירשמו',
      'button.chat': '💬 דברו איתנו',
      'button.clearSearch': 'נקה חיפוש',

      // Search
      'search.noResultsFor': 'לא נמצאו פוסטים עבור "{{searchTerm}}"',
      'search.resultsFound':
        'נמצאו {{count}} פוסט{{plural}} עבור "{{searchTerm}}"',

      // RSS
      'rss.subscribe': 'הירשמו להזנת RSS',

      // Page Titles
      'pageTitle.contact': 'צרו קשר - שירות האמבלברגר',
      'pageTitle.contactSuccess': 'ההודעה נשלחה! - שירות האמבלברגר',

      // Meta Descriptions
      'meta.contact':
        'צרו קשר עם שירות האמבלברגר. שלחו לנו הודעה דרך טופס יצירת הקשר שלנו.',

      // Organization Name
      'org.name': 'שירות\nהאמבלברגר',

      // URLs
      'urls.chat': 'https://tchat.humbleberger.org/he?translation=csb',
      'urls.newsletter':
        'https://mailchi.mp/2757d0257dda/humbleberger-ministries-he',
      'urls.donate': 'https://donorbox.org/humbleberger-ministries-he',
      'urls.synagogue': 'https://app.kehila.org/he/directory',
      'urls.twitter': 'https://x.com/humbleberger',
      'urls.bible': '/he/bible-viewer',
      'urls.contactForm': 'https://formspree.io/f/xnnvbwvz',

      // Internal URLs
      'urls.internal.blog': '/he/blog',
      'urls.internal.home': '/he',
      'urls.internal.contact': '/he/contact',
      'urls.internal.mission': '/he/mission',
      'urls.internal.encounteringMessiah': '/he/encountering-messiah',
      'urls.internal.countingCost': '/he/blog/counting-the-cost',
      'urls.internal.whoIsYeshua': '/he/blog/who-is-yeshua',
      'urls.internal.fromTrenches':
        '/he/blog/from-the-trenches-an-evangelism-guide',
      'urls.internal.shema': '/he/blog/yeshua-and-the-shema',
      'urls.internal.antisemitism': '/he/anti-semitism',
      'urls.internal.statementOfFaith': '/he/statement-of-faith',
      'urls.internal.privacyPolicy': '/he/privacy-policy',
      'urls.internal.termsOfUse': '/he/terms-of-use',
      'urls.internal.copyright': '/he/copyright',
      'urls.internal.rss': '/rss-he.xml',
      'urls.internal.contactSuccess': '/he/contact-success',

      // Internal URLs with parameters
      'urls.internal.countingCostFromHome':
        '/he/blog/counting-the-cost?from=home',
      'urls.internal.whoIsYeshuaFromHome': '/he/blog/who-is-yeshua?from=home',
      'urls.internal.fromTrenchesFromHome':
        '/he/blog/from-the-trenches-an-evangelism-guide?from=home',
      'urls.internal.shemaFromHome': '/he/blog/yeshua-and-the-shema?from=home',

      // Header URLs
      'urls.site': 'https://humbleberger.org',
      'urls.logo': 'https://humbleberger.org/logo.png',
      'urls.socialPreview': 'https://humbleberger.org/social-preview.png',

      // Person names
      'person.founder.name': 'דניאל גיי קרוס',
      'person.founder.email': 'shalom@humbleberger.org',

      // Common terms
      'common.rss': 'RSS',
      'common.fein.title': 'מספר זיהוי מעסיק',
      'common.fein.number': '33-4533201',

      // Anti-Semitism Page
      'antiSemitism.title': 'הצהרה נגד אנטישמיות - שירות האמבלברגר',
      'antiSemitism.heading': 'הצהרה נגד אנטישמיות, זהות יהודית ואהבת הבשורה',
      'antiSemitism.description':
        'הצהרת שירות האמבלברגר נגד אנטישמיות והמחויבות שלנו לאמת מקראית ולאהבה לעם היהודי.',
      'antiSemitism.intro':
        'כשירות המבוסס על בשורת ישוע המשיח ומחויב לישועה של העם היהודי והעמים, שירות האמבלברגר עומד בנחישות ובאופן בלתי מתפשר נגד כל צורות האנטישמיות, בעבר ובהווה, בין אם פוליטיות, תרבותיות, חברתיות או תאולוגיות.',

      'antiSemitism.section1.title': 'א. עמדת אהבה וכבוד',
      'antiSemitism.section1.content':
        'שירות האמבלברגר מחויב בכנות לכבד את העם היהודי כאהוב בהיסטוריה ובמורשת הגאולה של אלוהים. אנו מתאבלים על הדרכים שבהן סבלו הקהילות היהודיות לאורך ההיסטוריה, כולל עוולות שנעשו בשם הנצרות. כמאמינים בישוע, אנו נקראים ללכת בענווה ובאהבה — לא רק בתיאולוגיה, אלא גם באופן בו אנו נושאים ומעבירים את הבשורה.',

      'antiSemitism.section2.title': 'ב. כבוד לעם היהודי ולייעודם',
      'antiSemitism.section2.content':
        'אנו מכירים ושמחים בתפקיד הייחודי של העם היהודי בתכנית הגאולה של אלוהים. הבריתות, ההבטחות, האבות, הנביאים ובסופו של דבר המשיח באו דרכם (רומים ט:4–5). איננו מבקשים למחוק את הזהות או המורשת היהודית, אלא לאשר את המשמעות העמוקה שלה — באמונה שהביטוי המלא ביותר שלה נמצא בישוע, המשיח המובטח בכתבי הקודש העבריים.',

      'antiSemitism.section3.title': 'ג. משרד של הזמנה, לא כפייה',
      'antiSemitism.section3.content':
        'אנו מאמינים שישוע הוא המשיח של ישראל וגואל העולם. בכבוד עמוק, אנו מבקשים לשתף את הבשורה הטובה עם העם היהודי לא באמצעות לחץ או וויכוח, אלא באמצעות כתובים, תפילה, מערכת יחסים ועדות — תמיד מבוסס על אהבה ויראה.',

      'antiSemitism.section4.title': 'ד. מחויבות לגישור ויושרה',
      'antiSemitism.section4.content':
        'אנו מכירים בצורך של הכנסייה ללכת בענווה מול העם היהודי, להכיר בכשלונות העבר ולשאוף להיות גשר ולא מחסום. אנו עומדים נגד כל צורה של אנטישמיות — לא רק כרוע היסטורי, אלא כמשהו שסותר את לב האלוהים.',

      'antiSemitism.section5.title': 'ה. ליבנו לעם היהודי',
      'antiSemitism.section5.content':
        'רצוננו אינו לנצח ויכוחים אלא לשתף תקווה. אנו משתוקקים שכל יהודי יפגוש את המשיח שניבאו בכתבי הקודש שלהם — אותו שממלא את התורה והנביאים, מביא שלום עם האל, ומזמין את כל העם, יהודים וגויים, למשפחה גאולה אחת במשיח.',

      // Copyright Page
      'copyright.page.title': 'זכויות יוצרים - שירות האמבלברגר',
      'copyright.page.description':
        'מידע על זכויות היוצרים של שירות האמבלברגר.',
      'copyright.page.heading': 'הודעת זכויות יוצרים',
      'copyright.page.lastUpdated': 'עודכן לאחרונה: 18 באפריל 2025',

      'copyright.page.websiteContent.title': 'תוכן האתר',
      'copyright.page.websiteContent.text':
        '© {{year}} שירות האמבלברגר. כל הזכויות שמורות. התוכן באתר זה, לרבות אך לא מוגבל לטקסט, גרפיקה, לוגואים, תמונות, קטעי שמע, הורדות דיגיטליות ואיסופי נתונים, הוא רכושה של שירות האמבלברגר ומוגן על ידי חוקי זכויות יוצרים של ארצות הברית והחוק הבינלאומי.',

      'copyright.page.trademarks.title': 'סימני מסחר',
      'copyright.page.trademarks.text':
        'שם שירות האמבלברגר, הלוגו וכל השמות, הלוגואים, שמות המוצרים והשירותים, העיצובים והסיסמאות קשורים ושייכים לשירות האמבלברגר או לשותפיו. אין להשתמש בסימנים אלו ללא אישור בכתב מראש משירות האמבלברגר.',

      'copyright.page.biblicalContent.title': 'תוכן מקראי',
      'copyright.page.biblicalContent.csb':
        'ציטוטי כתבי הקודש המסומנים CSB® נלקחו מ-Christian Standard Bible®, זכויות יוצרים © 2017 על ידי Holman Bible Publishers. בשימוש בהיתר. Christian Standard Bible® ו-CSB® הם סימני מסחר רשומים של Holman Bible Publishers.',
      'copyright.page.biblicalContent.esv':
        'ציטוטי כתבי הקודש המסומנים ESV® הם מ-ESV® Bible (The Holy Bible, English Standard Version®), זכויות יוצרים © 2001 על ידי Crossway, משרד הוצאה לאור של Good News Publishers. בשימוש בהיתר. כל הזכויות שמורות.',
      'copyright.page.biblicalContent.niv':
        'ציטוטי כתבי הקודש המסומנים NIV® נלקחו מ-Holy Bible, New International Version®, NIV®. זכויות יוצרים © 1973, 1978, 1984, 2011 על ידי Biblica, Inc.™ בשימוש בהיתר של Zondervan. כל הזכויות שמורות בעולם. www.zondervan.com. "NIV" ו-"New International Version" הם סימני מסחר רשומים במשרד הפטנטים וסימני המסחר של ארצות הברית על ידי Biblica, Inc.™',

      'copyright.page.educationalUse.title': 'שימוש חינוכי ושליחותי',
      'copyright.page.educationalUse.text':
        'אנו מעודדים שימוש בחומרים שלנו למטרות חינוכיות ושליחות. ניתן להוריד ולהדפיס תוכן מהאתר שלנו לשימוש לא מסחרי, חינוכי, אישי או קהילתי, בכפוף לתנאים הבאים:',
      'copyright.page.educationalUse.rule1': 'לא לשנות את התוכן',
      'copyright.page.educationalUse.rule2':
        'לציין שיוך מתאים לשירות האמבלברגר',
      'copyright.page.educationalUse.rule3':
        'לא להסיר כל הודעות זכויות יוצרים או הודעות קניין רוחני אחרות',
      'copyright.page.educationalUse.rule4':
        'לא להשתמש בתוכן באופן שמרמז ששירות האמבלברגר מאשר את השימוש או את המשתמש',

      'copyright.page.permission.title': 'בקשות הרשאה',
      'copyright.page.permission.text':
        'להרשאות לשימוש בתוכן האתר מעבר לתחום המפורט לעיל, אנא צרו קשר באמצעות:',
      'copyright.page.permission.link': 'הטופס המקוון',
      'copyright.page.permission.contactText': 'צרו קשר באמצעות',

      'copyright.page.infringement.title': 'הפרת זכויות יוצרים',
      'copyright.page.infringement.text':
        'אם אתם סבורים שעבודתכם מוגנת בזכויות יוצרים שומשה באתר שלנו באופן המהווה הפרה, אנא ספקו לנו את המידע הבא:',
      'copyright.page.infringement.item1':
        'תיאור של העבודה המוגנת בזכויות יוצרים שלדעתכם הופרה',
      'copyright.page.infringement.item2':
        'תיאור של מיקום החומר החשוד כהפרה באתר שלנו',
      'copyright.page.infringement.item3':
        'פרטי יצירת קשר שלכם, כולל כתובת, מספר טלפון וכתובת אימייל',
      'copyright.page.infringement.item4':
        'הצהרה ממכם כי יש לכם אמונה טובה שהשימוש המפורש אינו מורשה על ידי בעל הזכויות, סוכנו או החוק',
      'copyright.page.infringement.item5':
        'הצהרה מכם, תחת עונש של שבועת שקר, שהמידע בהודעה הוא נכון ושהינכם בעלי הזכויות או מורשים לפעול מטעמם',
      'copyright.page.infringement.notice': 'הודעות כאלה יש לשלוח ל:',
      'copyright.page.infringement.contact':
        'שירות האמבלברגר\nלידיעת: נציג זכויות יוצרים\nצרו קשר באמצעות הטופס המקוון שלנו.',

      // Encountering Messiah URLs
      'urls.encountering.whoIsYeshua':
        '/he/blog/who-is-yeshua?from=encountering-messiah',
      'urls.encountering.didYeshuaExist':
        '/he/blog/did-yeshua-really-exist?from=encountering-messiah',
      'urls.encountering.wasYeshuaSinless':
        '/he/blog/was-yeshua-really-sinless?from=encountering-messiah',
      'urls.encountering.wasYeshuaBornVirgin':
        '/he/blog/was-yeshua-really-born-of-a-virgin?from=encountering-messiah',
      'urls.encountering.didYeshuaDieCross':
        '/he/blog/did-yeshua-really-die-on-a-cross?from=encountering-messiah',
      'urls.encountering.didYeshuaRise':
        '/he/blog/did-yeshua-really-rise-from-the-dead?from=encountering-messiah',
      'urls.encountering.didYeshuaAscend':
        '/he/blog/did-yeshua-really-ascend-into-heaven?from=encountering-messiah',
      'urls.encountering.isYeshuaAlive':
        '/he/blog/is-yeshua-still-alive-today?from=encountering-messiah',
      'urls.encountering.couldYeshuaBeMessiah':
        '/he/blog/could-yeshua-be-the-messiah?from=encountering-messiah',
      'urls.encountering.hasMessiahCome':
        '/he/blog/has-messiah-already-come?from=encountering-messiah',
      'urls.encountering.whatWillMessiahDo':
        '/he/blog/what-will-the-messiah-do?from=encountering-messiah',
      'urls.encountering.whatDoesTanakhSay':
        '/he/blog/what-does-the-tanakh-say-about-messiah?from=encountering-messiah',
      'urls.encountering.daniel9':
        '/he/blog/when-was-the-messiah-supposed-to-come?from=encountering-messiah',
      'urls.encountering.isaiah53':
        '/he/blog/who-is-the-suffering-servant?from=encountering-messiah',
      'urls.encountering.jeremiah31':
        '/he/blog/the-new-covenant-that-was-promised?from=encountering-messiah',
      'urls.encountering.fulfillsNotReplaces':
        '/he/blog/the-fulfillment-of-the-hebrew-scriptures?from=encountering-messiah',
      'urls.encountering.redemption':
        '/he/blog/redemption-in-the-hebrew-scriptures?from=encountering-messiah',
      'urls.encountering.whatIsSin':
        '/he/blog/what-is-sin?from=encountering-messiah',
      'urls.encountering.whatIsRedemption':
        '/he/blog/the-heart-of-atonement?from=encountering-messiah',
      'urls.encountering.atonementWithoutTemple':
        '/he/blog/atonement-without-the-temple?from=encountering-messiah',
      'urls.encountering.rightRelationshipWithGod':
        '/he/blog/right-relationship-with-god?from=encountering-messiah',
      'urls.encountering.whatToDoSaved':
        '/he/blog/what-must-i-do-to-be-saved?from=encountering-messiah',
      'urls.encountering.howToBecomeJewishChristian':
        '/he/blog/how-to-become-a-jewish-christian?from=encountering-messiah',
      'urls.encountering.howToGetToHeaven':
        '/he/blog/how-to-get-to-heaven?from=encountering-messiah',
      'urls.encountering.doesHellExist':
        '/he/blog/does-hell-exist?from=encountering-messiah',
      'urls.encountering.isItPossibleToBeJewishChristian':
        '/he/blog/is-it-possible-to-be-a-jewish-christian?from=encountering-messiah',
      'urls.encountering.whySomeJewsBelieve':
        '/he/blog/why-some-jews-believe?from=encountering-messiah',
      'urls.encountering.whySomeJewsReject':
        '/he/blog/why-some-jews-reject?from=encountering-messiah',
      'urls.encountering.whatAboutThe613Mitzvot':
        '/he/blog/what-about-the-613-mitzvot?from=encountering-messiah',
      'urls.encountering.whatAboutTheKosherLaws':
        '/he/blog/what-about-the-kosher-laws?from=encountering-messiah',
      'urls.encountering.whatAboutShabbat':
        '/he/blog/what-about-shabbat?from=encountering-messiah',
      'urls.encountering.howDoIMeetMessiah':
        '/he/blog/how-do-i-meet-messiah?from=encountering-messiah',
      'urls.encountering.howDoIFellowshipWithTheSpiritual':
        '/he/blog/how-do-i-fellowship-with-the-spirit?from=encountering-messiah',
      'urls.encountering.howToRecognizeGodsVoice':
        '/he/blog/how-to-recognize-gods-voice?from=encountering-messiah',

      // Mission Page
      'mission.title': 'השליחות שלנו',
      'mission.content':
        'שירות האמבלברגר קיים לכבוד האלוהים על ידי הכרזת בשורת ישוע המשיח, עם שליחות ממוקדת להביא את הבשורה הטובה לעם היהודי בערים ניו יורק ותל אביב. מושרש ברוחו של השליח פאולוס, השליחות שלנו היא לבשר, לתלמיד ולגדל מטיפים ומורים נאמנים לייסד ולרעות כנסיות ברחבי העולם. בעוד שהמוקד העיקרי שלנו הוא שליחות ליהודים, אנו עומדים במלואנו על המשלוח הגדול, ומבקשים להגיע לכל האובדים ולשרת את הכנסייה העולמית ככל שהאדון מוביל.',

      // Statement of Faith Page
      'statement.title': 'הצהרת אמונה',
      'statement.description':
        'אלו הן העקרונות המקראיים והאמונות התאולוגיות המנחות את שליחותנו.',

      'statement.item1.title': '1. הסמכות והאחדות של כתבי הקודש',
      'statement.item1.content':
        'אנו מאמינים שכל התנ"ך — הן הברית הישנה והן הברית החדשה — הוא דבר האלוהים המושפע, נטול הטעויות ובלתי ניתן לטעות. הוא הסמכות הסופית והמספקת בכל ענייני אמונה, דוקטרינה ומעשה. כתבי הקודש העבריים הם יסודיים ומצביעים ישירות על ישוע המשיח.',

      'statement.item2.title': '2. האל השלושה-אחד',
      'statement.item2.content':
        'אנו מאמינים באל אחד, הקיים לנצח בשלוש ישויות: האב, הבן ורוח הקודש. כל אחד מהם הוא אלוהים במלואו, שווה בכבוד, בכח ובמהות, אך נבדל בתפקיד וביחס.',

      'statement.item3.title': '3. האיש והמעשה של המשיח',
      'statement.item3.content':
        'ישוע המשיח, אלוהים במלואו ואדם במלואו, הוחדר על ידי רוח הקודש ונולד מבתולה. חי חיים נטולי חטא, מת מוות תחליפי על הצלב, קם לתחייה בגוף, וכעת שולט לימין האב. הישועה נמצאת בו בלבד.',

      'statement.item4.title': '4. הישועה בחסד דרך האמונה',
      'statement.item4.content':
        'הישועה היא בחסד בלבד, דרך האמונה בלבד, במשיח בלבד. זה כולל לידה מחדש, צדקה, קודש ותהילה. היא מתנת האלוהים החינמית ואינה ניתנת להשגה במעשים או במאמצים אנושיים.',

      'statement.item5.title': '5. הטבילה של המאמין בטבילה',
      'statement.item5.content':
        'אנו מאמינים שהטבילה מיועדת למאמינים בלבד, כהודעה פומבית של אמונה וצייתנות למשיח. היא בטבילה, המסמלת את האיחוד של המאמין עם המשיח במותו, בקברו ותחייתו. היא אינה מצילה, אך מצווה עליה ישוע לכל המאמינים בו.',

      'statement.item6.title': '6. הכנסייה',
      'statement.item6.content':
        'הכנסייה מורכבת מכל המאמינים האמיתיים במשיח. הכנסייה המקומית היא גוף עצמאי של מאמינים המטבלים ומחויבים לעבודה, לקהילה, ללימוד, לטקסים ולשליחות. ישוע המשיח הוא ראש הכנסייה.',

      'statement.item7.title': '7. מתנות רוחניות',
      'statement.item7.content':
        'אנו מאשרים את המשך הנוכחות והפעלת המתנות הרוחניות בכנסייה, כפי שמתואר בברית החדשה. אנו מאמינים שיש להשתמש במתנות אלה ברוח של ענווה, תחת סמכות כתבי הקודש ובהתאם לסדר ולמטרה הנלמדים בברית החדשה.',

      'statement.item8.title': '8. הדרכת רוח הקודש והחוויה האישית',
      'statement.item8.content':
        'אנו מאשרים את סמכות כתבי הקודש כעליונה אך גם מכירים בהדרכה האישית המתמשכת של רוח הקודש. חוויה המונחית ברוח היא קדושה ולגיטימית כאשר היא נשלטת על ידי כתבי הקודש, נשקלת בחכמה ומבוצעת בקהילה.',

      'statement.item9.title': '9. אנתרופולוגיה מקראית: מגדר וזהות',
      'statement.item9.content':
        'אנו מאשרים שכל בני האדם נבראו בצלם אלוהים עם כבוד ומעלת ערך טבעית. אנו מאמינים שאלוהים יצר בכוונה את האנושות כזכר ונקבה, וששניהם שווים בערך ונבדלים בתפקיד. אנו מאשרים שנישואין הם ברית קדושה בין גבר לאישה, שנועדה לשגשוג האנושי. אנו מחזיקים בקדושת החיים מרגע ההריון ועד המוות הטבעי, בביטחון בתכנית האלוהים לזהות ולמטרת האדם.',

      'statement.item10.title': '10. דוקטרינת האדם והטרנס-הומניזם',
      'statement.item10.content':
        'אנו מאשרים שהאנושות, שנבראה בצלם אלוהים, היא יצירה קדושה ובעלת מטרה. אנו מאמינים שניסיונות לשנות או לשפר את טבע האדם באמצעים טכנולוגיים, גנטיים או מלאכותיים עומדים בניגוד לכוונת אלוהים לזהות האדם ולכבודו. אנו מאשרים שערך האדם לא נמצא בשיפורים מלאכותיים, אלא בבריאה הנהדרת והמפוחדת על ידי בוראנו.',

      'statement.item11.title':
        '11. תכנית הגאולה של אלוהים ותקוות הבישור ליהודים',
      'statement.item11.content':
        'אנו מאמינים שתכנית הישועה של אלוהים, שנחשפה לאורך כתבי הקודש, תמיד הייתה בחסד דרך אמונה — ומתגשמת בישוע המשיח. במשיח, אלוהים מושך יחד יהודים וגויים לעם גאולה אחד, המאוחד ברוח ומושרש בהבטחות הברית החדשה. מתוך כבוד לפריוריטה של הבשורה "ליהודי ראשון" (רומים א:16), אנו מקבלים שליחות מיוחדת לשתף באהבה את הבשורה הטובה של ישוע עם העם היהודי ברחבי העולם, ומזמינים אותם לקבל את המשיח שניבאו בכתבי הקודש שלהם.',

      'statement.item12.title': '12. אהבה לעם היהודי והגשמת הבטחת אלוהים',
      'statement.item12.content':
        'אנו מאשרים את אהבת הברית המתמשכת של אלוהים לעם היהודי ומכירים במורשת הרוחנית העשירה שניתנה דרכם — האבות, הנביאים, כתבי הקודש, ובסופו של דבר המשיח. אנו מכבדים את הזהות היהודית כחלק מתכנית הגאולה של אלוהים ומאמינים שהבטחות כתבי הקודש העבריים מתגשמות בישוע, משיח ישראל. באמונה זו, אנו ניגשים לעם היהודי לא בלחץ או כפייה, אלא בענווה, בהכרת תודה ובתקווה — משתוקקים לשתף את הבשורה הטובה של ישוע ברחמים וכבוד עמוק.',

      'statement.item13.title': '13. אי-שייכות פוליטית',
      'statement.item13.content':
        'אנו כארגון איננו פוליטיים מטבענו. איננו מקדמים מפלגה או אידיאולוגיה כלשהי. אזרחותנו היא בשמים, ושליחותנו רוחנית: להכריז את הבשורה ולקדם את ממלכת המשיח.',

      'statement.item14.title': '14. מלחמה רוחנית',
      'statement.item14.content':
        'אנו מאשרים את המציאות של המלחמה הרוחנית. הבשורה מוקדמת בשטחי מחלוקת. אנו מצוידים בשריון האל המלא ומונחים ברוח לעמוד מול האויב ולקדם את הבשורה בכח ובאמת.',

      'statement.item15.title': '15. המשלוח הגדול ושליחות עולמית',
      'statement.item15.content':
        'אנו קיימים לעשות תלמידים מכל העמים, במיוחד העם היהודי. אנו מבשרים את הבשורה, מייסדים כנסיות, מלמדים מאמינים ומגדלים מנהיגים. אנו מאשרים את צו המשיח ללכת לכל העולם עד שכל עם ישמע. אנו פועלים על פי דפוס ההרחבה המקראי מהירושלים ליהודה, שומרון ולקצה הארץ (מעשי השליחים א:8), עובדים תחילה למען העם היהודי ואחר כך למען העמים. הבישור שלנו מושרש בכתבי הקודש, הן של הברית הישנה והן של הברית החדשה.',

      'statement.item16.title': '16. אמת וייחודיות הבשורה',
      'statement.item16.content':
        'אנו מאשרים שישוע הוא הדרך היחידה לאלוהים, ושהישועה נמצאת בו בלבד. אנו מאשרים את האמת המוחלטת והסמכות של דבר האל בכל הדורות. בעוד שאנו פועלים עם תרבויות שונות בענווה וחמלה, אנו נאחזים באמיתות הבלעדיות של הבשורה ללא פשרות.',

      'statement.item17.title': '17. עדות הכנסייה בעולם החילוני',
      'statement.item17.content':
        "אנו מאשרים את קיומו של אלוהים אישי, קדוש וריבוני, שברא ומחזק את כל הבריאה. אנו מאשרים שהדעת והחכמה האמיתית מתחילות ביראת ה', וכל השקפת עולם המכחישה את קיומו של אלוהים היא בסופו של דבר לא שלמה ורוחנית ריקה.",

      'statement.item18.title': '18. קדושת החיים',
      'statement.item18.content':
        'אנו מאשרים את קדושת כל החיים האנושיים מרגע ההריון ועד המוות הטבעי. כל אדם נושא את דמות האל וראוי לכבוד ולהגנה. אנו מאשרים שכל אדם, ללא קשר ליכולת, גיל או מצב חברתי, נברא ביראת כבוד ובפלא.',

      'statement.item19.title': '19. אחדות במהות, חופש בשוליים',
      'statement.item19.content':
        'איננו מתפלגים על נושאים משניים. אנו מכבדים דעות שונות בנושאים כמו בריאה, אחרית הימים, מתנות רוחניות ומערכות תאולוגיות כגון התאולוגיה הרפורמית. עם זאת, איננו מאשרים דיספנסציונליזם קלאסי, שכן אנו מאמינים שאלוהים יש עם אחד במשיח ישוע. אנו שואפים לאחדות בבשורה ולחסד בכל הדברים, כל עוד עמדות אלו שומרות על אי־טעויות וסמכות כתבי הקודש. לדוגמה, אנו מאשרים את המציאות ההיסטורית של אדם וחוה, כפי שישוע עצמו דיבר עליהם כאנשים אמיתיים (מתי י"ט:4–6).',

      'statement.item20.title': '20. האישור הסופי',
      'statement.item20.content':
        'אנו מאשרים דוקטרינות אלו לא כעקרון קר ויבש, אלא כהודאה חיה — קריאה להכריז את המשיח לכל העם, במיוחד לעם היהודי, בבהירות, בחמלה ובאומץ. אנו מתחייבים להיאחז באמת, לדרוש את דבר האל בזמנים טובים ורעים, וללכת לכל מקום שהאדון יוביל — מניו יורק ועד תל אביב — עד שכל ברך תכרע וכל לשון תודה שישוע המשיח הוא האדון, לכבוד אלוהים האב. אמן.',

      // Terms of Use Page
      'terms.title': 'תנאי שימוש',
      'terms.lastUpdated': 'עודכן לאחרונה: 18 באפריל 2025',
      'terms.intro':
        'ברוכים הבאים לאתר שירות האמבלברגר. בשימוש באתר זה, אתה מסכים להיות כפוף לתנאי השימוש הללו. אנא קרא אותם בעיון.',

      'terms.acceptance.title': 'קבלת התנאים',
      'terms.acceptance.content':
        'בשימוש ובגישה לאתר זה, אתה מקבל ומסכים להיות כפוף לתנאי השימוש הללו, למדיניות הפרטיות שלנו, וכל מדיניות אחרת שפורסמה באתר. אם אינך מסכים לתנאים אלה, אנא אל תשתמש באתר.',

      'terms.content.title': 'שימוש בתוכן',
      'terms.content.content':
        'התוכן באתר שלנו, לרבות אך לא מוגבל לטקסט, גרפיקה, לוגואים, תמונות, קטעי שמע ותוכנה, הוא בבעלות או ברישיון שירות האמבלברגר ומוגן בזכויות יוצרים ובחוקי קניין רוחני אחרים. מותר לך לצפות בתוכן לשימוש אישי ולא מסחרי בלבד. אין להעתיק, להפיץ, לשנות, ליצור יצירות נגזרות, להציג בפומבי או לנצל כל תוכן מהאתר ללא אישור בכתב מראש.',

      'terms.conduct.title': 'התנהגות המשתמש',
      'terms.conduct.intro': 'בשימוש באתר שלנו, אתה מסכים שלא:',
      'terms.conduct.item1': 'להפר כל חוק או תקנה רלוונטיים',
      'terms.conduct.item2': 'להפר זכויות של אחרים',
      'terms.conduct.item3':
        'להשתמש באתר באופן שעלול להשבית, להעמיס יתר על המידה או לפגוע באתר',
      'terms.conduct.item4': 'לנסות להשיג גישה לא מורשית לכל חלק באתר',
      'terms.conduct.item5': 'להשתמש באתר להעברת תוכנות או קודים מזיקים',
      'terms.conduct.item6':
        'לעסוק בהתנהגות המגבילה או מונעת שימוש של אחרים באתר',

      'terms.links.title': 'קישורים לאתרים צד שלישי',
      'terms.links.content':
        'באתר שלנו ייתכן שיש קישורים לאתרים צד שלישי. קישורים אלה מסופקים לנוחותך בלבד. אין לנו שליטה על תוכנם ואיננו אחראים להם או לכל נזק שייגרם משימושך בהם. הכללת קישור לאתר צד שלישי אינה מהווה המלצה מצידנו.',

      'terms.userContent.title': 'תוכן שנוצר על ידי משתמשים',
      'terms.userContent.content':
        'אם תשלח תוכן לאתר שלנו, כולל תגובות או משוב, אתה מעניק לשירות האמבלברגר רישיון בלתי בלעדי, חופשי מתמלוגים, לתקופה בלתי מוגבלת ולעולם כולו להשתמש, לשכפל, לשנות, להתאים, לפרסם, לתרגם ולהפיץ תוכן זה בכל מדיה. אתה מצהיר שיש לך את הזכות להעניק רישיון זה.',

      'terms.disclaimer.title': 'כתב ויתור על אחריות',
      'terms.disclaimer.content':
        'האתר והתוכן בו מסופקים "כמו שהם" ו"כפי שהם זמינים" ללא אחריות מכל סוג, מפורשת או משתמעת. איננו מתחייבים שהאתר יהיה ללא הפרעות או שגיאות, שהפגמים יתוקנו, או שהאתר או השרתים יהיו נקיים מוירוסים או רכיבים מזיקים אחרים.',

      'terms.liability.title': 'הגבלת אחריות',
      'terms.liability.content':
        'במידה המרבית המותרת על פי החוק, שירות האמבלברגר לא יהיה אחראי לנזקים עקיפים, מקריים, מיוחדים, נזקים נסיבתיים או עונשיים, כולל אובדן רווחים, נתונים או שימוש, הנובעים או קשורים לשימושך באתר.',

      'terms.indemnification.title': 'פיצוי',
      'terms.indemnification.content':
        'אתה מסכים לפצות, להגן ולהחזיק חסרי פגיעה את שירות האמבלברגר, עובדיו, מנהליו, סוכניו ושותפיו מכל טענה, אחריות, נזק, הפסד, עלות, הוצאה או תשלום (כולל שכר טרחה סבירים) הנובעים משימושך באתר או מהפרת תנאי השימוש הללו.',

      'terms.changes.title': 'שינויים בתנאים',
      'terms.changes.content':
        'אנו שומרים לעצמנו את הזכות לשנות את תנאי השימוש בכל עת. שינויים ייכנסו לתוקף מיד עם פרסום תנאי השימוש המעודכנים באתר. השימוש המתמשך באתר לאחר פרסום השינויים מהווה הסכמתך להם.',

      'terms.governing.title': 'חוק חל',
      'terms.governing.content':
        'תנאי השימוש הללו ינוהלו ויפורשו בהתאם לחוקי מדינת צפון קרוליינה, ללא התייחסות לסתירות בחוק.',

      'terms.contact.title': 'צור קשר',
      'terms.contact.content':
        'אם יש לך שאלות בנוגע לתנאי השימוש הללו, אנא צור קשר באמצעות',
      'terms.contact.link': 'הטופס המקוון שלנו',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;

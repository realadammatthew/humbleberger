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
      
      // Privacy Policy Page
      'privacy.title': 'Privacy Policy',
      'privacy.lastUpdated': 'Last Updated: April 18, 2025',
      'privacy.intro': 'At Humbleberger Ministries, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our website and services.',
      
      'privacy.collect.title': 'Information We Collect',
      'privacy.collect.content': 'We may collect personal information such as your name, email address, and location when you voluntarily submit this information through our website, such as when signing up for our newsletter or contacting us. Additionally, we automatically collect certain information about your device, including your IP address, browser type, and operating system.',
      
      'privacy.use.title': 'How We Use Your Information',
      'privacy.use.intro': 'We use the information we collect to:',
      'privacy.use.item1': 'Respond to your inquiries and provide you with information about our ministry',
      'privacy.use.item2': 'Send you our newsletter and updates about our activities (with your consent)',
      'privacy.use.item3': 'Improve our website and services',
      'privacy.use.item4': 'Fulfill any specific purpose for which you provided the information',
      
      'privacy.cookies.title': 'Cookies and Tracking Technologies',
      'privacy.cookies.content': 'Our website uses cookies and similar tracking technologies to improve your browsing experience and collect information about how you use our site. You can manage your cookie preferences through your browser settings.',
      
      'privacy.thirdParty.title': 'Third-Party Service Providers',
      'privacy.thirdParty.content': 'We may share your information with trusted third-party service providers who assist us in operating our website, conducting our ministry, or servicing you. These third parties are obligated to keep your information confidential.',
      
      'privacy.rights.title': 'Your Rights',
      'privacy.rights.intro': 'You have the right to:',
      'privacy.rights.item1': 'Access the personal information we hold about you',
      'privacy.rights.item2': 'Request correction of inaccurate information',
      'privacy.rights.item3': 'Request deletion of your information',
      'privacy.rights.item4': 'Opt-out of receiving communications from us',
      
      'privacy.children.title': 'Children\'s Privacy',
      'privacy.children.content': 'Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.',
      
      'privacy.changes.title': 'Changes to This Privacy Policy',
      'privacy.changes.content': 'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on this page with a revised "Last Updated" date.',
      
      'privacy.contact.title': 'Contact Us',
      'privacy.contact.content': 'If you have any questions or concerns about our Privacy Policy, please contact us using our',
      'privacy.contact.link': 'online form',
      
      // Encountering Messiah Page
      'encountering.title': 'Encountering Messiah: A Journey for Jewish Hearts',
      'encountering.subtitle': 'Ancient questions. Modern seekers. One promised hope.',
      'encountering.comingSoon': '(Coming Soon)',
      
      'encountering.section1.title': '1. FOUNDATIONAL QUESTIONS ABOUT YESHUA',
      'encountering.section1.subtitle': 'Basic facts about His life, death, resurrection, and identity',
      'encountering.section1.whoIsYeshua': 'Who is Yeshua?',
      'encountering.section1.didYeshuaExist': 'Did Yeshua really exist?',
      'encountering.section1.wasYeshuaSinless': 'Was Yeshua really sinless?',
      'encountering.section1.wasYeshuaBornVirgin': 'Was Yeshua really born of a virgin?',
      'encountering.section1.didYeshuaDieCross': 'Did Yeshua really die on a cross?',
      'encountering.section1.didYeshuaRise': 'Did Yeshua really rise from the dead?',
      'encountering.section1.didYeshuaAscend': 'Did Yeshua really ascend into heaven?',
      'encountering.section1.isYeshuaAlive': 'Is Yeshua still alive today?',
      
      'encountering.section2.title': '2. MESSIAHSHIP IN THE HEBREW BIBLE',
      'encountering.section2.subtitle': 'Questions of identity & messianic expectation',
      'encountering.section2.couldYeshuaBeMessiah': 'Could Yeshua be the Messiah prophesied in the Hebrew Bible?',
      'encountering.section2.hasMessiahCome': 'Is it possible that the Messiah has already come?',
      'encountering.section2.whatWillMessiahDo': 'What do the Hebrew Scriptures say the Messiah will do?',
      'encountering.section2.whatDoesTanakhSay': 'What does the Tanakh say about the Messiah?',
      
      'encountering.section3.title': '3. MESSIANIC PROPHECY & FULFILLMENT',
      'encountering.section3.subtitle': 'Specific prophecies and fulfillment in Yeshua',
      'encountering.section3.daniel9': 'What does Daniel 9 say about when the Messiah would come?',
      'encountering.section3.isaiah53': 'Who or what is Isaiah 53 referring to in the Hebrew Bible?',
      'encountering.section3.jeremiah31': 'What does Jeremiah 31 say about the \'New Covenant\' in the Hebrew Bible?',
      'encountering.section3.fulfillsNotReplaces': 'Are there ways that Yeshua fulfills, rather than replaces, the Hebrew Scriptures?',
      'encountering.section3.redemption': 'What does the Hebrew Bible teach about redemption?',
      
      'encountering.section4.title': '4. ATONEMENT, SIN, AND SALVATION',
      'encountering.section4.subtitle': 'How salvation works; sin, atonement, afterlife',
      'encountering.section4.whatIsSin': 'What is sin?',
      'encountering.section4.sacrificeRole': 'What role did sacrifice play in atonement in the Torah, and how is it handled today?',
      'encountering.section4.atonementWithoutTemple': 'How do you understand atonement today without the Temple?',
      'encountering.section4.rightRelationship': 'What does it mean to be in right relationship with God?',
      'encountering.section4.whatToDoSaved': 'What do I need to do to be saved?',
      'encountering.section4.becomeJewishChristian': 'How do I become a Jewish Christian?',
      'encountering.section4.goToHeaven': 'What does it mean to go to heaven?',
      'encountering.section4.hellExists': 'Does hell exist?',
      
      'encountering.section5.title': '5. JEWISH IDENTITY & MESSIANIC FAITH',
      'encountering.section5.subtitle': 'Jewish believers in Yeshua and Jewish-Christian questions',
      'encountering.section5.jewishAndBelieve': 'Can someone be Jewish and believe in Yeshua?',
      'encountering.section5.whySomeBelieve': 'Why do some Jewish people believe in Yeshua today?',
      'encountering.section5.whySomeReject': 'Why do some Jewish people reject the idea of Yeshua as Messiah?',
      
      'encountering.section6.title': '6. TORAH OBSERVANCE & CHRISTIAN PRACTICE',
      'encountering.section6.subtitle': 'Law, mitzvot, and how Jewish Christians live',
      'encountering.section6.all613Mitzvot': 'Do I need to follow all 613 mitzvot?',
      'encountering.section6.keepKosher': 'Do Jewish Christians keep kosher?',
      'encountering.section6.keepShabbat': 'Do Jewish Christians keep Shabbat?',
      
      'encountering.section7.title': '7. MEETING THE MESSIAH PERSONALLY',
      'encountering.section7.subtitle': 'Personal relationship and spiritual encounter',
      'encountering.section7.encounterYeshua': 'How can I personally encounter Yeshua today?',
      'encountering.section7.personalRelationship': 'What does it mean to have a personal relationship with the Messiah?',
      'encountering.section7.recognizeVoice': 'How can I recognize the voice of the Messiah in my life?',
      
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
      
      // Encountering Messiah URLs
      'urls.encountering.whoIsYeshua': '/blog/who-is-yeshua?from=encountering-messiah',
      'urls.encountering.didYeshuaExist': '/blog/did-yeshua-really-exist?from=encountering-messiah',
      'urls.encountering.wasYeshuaSinless': '/blog/was-yeshua-really-sinless?from=encountering-messiah',
      'urls.encountering.wasYeshuaBornVirgin': '/blog/was-yeshua-really-born-of-a-virgin?from=encountering-messiah',
      'urls.encountering.didYeshuaDieCross': '/blog/did-yeshua-really-die-on-a-cross?from=encountering-messiah',
      'urls.encountering.didYeshuaRise': '/blog/did-yeshua-really-rise-from-the-dead?from=encountering-messiah',
      'urls.encountering.didYeshuaAscend': '/blog/did-yeshua-really-ascend-into-heaven?from=encountering-messiah',
      'urls.encountering.isYeshuaAlive': '/blog/is-yeshua-still-alive-today?from=encountering-messiah',
      'urls.encountering.couldYeshuaBeMessiah': '/blog/could-yeshua-be-the-messiah?from=encountering-messiah',
      'urls.encountering.hasMessiahCome': '/blog/has-messiah-already-come?from=encountering-messiah',
      'urls.encountering.whatWillMessiahDo': '/blog/what-will-the-messiah-do?from=encountering-messiah',
      'urls.encountering.whatIsSin': '/blog/what-is-sin?from=encountering-messiah',
      
      // Mission Page
      'mission.title': 'Our Mission',
      'mission.content': 'Humbleberger Ministries exists to glorify God by proclaiming the gospel of Jesus Christ, with a focused calling to bring the good news to the Jewish people in cities like New York and Tel Aviv. Rooted in the spirit of the Apostle Paul, our mission is to evangelize, disciple, and raise up faithful preachers and teachers to plant and shepherd churches across the globe. While our primary focus is Jewish missions, we stand fully on the Great Commission, seeking to reach all the lost and serve the global Church as the Lord leads.',
      
      // Statement of Faith Page
      'statement.title': 'Statement of Faith',
      'statement.description': 'These are the biblical principles and theological beliefs that guide our ministry.',
      
      'statement.item1.title': '1. Authority and Unity of Scripture',
      'statement.item1.content': 'We believe that all Scripture - both Old and New Testaments - is the inspired, inerrant, and infallible Word of God. It is the final and sufficient authority in all matters of faith, doctrine, and practice. The Hebrew Scriptures are foundational and point directly to the Messiah, Yeshua the Messiah.',
      
      'statement.item2.title': '2. The Triune God',
      'statement.item2.content': 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. Each is fully God, equal in glory, power, and essence, yet distinct in role and relationship.',
      
      'statement.item3.title': '3. Person and Work of Christ',
      'statement.item3.content': 'Yeshua the Messiah, fully God and fully man, was conceived by the Holy Spirit and born of a virgin. He lived a sinless life, died a substitutionary death on the cross, rose bodily from the dead, and now reigns at the right hand of the Father. Salvation is found in Him alone.',
      
      'statement.item4.title': '4. Salvation by Grace Through Faith',
      'statement.item4.content': 'Salvation is by grace alone, through faith alone, in Christ alone. This includes regeneration, justification, sanctification, and glorification. It is a free gift from God and cannot be earned by works or human effort.',
      
      'statement.item5.title': '5. Believer\'s Baptism by Immersion',
      'statement.item5.content': 'We believe baptism is for believers only, as a public declaration of faith and obedience to Christ. It is done by immersion in water, symbolizing the believer\'s union with Christ in His death, burial, and resurrection. It does not save but is commanded by Yeshua for all who follow Him.',
      
      'statement.item6.title': '6. The Church',
      'statement.item6.content': 'The church consists of all true believers in Christ. The local church is an autonomous body of baptized believers committed to worship, fellowship, teaching, ordinances, and mission. Christ is the head of the church.',
      
      'statement.item7.title': '7. Spiritual Gifts',
      'statement.item7.content': 'We affirm the ongoing presence and operation of spiritual gifts within the church as described in the New Testament. We believe these gifts should be exercised in a spirit of humility, under the authority of Scripture, and in accordance with the order and purpose taught in the New Testament.',
      
      'statement.item8.title': '8. Holy Spirit Guidance and Personal Experience',
      'statement.item8.content': 'We affirm the supreme authority of Scripture while also recognizing the Holy Spirit\'s ongoing personal guidance. Spirit-led experience is sacred and legitimate when it submits to Scripture, is tested by wisdom, and is practiced in community.',
      
      'statement.item9.title': '9. Biblical Anthropology: Gender and Identity',
      'statement.item9.content': 'We affirm that all people are created by God in His image with inherent dignity and worth. We believe God intentionally created humanity as male and female, both equal in value and distinct in role. We affirm that marriage is a sacred covenant between one man and one woman, designed by God for human flourishing. We uphold the sanctity of life from conception to natural death, trusting in God\'s good design for human identity and purpose.',
      
      'statement.item10.title': '10. Doctrine of Humanity and Transhumanism',
      'statement.item10.content': 'We affirm that humanity, created in the image of God, is a sacred and purposeful design. We believe attempts to alter or enhance human nature through technological, genetic, or artificial means oppose God\'s intent for human identity and dignity. We affirm that human worth is not found in artificial enhancements, but in being fearfully and wonderfully made by our Creator.',
      
      'statement.item11.title': '11. God\'s Redemptive Plan and Jewish Evangelism Hope',
      'statement.item11.content': 'We believe God\'s salvation plan, revealed throughout all Scripture, has always been by grace through faith - and fulfilled in Yeshua, the Messiah. In Christ, God draws both Jews and Gentiles into one redeemed people, united by the Spirit and anchored in New Covenant promises. Out of honoring the gospel\'s "to the Jew first" priority (Romans 1:16), we embrace a special calling to lovingly share the good news of Yeshua with Jewish people worldwide, inviting them to receive the Messiah prophesied in their Scriptures.',
      
      'statement.item12.title': '12. Love for the Jewish People and Fulfillment of God\'s Promise',
      'statement.item12.content': 'We affirm God\'s eternal covenant love for the Jewish people and recognize the rich spiritual heritage given through them - the patriarchs, prophets, Scriptures, and ultimately the Messiah. We honor Jewish identity as part of God\'s redemptive plan and believe the promises of the Hebrew Scriptures find their fulfillment in Yeshua, the Messiah of Israel. In this faith, we approach the Jewish people not with pressure or coercion, but with humility, gratitude, and hope - longing to share the good news of Yeshua with deep compassion and respect.',
      
      'statement.item13.title': '13. Non-Political Affiliation',
      'statement.item13.content': 'We as an organization are non-political in nature. We do not promote any political party or ideology. Our citizenship is in heaven, and our mission is spiritual: to proclaim the gospel and advance the kingdom of Christ.',
      
      'statement.item14.title': '14. Spiritual Warfare',
      'statement.item14.content': 'We affirm the reality of spiritual warfare. The gospel is proclaimed in contested territory. We are equipped with the full armor of God and empowered by the Spirit to resist the enemy and advance the gospel in power and truth.',
      
      'statement.item15.title': '15. The Great Commission and Global Missions',
      'statement.item15.content': 'We exist to make disciples of all nations, and especially of the Jewish people. We proclaim the gospel, plant churches, disciple believers, and establish leaders. We affirm Christ\'s command to go to all the world until every people group has heard. We follow the biblical pattern of gospel spread from Jerusalem to Judea, to Samaria, and to the ends of the earth (Acts 1:8), laboring first for the Jewish people and then for the nations. Our evangelism is grounded in Scripture, both Old and New Testaments.',
      
      'statement.item16.title': '16. Truth and Exclusivity of the Gospel',
      'statement.item16.content': 'We affirm that Yeshua is the only way to God, and that salvation is found in Him alone. We affirm the absolute truth and authority of God\'s Word across all generations. While we communicate with diverse cultures in humility and compassion, we hold to the exclusive truth of the gospel without compromise.',
      
      'statement.item17.title': '17. Church Witness in a Secular World',
      'statement.item17.content': 'We affirm the existence of a personal, holy, and sovereign God who created and sustains all things. We affirm that true knowledge and wisdom begin with the fear of the Lord, and that any worldview that denies God\'s existence is ultimately incomplete and spiritually bankrupt.',
      
      'statement.item18.title': '18. Sanctity of Life',
      'statement.item18.content': 'We affirm the sanctity of all human life from conception to natural death. Every person bears the image of God and deserves respect and protection. We affirm that all people, regardless of ability, age, or social status, are fearfully and wonderfully made.',
      
      'statement.item19.title': '19. Unity in Essentials, Liberty in Non-Essentials',
      'statement.item19.content': 'We do not divide over secondary issues. We respect diverse views on creation, eschatology, spiritual gifts, and theological systems like Reformed theology. However, we do not affirm classical dispensationalism, as we believe God has one people in Christ. We strive for unity in the gospel and grace in all things, provided these positions uphold the inerrancy and authority of Scripture. We affirm, for example, the historical reality of Adam and Eve, as Yeshua Himself spoke of them as real persons (Matthew 19:4-6).',
      
      'statement.item20.title': '20. Final Affirmation',
      'statement.item20.content': 'We believe that Scripture alone is the supreme authority, that salvation is by grace alone through faith alone in Christ alone, for the glory of God alone.',
      
      // Terms of Use Page
      'terms.title': 'Terms of Use',
      'terms.lastUpdated': 'Last Updated: April 18, 2025',
      'terms.intro': 'Welcome to the Humbleberger Ministries website. By accessing or using our website, you agree to be bound by these Terms of Use. Please read them carefully.',
      
      'terms.acceptance.title': 'Acceptance of Terms',
      'terms.acceptance.content': 'By accessing and using this website, you accept and agree to be bound by these Terms of Use, our Privacy Policy, and any other policies that may be published on our website. If you do not agree to these terms, please do not use our website.',
      
      'terms.content.title': 'Use of Content',
      'terms.content.content': 'The content on our website, including but not limited to text, graphics, logos, images, audio clips, and software, is owned by or licensed to Humbleberger Ministries and is protected by copyright and other intellectual property laws. You may access and view the content for personal, non-commercial use only. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our website without our prior written permission.',
      
      'terms.conduct.title': 'User Conduct',
      'terms.conduct.intro': 'When using our website, you agree not to:',
      'terms.conduct.item1': 'Violate any applicable laws or regulations',
      'terms.conduct.item2': 'Infringe upon the rights of others',
      'terms.conduct.item3': 'Use our website in any manner that could disable, overburden, or impair the site',
      'terms.conduct.item4': 'Attempt to gain unauthorized access to any part of our website',
      'terms.conduct.item5': 'Use our website to transmit any malicious software or code',
      'terms.conduct.item6': 'Engage in any conduct that restricts or inhibits anyone\'s use of our website',
      
      'terms.links.title': 'Links to Third-Party Websites',
      'terms.links.content': 'Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of these websites and accept no responsibility for them or for any loss or damage that may arise from your use of them. The inclusion of a link to a third-party website does not imply our endorsement of that website.',
      
      'terms.userContent.title': 'User-Generated Content',
      'terms.userContent.content': 'If you submit any content to our website, including comments or feedback, you grant Humbleberger Ministries a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, adapt, publish, translate, and distribute such content in any media. You represent that you have the right to grant such a license.',
      
      'terms.disclaimer.title': 'Disclaimer of Warranties',
      'terms.disclaimer.content': 'Our website and its content are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that our website or the servers that make it available are free of viruses or other harmful components.',
      
      'terms.liability.title': 'Limitation of Liability',
      'terms.liability.content': 'To the fullest extent permitted by applicable law, Humbleberger Ministries shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of or in connection with your use of our website.',
      
      'terms.indemnification.title': 'Indemnification',
      'terms.indemnification.content': 'You agree to indemnify, defend, and hold harmless Humbleberger Ministries and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys\' fees) arising from your use of our website or your violation of these Terms of Use.',
      
      'terms.changes.title': 'Changes to Terms',
      'terms.changes.content': 'We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting the revised Terms of Use on our website. Your continued use of our website after the posting of revised Terms of Use constitutes your acceptance of such changes.',
      
      'terms.governing.title': 'Governing Law',
      'terms.governing.content': 'These Terms of Use shall be governed by and construed in accordance with the laws of the State of North Carolina, without regard to its conflict of law provisions.',
      
      'terms.contact.title': 'Contact Us',
      'terms.contact.content': 'If you have any questions about these Terms of Use, please contact us using our',
      'terms.contact.link': 'online form',
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
      
      // Privacy Policy Page
      'privacy.title': 'מדיניות פרטיות',
      'privacy.lastUpdated': 'עודכן לאחרונה: 18 באפריל 2025',
      'privacy.intro': 'במשרדי האמבלברגר, אנו מחויבים להגן על פרטיותך ולהבטיח את אבטחת המידע האישי שלך. מדיניות פרטיות זו מתארת כיצד אנו אוספים, משתמשים ושומרים על המידע שאתה מספק בעת השימוש באתר ובשירותים שלנו.',
      
      'privacy.collect.title': 'המידע שאנו אוספים',
      'privacy.collect.content': 'אנו עשויים לאסוף מידע אישי כגון שמך, כתובת הדואר האלקטרוני שלך ומיקומך כאשר אתה מוסר מידע זה מרצונך דרך אתר האינטרנט שלנו, למשל בעת הרשמה לניוזלטר שלנו או יצירת קשר עמנו. בנוסף, אנו אוספים באופן אוטומטי מידע מסוים על מכשירך, כולל כתובת ה-IP שלך, סוג הדפדפן ומערכת ההפעלה.',
      
      'privacy.use.title': 'כיצד אנו משתמשים במידע שלך',
      'privacy.use.intro': 'אנו משתמשים במידע שאנו אוספים כדי:',
      'privacy.use.item1': 'להשיב לפניותיך ולספק לך מידע על שירותנו',
      'privacy.use.item2': 'לשלוח לך את הניוזלטר שלנו ועדכונים על פעילויותינו (כמתך)',
      'privacy.use.item3': 'לשפר את האתר והשירותים שלנו',
      'privacy.use.item4': 'למלא כל מטרה ספציפית שלשמה סיפקת את המידע',
      
      'privacy.cookies.title': 'עוגיות וטכנולוגיות מעקב',
      'privacy.cookies.content': 'האתר שלנו משתמש בעוגיות ובטכנולוגיות מעקב דומות כדי לשפר את חווית הגלישה שלך ולאסוף מידע על אופן השימוש שלך באתר שלנו. באפשרותך לנהל את העדפות העוגיות שלך דרך הגדרות הדפדפן שלך.',
      
      'privacy.thirdParty.title': 'ספקי שירות של צד שלישי',
      'privacy.thirdParty.content': 'אנו עשויים לחלוק את המידע שלך עם ספקי שירות מהימנים של צד שלישי המסייעים לנו בתפעול האתר שלנו, בניהול שירותנו או במתן שירות לך. צדדים שלישיים אלה מחויבים לשמור על סודיות המידע שלך.',
      
      'privacy.rights.title': 'זכויותיך',
      'privacy.rights.intro': 'יש לך את הזכות:',
      'privacy.rights.item1': 'לגשת למידע האישי שאנו מחזיקים עליך',
      'privacy.rights.item2': 'לבקש תיקון של מידע לא מדויק',
      'privacy.rights.item3': 'לבקש מחיקה של המידע שלך',
      'privacy.rights.item4': 'לבטל את הסכמתך לקבלת תקשורת מאיתנו',
      
      'privacy.children.title': 'פרטיות ילדים',
      'privacy.children.content': 'האתר שלנו אינו מיועד לילדים מתחת לגיל 13. איננו אוספים ביודעין מידע אישי מילדים מתחת לגיל 13.',
      
      'privacy.changes.title': 'שינויים במדיניות פרטיות זו',
      'privacy.changes.content': 'אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת כדי לשקף שינויים בפרקטיקות שלנו או מסיבות תפעוליות, משפטיות או רגולטוריות אחרות. המדיניות המעודכנת תפורסם בעמוד זה עם תאריך "עודכן לאחרונה" מתוקן.',
      
      'privacy.contact.title': 'צור קשר',
      'privacy.contact.content': 'אם יש לך שאלות או חששות לגבי מדיניות הפרטיות שלנו, אנא צור עמנו קשר באמצעות',
      'privacy.contact.link': 'הטופס המקוון שלנו',
      
      // Encountering Messiah Page
      'encountering.title': 'פגישה עם המשיח: מסע ללבבות יהודיים',
      'encountering.subtitle': 'שאלות עתיקות. מחפשים מודרניים. תקווה אחת מובטחת.',
      'encountering.comingSoon': '(בקרוב)',
      
      'encountering.section1.title': '1. שאלות יסודיות על ישוע',
      'encountering.section1.subtitle': 'עובדות בסיסיות על חייו, מותו, תחייתו וזהותו',
      'encountering.section1.whoIsYeshua': 'מי הוא ישוע?',
      'encountering.section1.didYeshuaExist': 'האם ישוע באמת היה קיים?',
      'encountering.section1.wasYeshuaSinless': 'האם ישוע היה באמת ללא חטא?',
      'encountering.section1.wasYeshuaBornVirgin': 'האם ישוע נולד באמת מבתולה?',
      'encountering.section1.didYeshuaDieCross': 'האם ישוע באמת מת על צלב?',
      'encountering.section1.didYeshuaRise': 'האם ישוע באמת קם מהמתים?',
      'encountering.section1.didYeshuaAscend': 'האם ישוע באמת עלה לשמיים?',
      'encountering.section1.isYeshuaAlive': 'האם ישוע עדיין חי היום?',
      
      'encountering.section2.title': '2. משיחיות בתנ"ך',
      'encountering.section2.subtitle': 'שאלות זהות וציפייה משיחית',
      'encountering.section2.couldYeshuaBeMessiah': 'האם ישוע יכול להיות המשיח שנחזה בתנ"ך?',
      'encountering.section2.hasMessiahCome': 'האם ייתכן שהמשיח כבר בא?',
      'encountering.section2.whatWillMessiahDo': 'מה אומרים כתבי הקודש העבריים שהמשיח יעשה?',
      'encountering.section2.whatDoesTanakhSay': 'מה אומר התנ"ך על המשיח?',
      
      'encountering.section3.title': '3. נבואה משיחית ומימוש',
      'encountering.section3.subtitle': 'נבואות ספציפיות ומימוש בישוע',
      'encountering.section3.daniel9': 'מה אומר דניאל ט\' על מועד בואו של המשיח?',
      'encountering.section3.isaiah53': 'למי או למה מתייחס ישעיהו נ"ג בתנ"ך?',
      'encountering.section3.jeremiah31': 'מה אומר ירמיהו ל"א על \'הברית החדשה\' בתנ"ך?',
      'encountering.section3.fulfillsNotReplaces': 'האם יש דרכים שבהן ישוע מגשים, במקום להחליף, את כתבי הקודש העבריים?',
      'encountering.section3.redemption': 'מה מלמד התנ"ך על גאולה?',
      
      'encountering.section4.title': '4. כפרה, חטא וישועה',
      'encountering.section4.subtitle': 'איך עובדת הישועה; חטא, כפרה, חיי העולם הבא',
      'encountering.section4.whatIsSin': 'מהו חטא?',
      'encountering.section4.sacrificeRole': 'איזה תפקיד מילא הקורבן בכפרה בתורה, וכיצד מטפלים בו כיום?',
      'encountering.section4.atonementWithoutTemple': 'איך מבינים כפרה היום ללא בית המקדש?',
      'encountering.section4.rightRelationship': 'מה זה אומר להיות ביחסים נכונים עם אלוהים?',
      'encountering.section4.whatToDoSaved': 'מה עליי לעשות כדי להיוושע?',
      'encountering.section4.becomeJewishChristian': 'איך אני הופך להיות יהודי משיחי?',
      'encountering.section4.goToHeaven': 'מה זה אומר ללכת לגן עדן?',
      'encountering.section4.hellExists': 'האם הגיהנום קיים?',
      
      'encountering.section5.title': '5. זהות יהודית ואמונה משיחית',
      'encountering.section5.subtitle': 'מאמינים יהודים בישוע ושאלות יהודיות-נוצריות',
      'encountering.section5.jewishAndBelieve': 'האם אדם יכול להיות יהודי ולהאמין בישוע?',
      'encountering.section5.whySomeBelieve': 'מדוע חלק מהיהודים מאמינים בישוע כיום?',
      'encountering.section5.whySomeReject': 'מדוע חלק מהיהודים דוחים את הרעיון של ישוע כמשיח?',
      
      'encountering.section6.title': '6. שמירת תורה ומנהג נוצרי',
      'encountering.section6.subtitle': 'תורה, מצוות ואיך חיים יהודים משיחיים',
      'encountering.section6.all613Mitzvot': 'האם עליי לשמור את כל תרי"ג המצוות?',
      'encountering.section6.keepKosher': 'האם יהודים משיחיים שומרים כשרות?',
      'encountering.section6.keepShabbat': 'האם יהודים משיחיים שומרים שבת?',
      
      'encountering.section7.title': '7. פגישה אישית עם המשיח',
      'encountering.section7.subtitle': 'מערכת יחסים אישית ומפגש רוחני',
      'encountering.section7.encounterYeshua': 'איך אני יכול לפגוש את ישוע באופן אישי היום?',
      'encountering.section7.personalRelationship': 'מה זה אומר להיות במערכת יחסים אישית עם המשיח?',
      'encountering.section7.recognizeVoice': 'איך אני יכול לזהות את קול המשיח בחיי?',
      
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
      'pageTitle.contactSuccessHebrew': 'ההודעה נשלחה! - שירותי האמבלברגר',
      
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
      
      // Encountering Messiah URLs
      'urls.encountering.whoIsYeshua': '/he/blog/who-is-yeshua?from=encountering-messiah',
      'urls.encountering.didYeshuaExist': '/he/blog/did-yeshua-really-exist?from=encountering-messiah',
      'urls.encountering.wasYeshuaSinless': '/he/blog/was-yeshua-really-sinless?from=encountering-messiah',
      'urls.encountering.wasYeshuaBornVirgin': '/he/blog/was-yeshua-really-born-of-a-virgin?from=encountering-messiah',
      'urls.encountering.didYeshuaDieCross': '/he/blog/did-yeshua-really-die-on-a-cross?from=encountering-messiah',
      'urls.encountering.didYeshuaRise': '/he/blog/did-yeshua-really-rise-from-the-dead?from=encountering-messiah',
      'urls.encountering.didYeshuaAscend': '/he/blog/did-yeshua-really-ascend-into-heaven?from=encountering-messiah',
      'urls.encountering.isYeshuaAlive': '/he/blog/is-yeshua-still-alive-today?from=encountering-messiah',
      'urls.encountering.couldYeshuaBeMessiah': '/he/blog/could-yeshua-be-the-messiah?from=encountering-messiah',
      'urls.encountering.hasMessiahCome': '/he/blog/has-messiah-already-come?from=encountering-messiah',
      'urls.encountering.whatWillMessiahDo': '/he/blog/what-will-the-messiah-do?from=encountering-messiah',
      'urls.encountering.whatIsSin': '/he/blog/what-is-sin?from=encountering-messiah',
      
      // Mission Page
      'mission.title': 'המשימה שלנו',
      'mission.content': 'שירותי האמבלברגר קיימים כדי להלל את אלוהים על ידי הכרזת הבשורה של ישוע המשיח, עם קריאה ממוקדת להביא את הבשורה הטובה לעם היהודי בערים כמו ניו יורק ותל אביב. מושרשים ברוחו של השליח פאולוס, המשימה שלנו היא לבשר, לחנך ולהקים מטיפים ומורים נאמנים לנטוע ולרעות כנסיות ברחבי העולם. בעוד שהמיקוד העיקרי שלנו הוא משימות יהודיות, אנו עומדים במלואם על הצו הגדול, מבקשים להגיע לכל האבודים ולשרת את הכנסייה הגלובלית כפי שהאדון מוביל.',
      
      // Statement of Faith Page
      'statement.title': 'הצהרת אמונה',
      'statement.description': 'אלה הם העקרונות המקראיים והאמונות התיאולוגיות המנחות את שירותנו.',
      
      'statement.item1.title': '1. סמכות ואחדות הכתובים',
      'statement.item1.content': 'אנו מאמינים שכל התנ"ך - הן הברית הישנה והן הברית החדשה - הוא דבר אלוהים שנכתב בהשראתו, ללא טעויות ובלתי ניתן לערעור. הוא הסמכות הסופית והמספקת בכל ענייני אמונה, דוקטרינה ומעשה. כתבי הקודש העבריים הם יסודיים ומצביעים ישירות על המשיח, ישוע המשיח.',
      
      'statement.item2.title': '2. האל המשולש',
      'statement.item2.content': 'אנו מאמינים באל אחד, הקיים נצחית בשלוש אישיויות: האב, הבן ורוח הקודש. כל אחד מהם הוא אלוהים במלואו, שווה בתהילה, בכוח ובמהות, אך נבדל בתפקיד וביחס.',
      
      'statement.item3.title': '3. אישיותו ועבודתו של המשיח',
      'statement.item3.content': 'ישוע המשיח, אלוהים במלואו ואדם במלואו, נהרה על ידי רוח הקודש ונולד מבתולה. הוא חי חיים ללא חטא, מת מות חלופי על הצלב, קם לתחייה גופנית מן המתים, וכעת מולך לימין האב. הישועה נמצאת בו לבדו.',
      
      'statement.item4.title': '4. ישועה בחסד דרך אמונה',
      'statement.item4.content': 'הישועה היא בחסד בלבד, דרך אמונה בלבד, במשיח בלבד. זה כולל לידה מחדש, הצדקה, קידוש והאדרה. זוהי מתנה חינמית מאלוהים ואינה ניתנת להשגה על ידי מעשים או מאמץ אנושי.',
      
      'statement.item5.title': '5. טבילת מאמינים בטבילה במים',
      'statement.item5.content': 'אנו מאמינים שטבילה היא למאמינים בלבד, כהצהרה פומבית על אמונה וציות למשיח. היא נעשית בטבילה במים, המסמלת את איחוד המאמין עם המשיח במותו, קבורתו ותחייתו. היא אינה מושיעה אך מצווה על ידי ישוע לכל ההולכים אחריו.',
      
      'statement.item6.title': '6. הקהילה',
      'statement.item6.content': 'הקהילה מורכבת מכל המאמינים האמיתיים במשיח. הקהילה המקומית היא גוף אוטונומי של מאמינים טבולים המחויבים לפולחן, לחברותא, להוראה, לסקרמנטים ולמשימה. המשיח הוא ראש הקהילה.',
      
      'statement.item7.title': '7. מתנות רוחניות',
      'statement.item7.content': 'אנו מאשרים את נוכחותן ופעולתן המתמשכת של מתנות רוחניות בתוך הקהילה, כפי שמתואר בברית החדשה. אנו מאמינים שיש להפעיל מתנות אלה ברוח של ענווה, תחת סמכות הכתובים, ובהתאם לסדר ולמטרה הנלמדים בברית החדשה.',
      
      'statement.item8.title': '8. הדרכת רוח הקודש וחוויה אישית',
      'statement.item8.content': 'אנו מאשרים את סמכות הכתובים כעליונה אך גם מכירים בהדרכתה האישית המתמשכת של רוח הקודש. חוויה המובלת על ידי הרוח היא קדושה ולגיטימית כאשר היא נכנעת לכתובים, נבחנת בחוכמה ומתורגלת בקהילה.',
      
      'statement.item9.title': '9. אנתרופולוגיה מקראית: מגדר וזהות',
      'statement.item9.content': 'אנו מאשרים שכל האנשים נבראו על ידי אלוהים בצלמו עם כבוד וערך מובנים. אנו מאמינים שאלוהים ברא בכוונה את האנושות כזכר ונקבה, ושניהם שווים בערכם ונבדלים בתפקידם. אנו מאשרים שנישואין הם ברית קדושה בין איש אחד לאישה אחת, שנועדה על ידי אלוהים לשגשוג אנושי. אנו מקיימים את קדושת החיים מההתעברות ועד המוות הטבעי, בוטחים בעיצובו הטוב של אלוהים לזהות ולמטרה האנושית.',
      
      'statement.item10.title': '10. דוקטרינת האנושות וטרנס-הומניזם',
      'statement.item10.content': 'אנו מאשרים שהאנושות, שנבראה בצלם אלוהים, היא עיצוב קדוש ומכוון. אנו מאמינים שניסיונות לשנות או לשפר את הטבע האנושי באמצעים טכנולוגיים, גנטיים או מלאכותיים מתנגדים לכוונתו של אלוהים לזהות ולכבוד האנושי. אנו מאשרים שערך האדם אינו נמצא בשיפורים מלאכותיים, אלא בכך שנבראנו באופן מעורר יראה ופליאה על ידי בוראנו.',
      
      'statement.item11.title': '11. תוכנית הגאולה של אלוהים ותקוות האוונגליזם היהודי',
      'statement.item11.content': 'אנו מאמינים שתוכנית הישועה של אלוהים, שנחשפה לאורך כל הכתובים, תמיד הייתה בחסד דרך אמונה - והתגשמה בישוע, המשיח. במשיח, אלוהים מושך הן יהודים והן גויים לעם גאול אחד, מאוחד על ידי הרוח ומעוגן בהבטחות הברית החדשה. מתוך כיבוד עדיפות הבשורה "ליהודי תחילה" (רומים א:16), אנו מאמצים קריאה מיוחדת לחלוק באהבה את הבשורה הטובה של ישוע עם העם היהודי ברחבי העולם, ומזמינים אותם לקבל את המשיח שנחזה בכתביהם.',
      
      'statement.item12.title': '12. אהבה לעם היהודי והגשמת הבטחת אלוהים',
      'statement.item12.content': 'אנו מאשרים את אהבת הברית הנצחית של אלוהים לעם היהודי ומכירים במורשת הרוחנית העשירה שניתנה דרכם - האבות, הנביאים, הכתובים, ובסופו של דבר המשיח. אנו מכבדים את הזהות היהודית כחלק מתוכנית הגאולה של אלוהים ומאמינים שהבטחות כתבי הקודש העבריים מוצאות את הגשמתן בישוע, משיח ישראל. באמונה זו, אנו ניגשים לעם היהודי לא בלחץ או בכפייה, אלא בענווה, בהכרת תודה ובתקווה - ומשתוקקים לחלוק את הבשורה הטובה של ישוע בחמלה ובכבוד עמוק.',
      
      'statement.item13.title': '13. אי-השתייכות פוליטית',
      'statement.item13.content': 'אנו כארגון איננו פוליטיים באופיינו. איננו מקדמים שום מפלגה או אידיאולוגיה. אזרחותנו היא בשמיים, ומשימתנו היא רוחנית: להכריז את הבשורה ולקדם את מלכות המשיח.',
      
      'statement.item14.title': '14. מלחמה רוחנית',
      'statement.item14.content': 'אנו מאשרים את מציאות המלחמה הרוחנית. הבשורה מוכרזת בשטח שנוי במחלוקת. אנו מצוידים בשריון המלא של אלוהים ומועצמים על ידי הרוח להתנגד לאויב ולקדם את הבשורה בכוח ובאמת.',
      
      'statement.item15.title': '15. השליחות הגדולה והמשימות העולמיות',
      'statement.item15.content': 'אנו קיימים כדי לעשות תלמידים מכל העמים, ובמיוחד מהעם היהודי. אנו מכריזים את הבשורה, נוטעים קהילות, מתלמדים מאמינים ומקימים מנהיגים. אנו מאשרים את מצוותו של המשיח ללכת לכל העולם עד שכל עם ישמע. אנו הולכים לפי הדפוס המקראי של התפשטות הבשורה מירושלים ליהודה, לשומרון ולקצוות הארץ (מעשי השליחים א:8), עמלים תחילה למען העם היהודי ואז למען העמים. האוונגליזם שלנו מעוגן בכתובים, הן בברית הישנה והן בברית החדשה.',
      
      'statement.item16.title': '16. אמת ובלעדיות הבשורה',
      'statement.item16.content': 'אנו מאשרים שישוע הוא הדרך היחידה לאלוהים, ושהישועה נמצאת בו לבדו. אנו מאשרים את האמת והסמכות המוחלטות של דבר אלוהים בכל הדורות. בעוד אנו מתקשרים עם תרבויות מגוונות בענווה ובחמלה, אנו מחזיקים באמת הבלעדית של הבשורה ללא פשרות.',
      
      'statement.item17.title': '17. עדת הקהילה בעולם חילוני',
      'statement.item17.content': 'אנו מאשרים את קיומו של אלוהים אישי, קדוש וריבוני, שברא ומקיים את כל הדברים. אנו מאשרים שידע וחוכמה אמיתיים מתחילים ביראת ה' + '"' + 'אלוהים' + '"' + ', וכי כל השקפת עולם השוללת את קיום אלוהים היא בסופו של דבר לא שלמה ופושטת רגל מבחינה רוחנית. ',
      
      'statement.item18.title': '18. קדושת החיים',
      'statement.item18.content': 'אנו מאשרים את קדושת כל חיי אדם מההתעברות ועד המוות הטבעי. כל אדם נושא את צלם אלוהים וראוי לכבוד והגנה. אנו מאשרים שכל האנשים, ללא קשר ליכולת, גיל או מעמד חברתי, נבראו באופן מעורר יראה ופליאה.',
      
      'statement.item19.title': '19. אחדות ביסודות, חירות בשוליים',
      'statement.item19.content': 'איננו מתפלגים על נושאים משניים. אנו מכבדים דעות מגוונות על בריאה, אסכטולוגיה, מתנות רוחניות ומערכות תיאולוגיות כמו תיאולוגיה רפורמית. עם זאת, איננו מאשרים דפנסציונליזם קלאסי, מכיוון שאנו מאמינים שיש לאלוהים עם אחד במשיח. אנו שואפים לאחדות בבשורה ולחסד בכל הדברים, ובלבד שעמדות אלה מקיימות את אי-טעותם וסמכותם של הכתובים. אנו מאשרים, למשל, את המציאות ההיסטורית של אדם וחווה, כפי שישוע עצמו דיבר עליהם כאישים ממשיים (מתי יט:4-6).',
      
      'statement.item20.title': '20. אישור סופי',
      'statement.item20.content': 'אנו מאמינים שהכתובים לבדם הם הסמכות העליונה, שהישועה היא בחסד בלבד דרך אמונה בלבד במשיח בלבד, למען תהילת אלוהים בלבד.',
      
      // Terms of Use Page
      'terms.title': 'תנאי שימוש',
      'terms.lastUpdated': 'עודכן לאחרונה: 18 באפריל 2025',
      'terms.intro': 'ברוכים הבאים לאתר משרדי האמבלברגר. על ידי גישה או שימוש באתר שלנו, אתה מסכים להיות מחויב לתנאי שימוש אלה. אנא קרא אותם בעיון.',
      
      'terms.acceptance.title': 'קבלת התנאים',
      'terms.acceptance.content': 'על ידי גישה ושימוש באתר זה, אתה מקבל ומסכים להיות מחויב לתנאי שימוש אלה, למדיניות הפרטיות שלנו ולכל מדיניות אחרת שעשויה להתפרסם באתר שלנו. אם אינך מסכים לתנאים אלה, אנא אל תשתמש באתר שלנו.',
      
      'terms.content.title': 'שימוש בתוכן',
      'terms.content.content': 'התוכן באתר שלנו, לרבות אך לא רק טקסט, גרפיקה, סמלילים, תמונות, קטעי שמע ותוכנה, הוא בבעלות או ברישיון של משרדי האמבלברגר ומוגן על ידי חוקי זכויות יוצרים וקניין רוחני אחרים. באפשרותך לגשת ולצפות בתוכן לשימוש אישי ולא מסחרי בלבד. אינך רשאי לשכפל, להפיץ, לשנות, ליצור עבודות נגזרות, להציג בפומבי או לנצל כל תוכן מאתרנו ללא אישורנו מראש ובכתב.',
      
      'terms.conduct.title': 'התנהגות משתמשים',
      'terms.conduct.intro': 'בעת השימוש באתר שלנו, אתה מסכים לא:',
      'terms.conduct.item1': 'להפר כל חוק או תקנה החלים',
      'terms.conduct.item2': 'לפגוע בזכויותיהם של אחרים',
      'terms.conduct.item3': 'להשתמש באתר שלנו בכל דרך שעלולה להשבית, להעמיס או לפגוע באתר',
      'terms.conduct.item4': 'לנסות לקבל גישה בלתי מורשית לכל חלק מאתרנו',
      'terms.conduct.item5': 'להשתמש באתר שלנו כדי להעביר כל תוכנה או קוד זדוניים',
      'terms.conduct.item6': 'לעסוק בכל התנהגות המגבילה או מונעת את השימוש של כל אדם באתר שלנו',
      
      'terms.links.title': 'קישורים לאתרי צד שלישי',
      'terms.links.content': 'האתר שלנו עשוי להכיל קישורים לאתרי צד שלישי. קישורים אלה מסופקים לנוחיותך בלבד. אין לנו שליטה על התוכן של אתרים אלה ואיננו מקבלים אחריות עליהם או על כל אובדן או נזק שעלול לנבוע מהשימוש שלך בהם. הכללת קישור לאתר צד שלישי אינה מרמזת על תמיכתנו באתר זה.',
      
      'terms.userContent.title': 'תוכן שנוצר על ידי משתמשים',
      'terms.userContent.content': 'אם אתה מגיש תוכן כלשהו לאתר שלנו, כולל הערות או משוב, אתה מעניק למשרדי האמבלברגר רישיון לא בלעדי, ללא תמלוגים, תמידי ועולמי להשתמש, לשכפל, לשנות, להתאים, לפרסם, לתרגם ולהפיץ תוכן כזה בכל מדיה. אתה מצהיר שיש לך את הזכות להעניק רישיון כזה.',
      
      'terms.disclaimer.title': 'הסרת אחריות',
      'terms.disclaimer.content': 'האתר שלנו ותכניו מסופקים "כמות שהם" ו"כזמינים" ללא כל אחריות מכל סוג שהוא, בין אם מפורשת או משתמעת. איננו מתחייבים שהאתר שלנו יהיה ללא הפרעות או שגיאות, שפגמים יתוקנו, או שהאתר שלנו או השרתים המאפשרים את זמינותו נקיים מוירוסים או מרכיבים מזיקים אחרים.',
      
      'terms.liability.title': 'הגבלת אחריות',
      'terms.liability.content': 'במידה המרבית המותרת על פי החוק החל, משרדי האמבלברגר לא יהיו אחראים לכל נזק עקיף, מקרי, מיוחד, תוצאתי או עונשי, לרבות אובדן רווחים, נתונים או שימוש, הנובע מהשימוש שלך באתר שלנו או בקשר אליו.',
      
      'terms.indemnification.title': 'שיפוי',
      'terms.indemnification.content': 'אתה מסכים לשפות, להגן ולהחזיק את משרדי האמבלברגר ונושאי המשרה, הדירקטורים, העובדים, הסוכנים והשותפים שלהם מכל וכל תביעות, התחייבויות, נזקים, הפסדים, עלויות, הוצאות או עמלות (לרבות שכר טרחת עורכי דין סביר) הנובעים מהשימוש שלך באתר שלנו או מהפרת תנאי שימוש אלה.',
      
      'terms.changes.title': 'שינויים בתנאים',
      'terms.changes.content': 'אנו שומרים לעצמנו את הזכות לשנות תנאי שימוש אלה בכל עת. כל שינוי ייכנס לתוקף מיד עם פרסום תנאי השימוש המתוקנים באתר שלנו. המשך השימוש שלך באתר שלנו לאחר פרסום תנאי השימוש המתוקנים מהווה את קבלתך לשינויים אלה.',
      
      'terms.governing.title': 'החוק החל',
      'terms.governing.content': 'תנאי שימוש אלה יחולו ויפורשו בהתאם לחוקי מדינת צפון קרוליינה, ללא התחשבות בהוראות ניגוד החוקים שלה.',
      
      'terms.contact.title': 'צור קשר',
      'terms.contact.content': 'אם יש לך שאלות לגבי תנאי שימוש אלה, אנא צור עמנו קשר באמצעות',
      'terms.contact.link': 'הטופס המקוון שלנו',
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
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const puppeteer = require('puppeteer');
const archiver = require('archiver');

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
  'how-do-i-meet-messiah',
  'how-do-i-fellowship-with-the-spirit'
];

// Section titles for the table of contents
const sectionTitles = {
  en: [
    'Who is Yeshua?',
    'Could Yeshua be the Messiah?',
    'Hebrew Scriptures and the Messiah',
    'Sin, Redemption, and Salvation',
    'Jewish Identity and Messiah',
    'Life as a Jewish Believer',
    'Personal Encounter with Messiah'
  ],
  he: [
    'מי הוא ישוע?',
    'האם ישוע יכול להיות המשיח?',
    'כתבי הקודש העבריים והמשיח',
    'חטא, גאולה וישועה',
    'זהות יהודית ומשיח',
    'חיים כיהודי מאמין',
    'פגישה אישית עם המשיח'
  ]
};

// Section groupings (same for both languages)
const sectionGroupings = [
  // Section 1: Who is Yeshua? / מי הוא ישוע?
  ['who-is-yeshua', 'did-yeshua-really-exist', 'was-yeshua-really-sinless', 'was-yeshua-really-born-of-a-virgin', 'did-yeshua-really-die-on-a-cross', 'did-yeshua-really-rise-from-the-dead', 'did-yeshua-really-ascend-into-heaven', 'is-yeshua-still-alive-today'],
  // Section 2: Could Yeshua be the Messiah? / האם ישוע יכול להיות המשיח?
  ['could-yeshua-be-the-messiah', 'has-messiah-already-come', 'what-will-the-messiah-do', 'what-does-the-tanakh-say-about-messiah'],
  // Section 3: Hebrew Scriptures and the Messiah / כתבי הקודש העבריים והמשיח
  ['when-was-the-messiah-supposed-to-come', 'who-is-the-suffering-servant', 'the-new-covenant-that-was-promised', 'the-fulfillment-of-the-hebrew-scriptures', 'redemption-in-the-hebrew-scriptures'],
  // Section 4: Sin, Redemption, and Salvation / חטא, גאולה וישועה
  ['what-is-sin', 'the-heart-of-atonement', 'atonement-without-the-temple', 'right-relationship-with-god', 'what-must-i-do-to-be-saved', 'how-to-become-a-jewish-christian', 'how-to-get-to-heaven', 'does-hell-exist'],
  // Section 5: Jewish Identity and Messiah / זהות יהודית ומשיח
  ['is-it-possible-to-be-a-jewish-christian', 'why-some-jews-believe', 'why-some-jews-reject'],
  // Section 6: Life as a Jewish Believer / חיים כיהודי מאמין
  ['what-about-the-613-mitzvot', 'what-about-the-kosher-laws', 'what-about-shabbat'],
  // Section 7: Personal Encounter with Messiah / פגישה אישית עם המשיח
  ['how-do-i-meet-messiah', 'how-do-i-fellowship-with-the-spirit']
];

// Book metadata
const bookMetadata = {
  en: {
    title: 'Encountering Messiah: A Journey to Jewish Hearts',
    subtitle: 'A Journey to Jewish Hearts',
    author: 'Humbleberger Ministries',
    description: 'An ebook bringing the gospel of Yeshua the Messiah to Jewish people',
    publisher: 'Humbleberger Ministries',
    language: 'en'
  },
  he: {
    title: 'מפגש עם המשיח: מסע ללבבות יהודיים',
    subtitle: 'מסע ללבבות יהודיים',
    author: 'שירות האמבלברגר',
    description: 'ספר אלקטרוני המביא את הבשורה של ישוע המשיח ליהודים',
    publisher: 'שירות האמבלברגר',
    language: 'he'
  }
};

function extractTitleFromMarkdown(content) {
  const lines = content.split('\n');
  for (const line of lines) {
    if (line.startsWith('# ')) {
      return line.replace('# ', '').trim();
    }
  }
  return 'No Title';
}

function generateTableOfContents(lang) {
  let toc = `<h1>${lang === 'he' ? 'תוכן עניינים' : 'Table of Contents'}</h1>\n\n`;
  
  sectionGroupings.forEach((section, sectionIndex) => {
    toc += `<h2>${sectionIndex + 1}. ${sectionTitles[lang][sectionIndex]}</h2>\n\n`;
    
    section.forEach((articleSlug, articleIndex) => {
      const articlePath = path.join(__dirname, 'src', 'copy', lang === 'he' ? 'he' : '', `${articleSlug}.md`);
      if (fs.existsSync(articlePath)) {
        const fileContent = fs.readFileSync(articlePath, 'utf8');
        const { content } = matter(fileContent);
        const title = extractTitleFromMarkdown(content);
        toc += `<p><a href="#${articleSlug}">${sectionIndex + 1}.${articleIndex + 1} ${title}</a></p>\n`;
      }
    });
    
    toc += '\n';
  });
  
  return toc;
}

function generateEbookHTML(lang) {
  const metadata = bookMetadata[lang];
  const isRTL = lang === 'he';
  const dir = isRTL ? 'rtl' : 'ltr';
  const textAlign = isRTL ? 'right' : 'left';
  const borderSide = isRTL ? 'border-right' : 'border-left';
  
  let html = `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${metadata.title} - ${metadata.author}</title>
    <style>
        body {
            font-family: ${isRTL ? "'David Libre', 'Times New Roman'" : "'Times New Roman', serif"}, serif;
            line-height: 1.6;
            margin: 0;
            padding: 40px;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            direction: ${dir};
            text-align: ${textAlign};
        }
        h1 {
            color: #2c3e50;
            ${borderSide}: 2px solid #3498db;
            padding-${isRTL ? 'right' : 'left'}: 10px;
            page-break-after: avoid;
        }
        h2 {
            color: #34495e;
            ${borderSide}: 1px solid #bdc3c7;
            padding-${isRTL ? 'right' : 'left'}: 5px;
            page-break-after: avoid;
        }
        h3 {
            color: #2c3e50;
            page-break-after: avoid;
        }
        p {
            margin-bottom: 1em;
            text-align: justify;
        }
        blockquote {
            ${borderSide}: 4px solid #3498db;
            margin: 20px 0;
            padding: 10px 20px;
            background-color: #f8f9fa;
            font-style: italic;
        }
        ul, ol {
            margin-bottom: 1em;
        }
        li {
            margin-bottom: 0.5em;
        }
        .article {
            page-break-before: always;
        }
        .article:first-child {
            page-break-before: avoid;
        }
        .toc {
            page-break-after: always;
        }
        .toc a {
            color: #2c3e50;
            text-decoration: none;
        }
        .toc a:hover {
            text-decoration: underline;
        }
        .toc h2 {
            color: #3498db;
            margin-top: 30px;
        }
        .toc p {
            margin: 5px 0;
            padding-${isRTL ? 'right' : 'left'}: 20px;
        }
        .cover {
            text-align: center;
            page-break-after: always;
            padding: 100px 0;
        }
        .cover h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
            border: none;
        }
        .cover p {
            font-size: 1.2em;
            margin: 10px 0;
        }
        .cover .subtitle {
            font-style: italic;
            color: #7f8c8d;
        }
        .cover .author {
            font-weight: bold;
            margin-top: 50px;
        }
        .cover .date {
            color: #7f8c8d;
            margin-top: 20px;
        }
        strong {
            font-weight: bold;
        }
        em {
            font-style: italic;
        }
        hr {
            border: none;
            border-top: 1px solid #bdc3c7;
            margin: 30px 0;
        }
        @media print {
            body {
                font-size: 12pt;
            }
            h1 {
                font-size: 18pt;
            }
            h2 {
                font-size: 16pt;
            }
            h3 {
                font-size: 14pt;
            }
        }
    </style>
</head>
<body>
    <div class="cover">
        <h1>${metadata.title.split(':')[0]}</h1>
        <p class="subtitle">${metadata.subtitle}</p>
        <p class="author">${metadata.author}</p>
        <p class="date">${new Date().toLocaleDateString(lang === 'he' ? 'he-IL' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>
    
    <div class="toc">
        ${generateTableOfContents(lang)}
    </div>`;

  // Add each article
  encounteringMessiahArticles.forEach((articleSlug) => {
    const articlePath = path.join(__dirname, 'src', 'copy', lang === 'he' ? 'he' : '', `${articleSlug}.md`);
    
    if (fs.existsSync(articlePath)) {
      const fileContent = fs.readFileSync(articlePath, 'utf8');
      const { content } = matter(fileContent);
      
      // Convert markdown to HTML
      const articleHTML = marked(content);
      
      html += `\n    <div class="article" id="${articleSlug}">
        ${articleHTML}
    </div>`;
    } else {
      console.warn(`Warning: Article ${articleSlug}.md not found in ${lang} directory`);
    }
  });

  html += `
</body>
</html>`;

  return html;
}

async function generatePDF(lang) {
  try {
    console.log(`Generating ${lang.toUpperCase()} ebook HTML...`);
    const html = generateEbookHTML(lang);
    
    // Write HTML to temporary file
    const htmlPath = path.join(__dirname, `temp-ebook-${lang}.html`);
    fs.writeFileSync(htmlPath, html);
    
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--disable-software-rasterizer']
    });
    
    const page = await browser.newPage();
    
    console.log('Loading HTML...');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    console.log(`Generating ${lang.toUpperCase()} PDF...`);
    const pdf = await page.pdf({
      format: 'A4',
      margin: {
        top: '1in',
        right: '1in',
        bottom: '1in',
        left: '1in'
      },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: `<div style="font-size: 10px; text-align: center; width: 100%; color: #666;">${bookMetadata[lang].author} - ${bookMetadata[lang].title.split(':')[0]}</div>`
    });
    
    await browser.close();
    
    // Clean up temporary HTML file
    fs.unlinkSync(htmlPath);
    
    // Write PDF to public directory
    const pdfPath = path.join(__dirname, 'public', `encountering-messiah-ebook-${lang}.pdf`);
    fs.writeFileSync(pdfPath, pdf);
    
    console.log(`✅ ${lang.toUpperCase()} PDF generated successfully: ${pdfPath}`);
    console.log(`📄 PDF size: ${(pdf.length / 1024 / 1024).toFixed(2)} MB`);
    
  } catch (error) {
    console.error(`❌ Error generating ${lang.toUpperCase()} PDF:`, error);
    throw error;
  }
}

// EPUB generation functions
function generateEPUBCSS(lang) {
  const isRTL = lang === 'he';
  const textAlign = isRTL ? 'right' : 'left';
  const borderSide = isRTL ? 'border-right' : 'border-left';
  const paddingSide = isRTL ? 'padding-right' : 'padding-left';
  
  return `@charset "UTF-8";

body {
    font-family: ${isRTL ? "'David Libre', 'Times New Roman'" : "'Times New Roman', serif"}, serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    color: #333;
    direction: ${isRTL ? 'rtl' : 'ltr'};
    text-align: ${textAlign};
}

h1 {
    color: #2c3e50;
    ${borderSide}: 2px solid #3498db;
    ${paddingSide}: 10px;
    page-break-after: avoid;
    font-size: 1.8em;
}

h2 {
    color: #34495e;
    ${borderSide}: 1px solid #bdc3c7;
    ${paddingSide}: 5px;
    page-break-after: avoid;
    font-size: 1.4em;
}

h3 {
    color: #2c3e50;
    page-break-after: avoid;
    font-size: 1.2em;
}

p {
    margin-bottom: 1em;
    text-align: justify;
}

blockquote {
    ${borderSide}: 4px solid #3498db;
    margin: 20px 0;
    padding: 10px 20px;
    background-color: #f8f9fa;
    font-style: italic;
}

ul, ol {
    margin-bottom: 1em;
}

li {
    margin-bottom: 0.5em;
}

.cover {
    text-align: center;
    page-break-after: always;
    padding: 50px 0;
}

.cover h1 {
    font-size: 2.2em;
    margin-bottom: 20px;
    border: none;
}

.cover p {
    font-size: 1.1em;
    margin: 10px 0;
}

.cover .subtitle {
    font-style: italic;
    color: #7f8c8d;
}

.cover .author {
    font-weight: bold;
    margin-top: 30px;
}

.cover .date {
    color: #7f8c8d;
    margin-top: 20px;
}

.toc {
    page-break-after: always;
}

.toc a {
    color: #2c3e50;
    text-decoration: none;
}

.toc h2 {
    color: #3498db;
    margin-top: 30px;
}

.toc p {
    margin: 5px 0;
    ${paddingSide}: 20px;
}

strong {
    font-weight: bold;
}

em {
    font-style: italic;
}

hr {
    border: none;
    border-top: 1px solid #bdc3c7;
    margin: 30px 0;
}

.article {
    page-break-before: always;
}

.article:first-child {
    page-break-before: avoid;
}`;
}

function generateEPUBContainerXML() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
    <rootfiles>
        <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
    </rootfiles>
</container>`;
}

function generateEPUBContentOPF(lang) {
  const metadata = bookMetadata[lang];
  const manifest = [];
  const spine = [];
  
  // Add CSS
  manifest.push('        <item id="css" href="style.css" media-type="text/css"/>');
  
  // Add cover
  manifest.push('        <item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>');
  spine.push('        <itemref idref="cover"/>');
  
  // Add table of contents
  manifest.push('        <item id="toc" href="toc.xhtml" media-type="application/xhtml+xml"/>');
  spine.push('        <itemref idref="toc"/>');
  
  // Add articles
  encounteringMessiahArticles.forEach((articleSlug) => {
    manifest.push(`        <item id="${articleSlug}" href="${articleSlug}.xhtml" media-type="application/xhtml+xml"/>`);
    spine.push(`        <itemref idref="${articleSlug}"/>`);
  });
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<package version="3.0" xmlns="http://www.idpf.org/2007/opf" unique-identifier="uid">
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
        <dc:identifier id="uid">urn:uuid:encountering-messiah-${lang}</dc:identifier>
        <dc:title>${metadata.title}</dc:title>
        <dc:creator>${metadata.author}</dc:creator>
        <dc:language>${metadata.language}</dc:language>
        <dc:date>${new Date().toISOString()}</dc:date>
        <dc:description>${metadata.description}</dc:description>
        <dc:publisher>${metadata.publisher}</dc:publisher>
        <dc:rights>© ${new Date().getFullYear()} ${metadata.publisher}</dc:rights>
        <meta property="dcterms:modified">${new Date().toISOString()}</meta>
    </metadata>
    <manifest>
${manifest.join('\n')}
    </manifest>
    <spine>
${spine.join('\n')}
    </spine>
    <guide>
        <reference type="cover" title="${lang === 'he' ? 'כריכה' : 'Cover'}" href="cover.xhtml"/>
        <reference type="toc" title="${lang === 'he' ? 'תוכן עניינים' : 'Table of Contents'}" href="toc.xhtml"/>
    </guide>
</package>`;
}

function generateEPUBTOCNCX(lang) {
  const metadata = bookMetadata[lang];
  const navPoints = [];
  let playOrder = 1;
  
  // Add cover
  navPoints.push(`        <navPoint id="nav-cover" playOrder="${playOrder}">`);
  navPoints.push(`            <navLabel><text>${lang === 'he' ? 'כריכה' : 'Cover'}</text></navLabel>`);
  navPoints.push('            <content src="cover.xhtml"/>');
  navPoints.push('        </navPoint>');
  playOrder++;
  
  // Add table of contents
  navPoints.push(`        <navPoint id="nav-toc" playOrder="${playOrder}">`);
  navPoints.push(`            <navLabel><text>${lang === 'he' ? 'תוכן עניינים' : 'Table of Contents'}</text></navLabel>`);
  navPoints.push('            <content src="toc.xhtml"/>');
  navPoints.push('        </navPoint>');
  playOrder++;
  
  // Add articles
  encounteringMessiahArticles.forEach((articleSlug) => {
    const articlePath = path.join(__dirname, 'src', 'copy', lang === 'he' ? 'he' : '', `${articleSlug}.md`);
    if (fs.existsSync(articlePath)) {
      const fileContent = fs.readFileSync(articlePath, 'utf8');
      const { content } = matter(fileContent);
      const title = extractTitleFromMarkdown(content);
      
      navPoints.push(`        <navPoint id="nav-${articleSlug}" playOrder="${playOrder}">`);
      navPoints.push(`            <navLabel><text>${title}</text></navLabel>`);
      navPoints.push(`            <content src="${articleSlug}.xhtml"/>`);
      navPoints.push('        </navPoint>');
      playOrder++;
    }
  });
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE ncx PUBLIC "-//NISO//DTD ncx 2005-1//EN" "http://www.daisy.org/z3986/2005/ncx-2005-1.dtd">
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1" xml:lang="${lang}">
    <head>
        <meta name="dtb:uid" content="encountering-messiah-${lang}"/>
        <meta name="dtb:depth" content="1"/>
        <meta name="dtb:totalPageCount" content="0"/>
        <meta name="dtb:maxPageNumber" content="0"/>
    </head>
    <docTitle>
        <text>${metadata.title}</text>
    </docTitle>
    <docAuthor>
        <text>${metadata.author}</text>
    </docAuthor>
    <navMap>
${navPoints.join('\n')}
    </navMap>
</ncx>`;
}

function generateEPUBCoverXHTML(lang) {
  const metadata = bookMetadata[lang];
  const isRTL = lang === 'he';
  const dir = isRTL ? 'rtl' : 'ltr';
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="${lang}" dir="${dir}">
<head>
    <meta charset="UTF-8"/>
    <title>${metadata.title.split(':')[0]}</title>
    <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
    <div class="cover">
        <h1>${metadata.title.split(':')[0]}</h1>
        <p class="subtitle">${metadata.subtitle}</p>
        <p class="author">${metadata.author}</p>
        <p class="date">${new Date().toLocaleDateString(lang === 'he' ? 'he-IL' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>
</body>
</html>`;
}

function generateEPUBTOCXHTML(lang) {
  let toc = `<h1>${lang === 'he' ? 'תוכן עניינים' : 'Table of Contents'}</h1>\n\n`;
  
  sectionGroupings.forEach((section, sectionIndex) => {
    toc += `<h2>${sectionIndex + 1}. ${sectionTitles[lang][sectionIndex]}</h2>\n\n`;
    
    section.forEach((articleSlug, articleIndex) => {
      const articlePath = path.join(__dirname, 'src', 'copy', lang === 'he' ? 'he' : '', `${articleSlug}.md`);
      if (fs.existsSync(articlePath)) {
        const fileContent = fs.readFileSync(articlePath, 'utf8');
        const { content } = matter(fileContent);
        const title = extractTitleFromMarkdown(content);
        toc += `<p><a href="${articleSlug}.xhtml">${sectionIndex + 1}.${articleIndex + 1} ${title}</a></p>\n`;
      }
    });
    
    toc += '\n';
  });
  
  const isRTL = lang === 'he';
  const dir = isRTL ? 'rtl' : 'ltr';
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="${lang}" dir="${dir}">
<head>
    <meta charset="UTF-8"/>
    <title>${lang === 'he' ? 'תוכן עניינים' : 'Table of Contents'}</title>
    <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
    <div class="toc">
${toc}
    </div>
</body>
</html>`;
}

function generateEPUBArticleXHTML(articleSlug, lang) {
  const articlePath = path.join(__dirname, 'src', 'copy', lang === 'he' ? 'he' : '', `${articleSlug}.md`);
  
  if (fs.existsSync(articlePath)) {
    const fileContent = fs.readFileSync(articlePath, 'utf8');
    const { content } = matter(fileContent);
    const title = extractTitleFromMarkdown(content);
    
    // Convert markdown to HTML
    const articleHTML = marked(content);
    
    const isRTL = lang === 'he';
    const dir = isRTL ? 'rtl' : 'ltr';
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="${lang}" dir="${dir}">
<head>
    <meta charset="UTF-8"/>
    <title>${title}</title>
    <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
    <div class="article">
${articleHTML}
    </div>
</body>
</html>`;
  } else {
    console.warn(`Warning: Article ${articleSlug}.md not found in ${lang} directory`);
    return null;
  }
}

async function generateEPUB(lang) {
  try {
    console.log(`Generating ${lang.toUpperCase()} EPUB...`);
    
    // Create temporary directory for EPUB contents
    const tempDir = path.join(__dirname, `temp-epub-${lang}`);
    const oebpsDir = path.join(tempDir, 'OEBPS');
    
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    if (!fs.existsSync(oebpsDir)) {
      fs.mkdirSync(oebpsDir, { recursive: true });
    }
    
    // Generate META-INF/container.xml
    const metaInfDir = path.join(tempDir, 'META-INF');
    if (!fs.existsSync(metaInfDir)) {
      fs.mkdirSync(metaInfDir, { recursive: true });
    }
    fs.writeFileSync(path.join(metaInfDir, 'container.xml'), generateEPUBContainerXML());
    
    // Generate OEBPS/content.opf
    fs.writeFileSync(path.join(oebpsDir, 'content.opf'), generateEPUBContentOPF(lang));
    
    // Generate OEBPS/toc.ncx
    fs.writeFileSync(path.join(oebpsDir, 'toc.ncx'), generateEPUBTOCNCX(lang));
    
    // Generate OEBPS/style.css
    fs.writeFileSync(path.join(oebpsDir, 'style.css'), generateEPUBCSS(lang));
    
    // Generate cover.xhtml
    fs.writeFileSync(path.join(oebpsDir, 'cover.xhtml'), generateEPUBCoverXHTML(lang));
    
    // Generate toc.xhtml
    fs.writeFileSync(path.join(oebpsDir, 'toc.xhtml'), generateEPUBTOCXHTML(lang));
    
    // Generate article XHTML files
    encounteringMessiahArticles.forEach((articleSlug) => {
      const articleXHTML = generateEPUBArticleXHTML(articleSlug, lang);
      if (articleXHTML) {
        fs.writeFileSync(path.join(oebpsDir, `${articleSlug}.xhtml`), articleXHTML);
      }
    });
    
    // Create EPUB file using archiver
    const epubPath = path.join(__dirname, 'public', `encountering-messiah-ebook-${lang}.epub`);
    const output = fs.createWriteStream(epubPath);
    const archive = archiver('zip', { zlib: { level: 9 } });
    
    output.on('close', () => {
      console.log(`✅ ${lang.toUpperCase()} EPUB generated successfully: ${epubPath}`);
      console.log(`📄 EPUB size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
      
      // Clean up temporary directory
      fs.rmSync(tempDir, { recursive: true, force: true });
    });
    
    archive.on('error', (err) => {
      throw err;
    });
    
    archive.pipe(output);
    
    // Add all files to the archive
    archive.directory(tempDir, false);
    
    await archive.finalize();
    
  } catch (error) {
    console.error(`❌ Error generating ${lang.toUpperCase()} EPUB:`, error);
    throw error;
  }
}

async function generateAllEbooks() {
  try {
    console.log('🚀 Starting generation of all ebook formats...\n');
    
    // Generate PDFs
    console.log('📖 Generating PDFs...');
    await generatePDF('en');
    await generatePDF('he');
    
    // Generate EPUBs
    console.log('\n📱 Generating EPUBs...');
    await generateEPUB('en');
    await generateEPUB('he');
    
    console.log('\n🎉 All ebooks generated successfully!');
    console.log('\nGenerated files:');
    console.log('  📄 encountering-messiah-ebook-en.pdf');
    console.log('  📄 encountering-messiah-ebook-he.pdf');
    console.log('  📱 encountering-messiah-ebook-en.epub');
    console.log('  📱 encountering-messiah-ebook-he.epub');
    
  } catch (error) {
    console.error('❌ Error generating ebooks:', error);
    process.exit(1);
  }
}

// Run the script
generateAllEbooks(); 
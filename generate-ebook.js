const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const puppeteer = require('puppeteer');

// Define the encountering messiah articles in order
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
const sectionTitles = [
  'Who Is Yeshua?',
  'Could Yeshua Be the Messiah?',
  'The Hebrew Scriptures and Messiah',
  'Sin, Redemption, and Salvation',
  'Jewish Identity and Messiah',
  'Living as a Jewish Believer',
  'Meeting Messiah Personally'
];

// Section groupings
const sectionGroupings = [
  // Section 1: Who Is Yeshua?
  ['who-is-yeshua', 'did-yeshua-really-exist', 'was-yeshua-really-sinless', 'was-yeshua-really-born-of-a-virgin', 'did-yeshua-really-die-on-a-cross', 'did-yeshua-really-rise-from-the-dead', 'did-yeshua-really-ascend-into-heaven', 'is-yeshua-still-alive-today'],
  // Section 2: Could Yeshua Be the Messiah?
  ['could-yeshua-be-the-messiah', 'has-messiah-already-come', 'what-will-the-messiah-do', 'what-does-the-tanakh-say-about-messiah'],
  // Section 3: The Hebrew Scriptures and Messiah
  ['when-was-the-messiah-supposed-to-come', 'who-is-the-suffering-servant', 'the-new-covenant-that-was-promised', 'the-fulfillment-of-the-hebrew-scriptures', 'redemption-in-the-hebrew-scriptures'],
  // Section 4: Sin, Redemption, and Salvation
  ['what-is-sin', 'the-heart-of-atonement', 'atonement-without-the-temple', 'right-relationship-with-god', 'what-must-i-do-to-be-saved', 'how-to-become-a-jewish-christian', 'how-to-get-to-heaven', 'does-hell-exist'],
  // Section 5: Jewish Identity and Messiah
  ['is-it-possible-to-be-a-jewish-christian', 'why-some-jews-believe', 'why-some-jews-reject'],
  // Section 6: Living as a Jewish Believer
  ['what-about-the-613-mitzvot', 'what-about-the-kosher-laws', 'what-about-shabbat'],
  // Section 7: Meeting Messiah Personally
  ['how-do-i-meet-messiah', 'how-do-i-fellowship-with-the-spirit']
];

function extractTitleFromMarkdown(content) {
  const lines = content.split('\n');
  for (const line of lines) {
    if (line.startsWith('# ')) {
      return line.replace('# ', '').trim();
    }
  }
  return 'Untitled';
}

function generateTableOfContents() {
  let toc = '<h1>Table of Contents</h1>\n\n';
  
  sectionGroupings.forEach((section, sectionIndex) => {
    toc += `<h2>${sectionIndex + 1}. ${sectionTitles[sectionIndex]}</h2>\n\n`;
    
    section.forEach((articleSlug, articleIndex) => {
      const articlePath = path.join(__dirname, 'src', 'copy', `${articleSlug}.md`);
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

function generateEbookHTML() {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encountering Messiah: A Journey for Jewish Hearts - Humbleberger Ministries</title>
    <style>
        body {
            font-family: 'Times New Roman', serif;
            line-height: 1.6;
            margin: 0;
            padding: 40px;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
            page-break-after: avoid;
        }
        h2 {
            color: #34495e;
            border-bottom: 1px solid #bdc3c7;
            padding-bottom: 5px;
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
            border-left: 4px solid #3498db;
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
            padding-left: 20px;
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
        <h1>Encountering Messiah</h1>
        <p class="subtitle">A Journey for Jewish Hearts</p>
        <p class="author">Humbleberger Ministries</p>
        <p class="date">${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>
    
    <div class="toc">
        ${generateTableOfContents()}
    </div>`;

  // Add each article
  encounteringMessiahArticles.forEach((articleSlug) => {
    const articlePath = path.join(__dirname, 'src', 'copy', `${articleSlug}.md`);
    
    if (fs.existsSync(articlePath)) {
      const fileContent = fs.readFileSync(articlePath, 'utf8');
      const { content } = matter(fileContent);
      
      // Convert markdown to HTML
      const articleHTML = marked(content);
      
      html += `\n    <div class="article" id="${articleSlug}">
        ${articleHTML}
    </div>`;
    } else {
      console.warn(`Warning: Article ${articleSlug}.md not found`);
    }
  });

  html += `
</body>
</html>`;

  return html;
}

async function generatePDF() {
  try {
    console.log('Generating ebook HTML...');
    const html = generateEbookHTML();
    
    // Write HTML to temporary file
    const htmlPath = path.join(__dirname, 'temp-ebook.html');
    fs.writeFileSync(htmlPath, html);
    
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    console.log('Loading HTML...');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    console.log('Generating PDF...');
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
      footerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%; color: #666;">Humbleberger Ministries - Encountering Messiah</div>'
    });
    
    await browser.close();
    
    // Clean up temporary HTML file
    fs.unlinkSync(htmlPath);
    
    // Write PDF to public directory
    const pdfPath = path.join(__dirname, 'public', 'encountering-messiah-ebook.pdf');
    fs.writeFileSync(pdfPath, pdf);
    
    console.log(`✅ Ebook generated successfully: ${pdfPath}`);
    console.log(`📄 PDF size: ${(pdf.length / 1024 / 1024).toFixed(2)} MB`);
    
  } catch (error) {
    console.error('❌ Error generating ebook:', error);
    process.exit(1);
  }
}

// Run the script
generatePDF(); 
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BLOG_DIR_EN = path.join(__dirname, 'src', 'copy');
const BLOG_DIR_HE = path.join(__dirname, 'src', 'copy', 'he');
const OUTPUT_PATH_EN = path.join(__dirname, 'public', 'rss.xml');
const OUTPUT_PATH_HE = path.join(__dirname, 'public', 'rss-he.xml');
const SITE_URL = 'https://humbleberger.org';

// Get blog post data with frontmatter
function getBlogPosts(dir, lang) {
    const files = fs.readdirSync(dir);
    const posts = [];
    
    files
        .filter(file => file.endsWith('.md'))
        .forEach(file => {
            const filePath = path.join(dir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const { data, content: markdownContent } = matter(content);
            
            const slug = file.replace(/\.md$/, '');
            const url = lang === 'he' ? `${SITE_URL}/he/blog/${slug}` : `${SITE_URL}/blog/${slug}`;
            const title = data.title || getH1Title(markdownContent) || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            const description = data.description || getFirstParagraph(markdownContent, lang);
            const date = data.date || getFileDate(filePath);
            
            posts.push({
                title,
                description,
                date,
                slug,
                url
            });
        });
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getH1Title(content) {
    const lines = content.split('\n');
    for (const line of lines) {
        if (line.startsWith('# ')) {
            return line.substring(2).trim();
        }
    }
    return null;
}

// Extract subtitle from markdown content (first line with **bold** text)
function getFirstParagraph(content, lang) {
    const lines = content.split('\n');
    for (let line of lines) {
        line = line.trim();
        if (line && line.includes('**') && line.startsWith('**') && line.endsWith('**')) {
            // Extract text between ** markers
            return line.replace(/\*\*(.*?)\*\*/g, '$1');
        }
    }
    return lang === 'he' 
        ? 'קראו עוד על נושא זה במשרדי האמבלברגר.' 
        : 'Read more about this topic on Humbleberger Ministries.';
}

// Get file modification date
function getFileDate(filePath) {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString();
}

// Generate RSS feed
function generateRSS(posts, lang) {
    const channelInfo = lang === 'he' ? {
        title: 'הבלוג של משרדי האמבלברגר',
        link: `${SITE_URL}/he/`,
        description: 'הוראה ומשאבים מקראיים לדיאלוג והבנה יהודית-נוצרית',
        language: 'he',
        rssPath: 'rss-he.xml'
    } : {
        title: 'Humbleberger Ministries Blog',
        link: `${SITE_URL}/`,
        description: 'Biblical teaching and resources for Jewish-Christian dialogue and understanding',
        language: 'en-us',
        rssPath: 'rss.xml'
    };

    const items = posts
        .map(post => `
    <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${post.url}</link>
        <guid>${post.url}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.description}]]></description>
    </item>`)
        .join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${channelInfo.title}</title>
        <link>${channelInfo.link}</link>
        <description>${channelInfo.description}</description>
        <language>${channelInfo.language}</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${SITE_URL}/${channelInfo.rssPath}" rel="self" type="application/rss+xml" />
        <image>
            <url>${SITE_URL}/logo.png</url>
            <title>${channelInfo.title}</title>
            <link>${channelInfo.link}</link>
        </image>${items}
    </channel>
</rss>`;
}

// Generate the English RSS feed
const postsEn = getBlogPosts(BLOG_DIR_EN, 'en');
const rssEn = generateRSS(postsEn, 'en');
fs.writeFileSync(OUTPUT_PATH_EN, rssEn);
console.log('English RSS feed generated successfully at', OUTPUT_PATH_EN);
console.log('Total English posts included:', postsEn.length);

// Generate the Hebrew RSS feed
const postsHe = getBlogPosts(BLOG_DIR_HE, 'he');
const rssHe = generateRSS(postsHe, 'he');
fs.writeFileSync(OUTPUT_PATH_HE, rssHe);
console.log('Hebrew RSS feed generated successfully at', OUTPUT_PATH_HE);
console.log('Total Hebrew posts included:', postsHe.length); 
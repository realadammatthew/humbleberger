const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BLOG_DIR = path.join(__dirname, 'src', 'copy');
const OUTPUT_PATH = path.join(__dirname, 'public', 'rss.xml');
const SITE_URL = 'https://humbleberger.org';

// Get blog post data with frontmatter
function getBlogPosts() {
    const files = fs.readdirSync(BLOG_DIR);
    const posts = [];
    
    files
        .filter(file => file.endsWith('.md'))
        .forEach(file => {
            const filePath = path.join(BLOG_DIR, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const { data, content: markdownContent } = matter(content);
            
            const slug = file.replace(/\.md$/, '');
            const title = data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            const description = data.description || getFirstParagraph(markdownContent);
            const date = data.date || getFileDate(filePath);
            
            posts.push({
                title,
                description,
                date,
                slug,
                url: `${SITE_URL}/blog/${slug}`
            });
        });
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Extract subtitle from markdown content (first line with **bold** text)
function getFirstParagraph(content) {
    const lines = content.split('\n');
    for (let line of lines) {
        line = line.trim();
        if (line && line.includes('**') && line.startsWith('**') && line.endsWith('**')) {
            // Extract text between ** markers
            return line.replace(/\*\*(.*?)\*\*/g, '$1');
        }
    }
    return 'Read more about this topic on Humbleberger Ministries.';
}

// Get file modification date
function getFileDate(filePath) {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString();
}

// Generate RSS feed
function generateRSS(posts) {
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
        <title>Humbleberger Ministries Blog</title>
        <link>${SITE_URL}</link>
        <description>Biblical teaching and resources for Jewish-Christian dialogue and understanding</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
        <image>
            <url>${SITE_URL}/logo.png</url>
            <title>Humbleberger Ministries</title>
            <link>${SITE_URL}</link>
        </image>${items}
    </channel>
</rss>`;
}

// Generate the RSS feed
const posts = getBlogPosts();
const rss = generateRSS(posts);

fs.writeFileSync(OUTPUT_PATH, rss);
console.log('RSS feed generated successfully at', OUTPUT_PATH);
console.log('Total posts included:', posts.length); 
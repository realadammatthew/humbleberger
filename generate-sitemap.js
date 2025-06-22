const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'src', 'pages');
const HEBREW_PAGES_DIR = path.join(__dirname, 'src', 'pages', 'he');
const BLOG_DIR = path.join(__dirname, 'src', 'copy');
const HEBREW_BLOG_DIR = path.join(__dirname, 'src', 'copy', 'he');
const OUTPUT_PATH = path.join(__dirname, 'public', 'sitemap.xml');
const SITE_URL = 'https://humbleberger.org';

// Get static page URLs (excluding special Next.js files and folders)
function getStaticPageUrls(dir, prefix = '') {
    const urls = new Set(); // Using Set to avoid duplicates
    
    function processDirectory(currentDir, baseUrl = '') {
        const files = fs.readdirSync(currentDir);
        
        files.forEach(file => {
            const filePath = path.join(currentDir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                // Skip the blog and he directories as they're handled separately
                if (file !== 'blog' && file !== 'he') {
                    processDirectory(filePath, path.join(baseUrl, file));
                }
            } else if (file.endsWith('.js') && !file.startsWith('_') && !file.includes('[')) {
                // Convert file path to URL path
                let urlPath = path.join(baseUrl, file.replace(/\.js$/, ''));
                // Skip index pages as they're handled separately
                if (urlPath !== 'index') {
                    urls.add(`${SITE_URL}${prefix}/${urlPath}`);
                }
            }
        });
    }
    
    processDirectory(dir);
    return Array.from(urls);
}

// Get blog post URLs
function getBlogPostUrls(dir, prefix = '') {
    const files = fs.readdirSync(dir);
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const slug = file.replace(/\.md$/, '');
            return `${SITE_URL}${prefix}/blog/${slug}`;
        });
}

function generateSitemap(urls) {
    // Sort URLs for consistency
    const sortedUrls = urls.sort();
    
    const urlSet = sortedUrls
        .map(url => `
    <url>
        <loc>${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>`)
        .join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${SITE_URL}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${SITE_URL}/blog</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>${SITE_URL}/he</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${SITE_URL}/he/blog</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>${urlSet}
</urlset>`;
}

// Combine all URLs and generate sitemap
const staticUrls = getStaticPageUrls(PAGES_DIR);
const hebrewStaticUrls = getStaticPageUrls(HEBREW_PAGES_DIR, '/he');
const blogUrls = getBlogPostUrls(BLOG_DIR);
const hebrewBlogUrls = getBlogPostUrls(HEBREW_BLOG_DIR, '/he');

const allUrls = [...staticUrls, ...hebrewStaticUrls, ...blogUrls, ...hebrewBlogUrls];
const sitemap = generateSitemap(allUrls);

fs.writeFileSync(OUTPUT_PATH, sitemap);
console.log('Sitemap generated successfully at', OUTPUT_PATH);
console.log('Total URLs included:', allUrls.length + 4); // +4 for home, blog, he home, and he blog

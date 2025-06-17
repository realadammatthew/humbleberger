const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'src', 'pages');
const BLOG_DIR = path.join(__dirname, 'src', 'copy');
const OUTPUT_PATH = path.join(__dirname, 'public', 'sitemap.xml');
const SITE_URL = 'https://humbleberger.org';

// Get static page URLs (excluding special Next.js files and folders)
function getStaticPageUrls() {
    const urls = new Set(); // Using Set to avoid duplicates
    
    function processDirectory(dir, baseUrl = '') {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            const relativePath = path.relative(PAGES_DIR, filePath);
            
            if (stat.isDirectory()) {
                // Skip the blog directory as we'll handle it separately
                if (file !== 'blog') {
                    processDirectory(filePath, path.join(baseUrl, file));
                }
            } else if (file.endsWith('.js') && !file.startsWith('_') && !file.includes('[')) {
                // Convert file path to URL path
                let urlPath = path.join(baseUrl, file.replace(/\.js$/, ''));
                // Skip index and blog pages as they're handled separately
                if (urlPath !== 'index' && urlPath !== 'blog') {
                    urls.add(`${SITE_URL}/${urlPath}`);
                }
            }
        });
    }
    
    processDirectory(PAGES_DIR);
    return Array.from(urls);
}

// Get blog post URLs
function getBlogPostUrls() {
    const files = fs.readdirSync(BLOG_DIR);
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const slug = file.replace(/\.md$/, '');
            return `${SITE_URL}/blog/${slug}`;
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
    </url>${urlSet}
</urlset>`;
}

// Combine all URLs and generate sitemap
const staticUrls = getStaticPageUrls();
const blogUrls = getBlogPostUrls();
const allUrls = [...staticUrls, ...blogUrls];
const sitemap = generateSitemap(allUrls);

fs.writeFileSync(OUTPUT_PATH, sitemap);
console.log('Sitemap generated successfully at', OUTPUT_PATH);
console.log('Total URLs included:', allUrls.length + 2); // +2 for home and blog index

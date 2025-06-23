# Humbleberger Ministries Website

This is the official website for [Humbleberger Ministries](https://humbleberger.org), a gospel-centered mission focused on Jewish evangelism and discipleship.

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- Markdown for blog content
- CSS (no frameworks) for clean, fast loading pages
- [Netlify](https://www.netlify.com/) for hosting and deployment
- Automatic sitemap generation
- SEO optimized
- **Bilingual support (English/Hebrew)** with react-i18next

## 🌟 Features

- Fast, static site generation
- Blog system with markdown support
- **Complete Hebrew translation** with dedicated Hebrew pages and content
- **Language switcher** for seamless English/Hebrew navigation
- Automatic sitemap generation
- Mobile-friendly responsive design
- SEO optimized with meta tags
- Clean URLs with Netlify redirects
- Custom error pages
- Cookie consent management
- Accessibility focused

## 🌐 Bilingual Support

The website features complete bilingual support with:

### Language Structure
- **English**: Default language at root URLs (e.g., `/`, `/blog`, `/mission`)
- **Hebrew**: Hebrew pages under `/he/` prefix (e.g., `/he/`, `/he/blog`, `/he/mission`)
- **Language Switcher**: Fixed position language toggle in top-right corner
- **Automatic Detection**: Language detection based on URL path

### Hebrew Content
- **Complete Hebrew Translation**: All pages, blog posts, and UI elements translated
- **Hebrew Blog Posts**: Dedicated Hebrew markdown files in `src/copy/he/`
- **Hebrew Pages**: Complete Hebrew page implementations in `src/pages/he/`
- **RTL Support**: Proper right-to-left text rendering for Hebrew content

### Internationalization
- **react-i18next**: Full internationalization framework
- **Translation Keys**: Organized translation system in `src/i18n.js`
- **Dynamic Content**: All user-facing text supports both languages
- **SEO Optimization**: Hebrew-specific meta tags and structured data

## 📄 Pages

### English Pages
- [Home](https://humbleberger.org/) - Main landing page
- [Blog](https://humbleberger.org/blog) - Articles and teachings
- [Our Mission](https://humbleberger.org/mission) - Mission statement
- [Statement of Faith](https://humbleberger.org/statement-of-faith) - Detailed theological convictions
- [Statement on Antisemitism](https://humbleberger.org/anti-semitism) - Our stance regarding Jewish identity and respect
- [Counting the Cost](https://humbleberger.org/counting-the-cost) - Article on the challenges faced by Jewish believers
- [Privacy Policy](https://humbleberger.org/privacy-policy) - Our privacy practices
- [Terms of Use](https://humbleberger.org/terms-of-use) - Website usage terms
- [Copyright](https://humbleberger.org/copyright) - Copyright information

### Hebrew Pages (עברית)
- [דף הבית](https://humbleberger.org/he/) - Main landing page in Hebrew
- [בלוג](https://humbleberger.org/he/blog) - Articles and teachings in Hebrew
- [המשימה שלנו](https://humbleberger.org/he/mission) - Mission statement in Hebrew
- [הצהרת אמונה](https://humbleberger.org/he/statement-of-faith) - Detailed theological convictions in Hebrew
- [הצהרה נגד אנטישמיות](https://humbleberger.org/he/anti-semitism) - Our stance regarding Jewish identity and respect in Hebrew
- [ספירת העלות](https://humbleberger.org/he/counting-the-cost) - Article on the challenges faced by Jewish believers in Hebrew
- [מדיניות פרטיות](https://humbleberger.org/he/privacy-policy) - Our privacy practices in Hebrew
- [תנאי שימוש](https://humbleberger.org/he/terms-of-use) - Website usage terms in Hebrew
- [זכויות יוצרים](https://humbleberger.org/he/copyright) - Copyright information in Hebrew

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/realadammatthew/humbleberger.git
   cd humbleberger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The site will be available at `http://localhost:3000`

### Build & Deploy

1. Build the project:
   ```bash
   npm run build
   ```

2. Publish the changes
   ```bash
   git add .
   git commit -m "new build"
   git push
   ```

3. Log into netlify and verify the results there and on the website.

## 📝 Content Management

### Blog Posts

Blog posts are written in Markdown format and stored in `src/copy/`. Each post should include frontmatter with metadata:

```markdown
# TITLE

**SUBTITLE**

**Humbleberger Ministries**
---

Your content here...
```

### Hebrew Blog Posts

Hebrew blog posts are stored in `src/copy/he/` and follow the same structure as English posts:

```markdown
# כותרת בעברית

**כותרת משנה בעברית**

**שירות האמבלברגר**
---

תוכן בעברית כאן...
```

**Important Notes for Hebrew Content:**
- Use proper Hebrew typography and punctuation
- Ensure RTL (right-to-left) text rendering works correctly
- Maintain consistent terminology between English and Hebrew versions
- Update both language versions when adding new content

### Adding New Pages

1. Create a new `.js` file in `src/pages/` for English
2. Create a corresponding `.js` file in `src/pages/he/` for Hebrew
3. Add translation keys to `src/i18n.js` for both languages
4. Add the page URL to the sitemap generator if needed
5. Update navigation if required

### Bilingual Content Guidelines

- **Consistency**: Ensure both language versions convey the same message
- **Cultural Sensitivity**: Adapt content appropriately for Hebrew-speaking audiences
- **SEO**: Include Hebrew-specific meta tags and keywords
- **Navigation**: Update language switcher to handle new pages
- **Testing**: Verify both language versions work correctly

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version and generate sitemap
- `npm run start` - Start production server
- `npm run generate-sitemap` - Generate sitemap.xml manually

## 🌐 Deployment

The site automatically deploys to Netlify when changes are pushed to the `main` branch. The deployment process includes:

1. Building the Next.js application
2. Generating the sitemap (includes both English and Hebrew URLs)
3. Generating RSS feeds for both languages
4. Applying Netlify redirects for clean URLs

### RSS Feeds
- **English RSS**: `https://humbleberger.org/rss.xml`
- **Hebrew RSS**: `https://humbleberger.org/rss-he.xml`

### Sitemap
The automatically generated sitemap includes all pages in both languages, ensuring proper SEO indexing for both English and Hebrew content.

## 🔢 Organization Info

- FEIN: 33-4533201
- Registered 501(c)(3) Non-Profit in North Carolina
- All donations are tax-deductible

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

All content © Humbleberger Ministries. Code is MIT licensed unless otherwise specified.

## 📞 Contact

For technical issues, please open a GitHub issue.
For ministry inquiries, please visit our [website](https://humbleberger.org).

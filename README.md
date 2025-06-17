# Humbleberger Ministries Website

This is the official website for [Humbleberger Ministries](https://humbleberger.org), a gospel-centered mission focused on Jewish evangelism and discipleship.

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- Markdown for blog content
- CSS (no frameworks) for clean, fast loading pages
- [Netlify](https://www.netlify.com/) for hosting and deployment
- Automatic sitemap generation
- SEO optimized

## 🌟 Features

- Fast, static site generation
- Blog system with markdown support
- Automatic sitemap generation
- Mobile-friendly responsive design
- SEO optimized with meta tags
- Clean URLs with Netlify redirects
- Custom error pages
- Cookie consent management
- Accessibility focused

## 📄 Pages

- [Home](https://humbleberger.org/) - Main landing page
- [Blog](https://humbleberger.org/blog) - Articles and teachings
- [Our Mission](https://humbleberger.org/mission) - Mission statement
- [Statement of Faith](https://humbleberger.org/statement-of-faith) - Detailed theological convictions
- [Statement on Antisemitism](https://humbleberger.org/anti-semitism) - Our stance regarding Jewish identity and respect
- [Counting the Cost](https://humbleberger.org/counting-the-cost) - Article on the challenges faced by Jewish believers
- [Privacy Policy](https://humbleberger.org/privacy-policy) - Our privacy practices
- [Terms of Use](https://humbleberger.org/terms-of-use) - Website usage terms
- [Copyright](https://humbleberger.org/copyright) - Copyright information

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

### Adding New Pages

1. Create a new `.js` file in `src/pages/`
2. Add the page URL to the sitemap generator if needed
3. Update navigation if required

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version and generate sitemap
- `npm run start` - Start production server
- `npm run generate-sitemap` - Generate sitemap.xml manually

## 🌐 Deployment

The site automatically deploys to Netlify when changes are pushed to the `main` branch. The deployment process includes:

1. Building the Next.js application
2. Generating the sitemap
3. Applying Netlify redirects for clean URLs

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

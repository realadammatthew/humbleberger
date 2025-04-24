# Humbleberger Ministries Website

This is the official website for [Humbleberger Ministries](https://humbleberger.org), a gospel-centered mission focused on Jewish evangelism and discipleship.

## 📖 Tech Stack

- HTML + CSS (no frameworks)
- Deployed via [Netlify](https://www.netlify.com/)
- Source hosted on GitHub

## 💡 Purpose

Proclaiming the good news of Yeshua (Jesus) to the Jewish people and the nations.

## 🌐 Live Site

[https://humbleberger.org](https://humbleberger.org)

## 📄 Pages

- [Home](https://humbleberger.org/) - Main landing page
- [Our Mission](https://humbleberger.org/mission) - Mission statement
- [Statement of Faith](https://humbleberger.org/statement-of-faith) - Detailed theological convictions
- [Statement on Antisemitism](https://humbleberger.org/anti-semitism) - Our stance regarding Jewish identity and respect
- [Counting the Cost](https://humbleberger.org/counting-the-cost) - Article on the challenges faced by Jewish believers
- [Privacy Policy](https://humbleberger.org/privacy-policy) - Our privacy practices
- [Terms of Use](https://humbleberger.org/terms-of-use) - Website usage terms
- [Copyright](https://humbleberger.org/copyright) - Copyright information

## 🔢 Organization Info

- FEIN: 33-4533201
- Registered Non-Profit in North Carolina (pending 501(c)(3) status)

## 🚀 Deploy Instructions

Just push to `main` — Netlify auto-deploys.

## 🔄 Redirects

The site uses Netlify's redirect system to provide clean URLs without file extensions:

- `/mission` redirects to `/mission.html`
- `/statement-of-faith` redirects to `/statement-of-faith.html`
- etc.

This provides a better user experience and improved SEO.

## 💻 Local Development

To test the site locally with redirect functionality:

1. Install Netlify CLI:

   ```bash
   npm install -g netlify-cli
   ```

2. Start local development server:

   ```bash
   netlify dev
   ```

3. The site will be available at http://localhost:8888 with all redirects working properly.

Alternatively, for simple content editing, you can use any static file server or open the HTML files directly in a browser (note that clean URLs won't work locally without Netlify CLI).

## 🔄 Content Updates

### Adding a New Page

1. Create a new HTML file in the root directory (e.g., `new-page.html`)
2. Copy the structure from an existing page to maintain consistency
3. Update the page title, meta description, and content
4. Add a redirect rule in `_redirects` file:
   ```
   /new-page /new-page.html 301
   ```
5. Add the new page to `sitemap.xml` with appropriate priority and change frequency

### Updating Existing Content

1. Edit the corresponding HTML file directly
2. Test locally before pushing changes
3. If changing URLs, update the `_redirects` file and `sitemap.xml` accordingly

### Adding Navigation Links

When adding a new page that should appear in navigation:

1. Update links in `index.html` for primary navigation
2. Consider adding links in the footer if appropriate
3. Always use clean URLs in links (e.g., `/new-page` not `/new-page.html`)

## 🔌 Dependencies

- Google Analytics (GA4) - For website traffic analytics
- Google Tag Manager - For managing analytics tags
- Google Fonts - Served from Google CDN (Inter and Noto Sans Hebrew)

## 🔍 SEO & Analytics

### SEO Approach

- Clean URL structure without .html extensions
- Descriptive page titles and meta descriptions
- Structured sitemap.xml with priorities
- Proper robots.txt configuration
- Mobile-responsive design
- Semantic HTML structure

### Analytics Access

Google Analytics dashboard: [https://analytics.google.com/](https://analytics.google.com/)

- Login required; contact admin for access
- Tracking ID: G-TXRL0573M2

## 🌐 Browser Compatibility

The website has been tested and is compatible with:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari and Chrome
- Android Chrome and Firefox

## 📧 Contact Information

For technical issues or website maintenance:

- Email: [shalom@humbleberger.org](mailto:shalom@humbleberger.org)
- Subject line: "Website Technical Support"

Primary maintainer: Daniel J. Cross

## ⚖️ License Information

© 2025 Humbleberger Ministries. All rights reserved.

- The website code structure may be used as a template under the MIT License
- All content, including text, images, and logos are proprietary and may not be reused without permission
- For content usage requests, please email [shalom@humbleberger.org](mailto:shalom@humbleberger.org)

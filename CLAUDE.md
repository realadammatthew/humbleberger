# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (English/Hebrew) Next.js static website for Humbleberger Ministries, a gospel-centered mission focused on Jewish outreach and discipleship. The site features complete Hebrew translation with RTL support, markdown-based blog content, and automated deployment to Netlify.

## Key Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm install` - Install dependencies

### Building and Deployment
- `npm run build` - Build production version, export static files, generate sitemap, RSS feeds, and ebooks
- `npm run start` - Start production server (after build)

### Individual Generation Scripts
- `npm run generate-sitemap` - Generate sitemap.xml with both English and Hebrew URLs
- `npm run generate-rss` - Generate RSS feeds for both languages (rss.xml and rss-he.xml)
- `npm run generate-ebooks` - Generate downloadable ebooks using Puppeteer

### Publishing Workflow
1. `npm run build`
2. `git add .`
3. `git commit -m "new build"`
4. `git push`
5. Verify deployment on Netlify and live site

## Architecture

### Bilingual Structure
- **English pages**: Root level (`/`, `/blog`, `/mission`)
- **Hebrew pages**: Under `/he/` prefix (`/he/`, `/he/blog`, `/he/mission`)
- **Content mirroring**: Every English page has a Hebrew equivalent
- **Language detection**: Based on URL path structure
- **Language switcher**: Fixed position toggle in top-right corner

### Directory Structure
- `src/pages/` - English page components
- `src/pages/he/` - Hebrew page components (mirrors English structure)
- `src/copy/` - English markdown blog posts
- `src/copy/he/` - Hebrew markdown blog posts (mirrors English structure)
- `src/components/` - Shared React components
- `src/i18n.js` - i18next configuration with translation keys (large file)

### Key Technologies
- **Next.js 12** with static export
- **react-i18next** for internationalization
- **gray-matter** and **marked** for markdown processing
- **Puppeteer** for ebook generation
- **Archiver** for ZIP file creation

### Content Management
- Blog posts are markdown files with specific frontmatter format
- Both languages must be maintained in parallel
- Sitemap automatically includes all pages in both languages
- RSS feeds generated for both languages

### Deployment
- **Netlify** hosting with automatic deployment from main branch
- Build process includes static export, sitemap, RSS, and ebook generation
- Security headers configured in netlify.toml
- Client-side routing handled via Netlify redirects

### Hebrew Content Considerations
- RTL text rendering support
- Hebrew-specific typography and punctuation
- Cultural adaptation while maintaining message consistency
- Hebrew SEO optimization with appropriate meta tags

## Development Notes

- No test framework is configured - verify functionality manually
- No linting is configured - follow existing code style
- Images are unoptimized (configured for static export)
- Content Security Policy configured for Google Analytics and YouTube embeds
- Form handling via Netlify Forms (contact form)
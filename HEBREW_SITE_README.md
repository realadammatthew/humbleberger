# Hebrew Site Structure

## Overview
This project now includes a dedicated Hebrew version of the website accessible at `/he` routes. The Hebrew site provides proper RTL (right-to-left) layout and native Hebrew content.

## Structure

### Hebrew Pages Created
- `/he` - Hebrew home page
- `/he/blog` - Hebrew blog listing
- `/he/blog/[id]` - Hebrew individual blog posts
- `/he/contact` - Hebrew contact page
- `/he/contact-success` - Hebrew contact success page
- `/he/mission` - Hebrew mission page

### Language Switcher
A language switcher component has been added to both English and Hebrew pages, allowing users to easily switch between languages. The switcher appears in the top-left corner of each page.

## Features

### RTL Support
- All Hebrew pages use `direction: 'rtl'` and `textAlign: 'right'`
- Proper Hebrew text flow and layout
- Maintains consistent styling with the English version

### Navigation
- Hebrew pages link to other Hebrew pages (e.g., `/he/blog`, `/he/contact`)
- Language switcher allows easy navigation between English and Hebrew versions
- Maintains proper referrer tracking for blog posts

### Content
- All text content has been translated to Hebrew
- Maintains the same structure and functionality as English pages
- Uses the same markdown content files for blog posts

## Implementation Details

### File Structure
```
src/pages/
├── index.js (English home)
├── blog.js (English blog)
├── contact.js (English contact)
├── mission.js (English mission)
└── he/
    ├── index.js (Hebrew home)
    ├── blog.js (Hebrew blog)
    ├── blog/
    │   └── [id].js (Hebrew blog posts)
    ├── contact.js (Hebrew contact)
    ├── contact-success.js (Hebrew contact success)
    └── mission.js (Hebrew mission)
```

### Components
- `LanguageSwitcher` - Allows switching between English and Hebrew
- All existing components work with both languages
- RTL styling applied at the page level

### Styling
- Hebrew pages include inline RTL styles
- Maintains consistent visual design
- Responsive design works for both languages

## Usage

### For Users
1. Visit any page on the site
2. Click the language switcher in the top-left corner
3. Choose between English (🇺🇸) or Hebrew (🇮🇱)
4. Navigate seamlessly between language versions

### For Developers
To add a new Hebrew page:
1. Create the English version first
2. Create the Hebrew version in `src/pages/he/`
3. Add the `LanguageSwitcher` component
4. Apply RTL styling: `style={{ direction: 'rtl', textAlign: 'right' }}`
5. Translate all text content to Hebrew
6. Update internal links to point to Hebrew versions

## Benefits
- **Better SEO** - Dedicated Hebrew pages for search engines
- **Improved UX** - Native Hebrew content and layout
- **Accessibility** - Proper RTL support for Hebrew readers
- **Maintainability** - Clear separation between languages
- **Performance** - No translation API calls needed

## Future Enhancements
- Add Hebrew-specific meta tags and SEO
- Create Hebrew versions of additional pages
- Add Hebrew-specific content and cultural adaptations
- Implement Hebrew-specific analytics tracking 
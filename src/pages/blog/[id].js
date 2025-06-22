import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import withBanner from '../../utils/with-banner';
import ReturnToBlogPosts from '../../components/return-to-blog-posts';
import CallToActionButtons from '../../components/call-to-action-buttons';

const Post = ({ content, data, hebrewContent, hebrewData }) => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();
  const [referrer, setReferrer] = useState(null);
  const router = useRouter();

  // Use Hebrew content if available and we're on Hebrew page
  const displayContent = isHebrew && hebrewContent ? hebrewContent : content;
  const displayData = isHebrew && hebrewData ? hebrewData : data;

  useEffect(() => {
    // Check URL parameters for referrer information
    if (router.query.from === "encountering-messiah") {
      setReferrer("/encountering-messiah");
    } else if (router.query.from === "home") {
      setReferrer("/");
    }
  }, [router.query.from]);

  return (
    <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <section>
        <header className="blog-post-header">
          <h2 className="blog-post-title big-title">{displayData.title}</h2>
          {displayData.date && <div className="blog-post-date">{displayData.date}</div>}
        </header>
        <article className="blog-post-article">
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: marked(displayContent) }} />
          <CallToActionButtons />
        </article>
      </section>
      <ReturnToBlogPosts referrer={referrer} />
    </main>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src', 'copy'))
    .filter(filename => filename.endsWith('.md')); // Only include .md files, not directories
  const paths = files.map((filename) => ({
    params: {
      id: filename.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  // Load English content
  const markdownWithMeta = fs.readFileSync(path.join('src', 'copy', id + '.md'), 'utf-8');
  const { data, content } = matter(markdownWithMeta);
  
  // Get first non-empty line, remove leading # and whitespace
  const firstLine = content.split('\n').find(line => line.trim().length > 0) || '';
  const mdTitle = firstLine.replace(/^#+\s*/, '');
  
  // Remove the first heading from the content
  const contentWithoutTitle = content
    .split('\n')
    .slice(1) // Skip the first line (title)
    .join('\n')
    .trim(); // Remove any extra whitespace

  // Try to load Hebrew content if it exists
  let hebrewContent = null;
  let hebrewData = null;
  
  try {
    const hebrewPath = path.join('src', 'copy', 'he', id + '.md');
    if (fs.existsSync(hebrewPath)) {
      const hebrewMarkdownWithMeta = fs.readFileSync(hebrewPath, 'utf-8');
      const { data: hebrewDataFromFile, content: hebrewContentFromFile } = matter(hebrewMarkdownWithMeta);
      
      // Get first non-empty line, remove leading # and whitespace
      const hebrewFirstLine = hebrewContentFromFile.split('\n').find(line => line.trim().length > 0) || '';
      const hebrewMdTitle = hebrewFirstLine.replace(/^#+\s*/, '');
      
      // Remove the first heading from the content
      const hebrewContentWithoutTitle = hebrewContentFromFile
        .split('\n')
        .slice(1) // Skip the first line (title)
        .join('\n')
        .trim(); // Remove any extra whitespace

      hebrewContent = hebrewContentWithoutTitle;
      hebrewData = { ...hebrewDataFromFile, title: hebrewMdTitle || hebrewDataFromFile.title || id };
    }
  } catch (error) {
    console.log(`Hebrew version not found for ${id}`);
  }
    
  return {
    props: {
      content: contentWithoutTitle,
      data: { ...data, title: mdTitle || data.title || id },
      hebrewContent,
      hebrewData,
    },
  };
}

export default withBanner(Post);

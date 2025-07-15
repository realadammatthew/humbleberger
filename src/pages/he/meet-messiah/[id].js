import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import withBanner from '../../../utils/with-banner';
import GoogleAdsCTAs from '../../../components/google-ads-ctas';
import ReturnToHome from '../../../components/return-to-home';

const HebrewAdvertisement = ({ content, data }) => {
  return (
    <main style={{ direction: 'rtl', textAlign: 'right' }}>
      <section>
        <header className="blog-post-header">
          <h2 className="blog-post-title big-title">{data.title}</h2>
          {data.date && <div className="blog-post-date">{data.date}</div>}
        </header>
        <article className="blog-post-article">
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: marked(content) }} />
          <GoogleAdsCTAs />
        </article>
      </section>
      <ReturnToHome />
    </main>
  );
};

export async function getStaticPaths() {
  // Get all available files from both Hebrew and English ads directories
  const hebrewAdsPath = path.join('src', 'ads', 'he');
  const englishAdsPath = path.join('src', 'ads');
  
  let files = [];
  
  // Try to read Hebrew files first
  try {
    files = fs.readdirSync(hebrewAdsPath);
  } catch (error) {
    // If Hebrew directory doesn't exist, fall back to English
    files = fs.readdirSync(englishAdsPath);
  }
  
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
  // Try Hebrew file first, then fall back to English
  const hebrewCopyPath = path.join('src', 'ads', 'he');
  const englishCopyPath = path.join('src', 'ads');
  
  let markdownWithMeta;
  try {
    markdownWithMeta = fs.readFileSync(path.join(hebrewCopyPath, id + '.md'), 'utf-8');
  } catch (error) {
    markdownWithMeta = fs.readFileSync(path.join(englishCopyPath, id + '.md'), 'utf-8');
  }
  
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
    
  return {
    props: {
      content: contentWithoutTitle,
      data: { ...data, title: mdTitle || data.title || id },
    },
  };
}

export default withBanner(HebrewAdvertisement); 
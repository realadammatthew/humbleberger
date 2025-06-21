import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import withBanner from '../../utils/with-banner';
import Link from 'next/link';

const Post = ({ content, data }) => {
  return (
    <div className="blog-post-container">
      <header className="blog-post-header">
        <h1 className="blog-post-title big-title">{data.title}</h1>
        {data.date && <div className="blog-post-date">{data.date}</div>}
      </header>
      <article className="blog-post-article">
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: marked(content) }} />
        <div className="blog-post-ctas">
          <a className="button" href="https://chat.humbleberger.org/en?translation=csb" target="_blank" rel="noopener noreferrer">💬 Chat</a>
          <a className="button" href="https://eepurl.com/ja6zNY" target="_blank" rel="noopener noreferrer">📰 Subscribe</a>
          <a className="button" href="https://donorbox.org/humbleberger-ministries" target="_blank" rel="noopener noreferrer">❤️ Donate</a>
        </div>
      </article>
      <nav className="blog-post-nav">
        <Link href="/blog" legacyBehavior>
          <a className="blog-post-back">← View Blog Posts</a>
        </Link>
        <br />
        <Link href="/" legacyBehavior>
          <a className="blog-post-back">← Return to Home</a>
        </Link>
      </nav>
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src', 'copy'));
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
    
  return {
    props: {
      content: contentWithoutTitle,
      data: { ...data, title: mdTitle || data.title || id },
    },
  };
}

export default withBanner(Post);

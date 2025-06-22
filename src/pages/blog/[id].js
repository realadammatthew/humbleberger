import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import withBanner from '../../utils/with-banner';
import ReturnToBlogPosts from '../../components/return-to-blog-posts';
import CallToActionButtons from '../../components/call-to-action-buttons';

const Post = ({ content, data }) => {
  const [referrer, setReferrer] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check URL parameters for referrer information
    if (router.query.from === "encountering-messiah") {
      setReferrer("/encountering-messiah");
    } else if (router.query.from === "home") {
      setReferrer("/");
    }
  }, [router.query.from]);

  return (
    <main>
      <section>
        <header className="blog-post-header">
          <h2 className="blog-post-title big-title">{data.title}</h2>
          {data.date && <div className="blog-post-date">{data.date}</div>}
        </header>
        <article className="blog-post-article">
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: marked(content) }} />
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

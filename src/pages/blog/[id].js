import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import withBanner from '../../utils/with-banner';
import Link from 'next/link';

const Post = ({ content, data }) => {
  return (
    <div className="blog-post-container">
      <article className="blog-post-article">
        <h1 className="blog-post-title">{data.title}</h1>
        {data.date && <div className="blog-post-date">{data.date}</div>}
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </article>
      <nav className="blog-post-nav">
        <Link href="/blog" legacyBehavior>
          <a className="blog-post-back">← Blog Posts</a>
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
  return {
    props: {
      content,
      data: data || {},
    },
  };
}

export default withBanner(Post);

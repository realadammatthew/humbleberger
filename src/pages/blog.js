import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import withBanner from '../utils/with-banner';
import Link from 'next/link';

const BlogPage = ({ posts }) => (
  <div className="blog-list-container">
    <h1 className="blog-list-title">Blog Posts</h1>
    <div className="blog-card-list">
      {posts.map(post => (
        <Link href={`/blog/${post.slug}`} key={post.slug} legacyBehavior>
          <a className="blog-card">
            <div className="blog-card-content">
              <h2 className="blog-card-title">{post.title}</h2>
              {post.date && (
                <div className="blog-card-date">{post.date}</div>
              )}
              {post.excerpt && (
                <p className="blog-card-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              )}
            </div>
          </a>
        </Link>
      ))}
    </div>
    <p></p>
    <nav style={{ marginBottom: '2rem', display: 'flex', gap: '1.5rem' }}>
      <Link href="/" legacyBehavior>
        <a style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>← Return to Home</a>
      </Link>
    </nav>
  </div>
);

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('src', 'copy'));
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('src', 'copy', filename), 'utf-8');
    const { data, content } = matter(markdownWithMeta);

    // Get all non-empty lines
    const contentLines = content.split('\n').filter(line => line.trim().length > 0);
    
    // First line is the title (without the #)
    const mdTitle = contentLines[0].replace(/^#+\s*/, '');
    
    // Second line is the subtitle/excerpt (without any markdown)
    const excerpt = contentLines[1] ? contentLines[1].replace(/\*\*/g, '') : '';

    return {
      slug,
      title: mdTitle || data.title || slug,
      date: data.date || '',
      excerpt: excerpt
    };
  });
  // Sort by date descending if available
  posts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  return {
    props: {
      posts,
    },
  };
}

export default withBanner(BlogPage);

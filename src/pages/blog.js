import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import withBanner from '../utils/with-banner';
import ReturnToHome from '../components/return-to-home';
import Link from 'next/link';
import CallToActionButtons from '../components/call-to-action-buttons';

const BlogPage = ({ posts }) => (
  <main>
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 className="blog-list-title">Blog Posts</h2>
        <a 
          href="/rss.xml" 
          style={{ 
            color: '#ffd700', 
            textDecoration: 'none', 
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          title="Subscribe to RSS Feed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M5.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z"/>
          </svg>
        </a>
      </div>
      <div className="toc-list">
        {posts.map(post => (
          <Link href={`/blog/${post.slug}`} key={post.slug} legacyBehavior>
            <a className="toc-item">
              <div className="toc-item-content">
                <h3 className="toc-item-title">{post.title}</h3>
                {post.excerpt && (
                  <p className="toc-item-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                )}
              </div>
            </a>
          </Link>
        ))}
      </div>
      <CallToActionButtons />
    </section>
    <ReturnToHome />
  </main>
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
  // Sort by date descending if available, but keep "Who is Yeshua?" at the top
  const whoIsYeshuaPost = posts.find(post => post.slug === 'who-is-yeshua');
  const otherPosts = posts.filter(post => post.slug !== 'who-is-yeshua');

  otherPosts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  const sortedPosts = whoIsYeshuaPost ? [whoIsYeshuaPost, ...otherPosts] : otherPosts;

  return {
    props: {
      posts: sortedPosts,
    },
  };
}

export default withBanner(BlogPage);

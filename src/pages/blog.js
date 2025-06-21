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
      <h2 className="blog-list-title">Blog Posts</h2>
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

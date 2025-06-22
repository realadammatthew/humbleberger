import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import withBanner from '../../utils/with-banner';
import ReturnToHome from '../../components/return-to-home';
import Search from '../../components/search';
import Pagination from '../../components/pagination';
import Link from 'next/link';
import CallToActionButtons from '../../components/call-to-action-buttons';
import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

const POSTS_PER_PAGE = 10;

const HebrewBlogPage = ({ posts, currentPage = 1, totalPages = 1, allPosts }) => {
  const router = useRouter();
  const [displayedPosts, setDisplayedPosts] = useState(posts);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Update displayed posts when posts prop changes (for pagination)
  useEffect(() => {
    if (!isSearchActive) {
      setDisplayedPosts(posts);
    }
  }, [posts, isSearchActive]);

  const handleSearchResults = useCallback((results) => {
    setDisplayedPosts(results);
    setIsSearchActive(results.length !== allPosts.length);
  }, [allPosts.length]);

  const handleSearchClear = useCallback(() => {
    setIsSearchActive(false);
    setDisplayedPosts(posts);
  }, [posts]);

  return (
    <main style={{ direction: 'rtl', textAlign: 'right' }}>
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 className="blog-list-title">פוסטים בבלוג</h2>
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
            title="הירשמו ל-RSS Feed"
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
        
        <Search posts={allPosts} onSearchResults={handleSearchResults} onSearchClear={handleSearchClear} />
        
        <div className="toc-list">
          {displayedPosts.map(post => (
            <Link href={`/he/blog/${post.slug}`} key={post.slug} legacyBehavior>
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

        {/* Show pagination only when not searching and there are multiple pages */}
        {!isSearchActive && totalPages > 1 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            baseUrl="/he/blog"
          />
        )}

        <CallToActionButtons />
      </section>
      <ReturnToHome />
    </main>
  );
};

export async function getStaticProps({ params }) {
  // Read from Hebrew copy directory
  const hebrewCopyPath = path.join('src', 'copy', 'he');
  const englishCopyPath = path.join('src', 'copy');
  
  let files = [];
  
  // Try to read Hebrew files first
  try {
    files = fs.readdirSync(hebrewCopyPath);
  } catch (error) {
    // If Hebrew directory doesn't exist, fall back to English
    files = fs.readdirSync(englishCopyPath);
  }
  
  const allPosts = files.map(filename => {
    const slug = filename.replace('.md', '');
    
    // Try Hebrew file first, then fall back to English
    let markdownWithMeta;
    try {
      markdownWithMeta = fs.readFileSync(path.join(hebrewCopyPath, filename), 'utf-8');
    } catch (error) {
      markdownWithMeta = fs.readFileSync(path.join(englishCopyPath, filename), 'utf-8');
    }
    
    const { data, content } = matter(markdownWithMeta);

    // Get all non-empty lines
    const contentLines = content.split('\n').filter(line => line.trim().length > 0);
    
    // First line is the title (without the #)
    const mdTitle = contentLines[0] ? contentLines[0].replace(/^#+\s*/, '') : (data.title || slug);
    
    // Second line is the subtitle/excerpt (without any markdown)
    const excerpt = contentLines[1] ? contentLines[1].replace(/\*\*/g, '') : '';

    return {
      slug,
      title: mdTitle,
      date: data.date || '',
      excerpt: excerpt,
      content: content // Include full content for search
    };
  });

  // Sort by date descending if available, but keep "Who is Yeshua?" at the top
  const whoIsYeshuaPost = allPosts.find(post => post.slug === 'who-is-yeshua');
  const otherPosts = allPosts.filter(post => post.slug !== 'who-is-yeshua');

  otherPosts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  const sortedPosts = whoIsYeshuaPost ? [whoIsYeshuaPost, ...otherPosts] : otherPosts;

  // Calculate pagination
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const currentPage = 1; // This is always page 1 for the main blog page

  // Get posts for current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const posts = sortedPosts.slice(startIndex, endIndex);

  return {
    props: {
      posts,
      currentPage,
      totalPages,
      allPosts: sortedPosts, // Pass all posts for search functionality
    },
  };
}

export default withBanner(HebrewBlogPage); 
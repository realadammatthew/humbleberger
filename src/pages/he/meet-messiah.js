import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useRouter } from 'next/router';
import path from 'path';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import ReturnToHome from '../../components/return-to-home';
import GoogleAdsCTAs from '../../components/google-ads-ctas';
import { useLanguage } from '../../hooks/useLanguage';
import withBanner from '../../utils/with-banner';

const ITEMS_PER_LOAD = 5; // Load 5 items at a time

const MeetMessiahPage = ({ allPosts }) => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();
  const router = useRouter();
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();
  const loadingRef = useRef();

  // Initialize with first batch of posts
  useEffect(() => {
    setDisplayedPosts(allPosts.slice(0, ITEMS_PER_LOAD));
  }, [allPosts]);

  // Intersection Observer for lazy loading
  const lastPostRef = useCallback(node => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && visibleCount < allPosts.length) {
        setIsLoading(true);
        // Simulate loading delay
        setTimeout(() => {
          const newCount = Math.min(visibleCount + ITEMS_PER_LOAD, allPosts.length);
          setVisibleCount(newCount);
          setDisplayedPosts(allPosts.slice(0, newCount));
          setIsLoading(false);
        }, 500);
      }
    });
    if (node) observerRef.current.observe(node);
  }, [visibleCount, allPosts]);

  return (
    <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <h2 className='blog-list-title' style={{ fontSize: '2.5rem', margin: 0 }}>
            {t('meetMessiah.title')}
          </h2>
        </div>

        <div className='ads-list' style={{ maxWidth: '800px', margin: '0 auto' }}>
          {displayedPosts.map((post, index) => (
            <div
              key={post.slug}
              ref={index === displayedPosts.length - 1 ? lastPostRef : null}
              style={{
                marginBottom: '2rem',
                padding: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.2s ease-in-out',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Link
                href={isHebrew ? `/he/meet-messiah/${post.slug}` : `/meet-messiah/${post.slug}`}
                legacyBehavior
              >
                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 
                    className='ads-item-title' 
                    style={{ 
                      fontSize: '1.5rem', 
                      marginBottom: '0.5rem',
                      color: '#ffd700',
                      fontWeight: 'bold'
                    }}
                  >
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p
                      className='ads-item-excerpt'
                      style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        color: '#e0e0e0',
                        marginBottom: '1rem'
                      }}
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                  )}
                                     <div style={{ 
                     display: 'flex', 
                     alignItems: 'center', 
                     color: '#ccc',
                     fontSize: '0.9rem'
                   }}>
                     <span>{t('meetMessiah.readMore')}</span>
                   </div>
                </a>
              </Link>
            </div>
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div 
              ref={loadingRef}
              style={{
                textAlign: 'center',
                padding: '2rem',
                color: '#ccc'
              }}
            >
              <div style={{ 
                display: 'inline-block',
                width: '20px',
                height: '20px',
                border: '2px solid #ccc',
                borderTop: '2px solid #ffd700',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}></div>
                             <p style={{ marginTop: '1rem' }}>{t('meetMessiah.loading')}</p>
            </div>
          )}
          
          {/* End of content indicator */}
          {visibleCount >= allPosts.length && allPosts.length > 0 && (
                         <div style={{
               textAlign: 'center',
               padding: '2rem',
               color: '#ccc',
               borderTop: '1px solid rgba(255, 255, 255, 0.1)',
               marginTop: '2rem'
             }}>
               <p>{t('meetMessiah.endOfContent')}</p>
             </div>
          )}
        </div>

        {/* Google Ads CTAs */}
        <GoogleAdsCTAs />
      </section>
      <ReturnToHome />
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
};

export async function getStaticProps({ params }) {
  const files = fs
    .readdirSync(path.join('src', 'ads', 'he'))
    .filter((filename) => filename.endsWith('.md')); // Only include .md files, not directories
  const allPosts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('src', 'ads', 'he', filename),
      'utf-8'
    );
    const { data, content } = matter(markdownWithMeta);

    // Get all non-empty lines
    const contentLines = content
      .split('\n')
      .filter((line) => line.trim().length > 0);

    // First line is the title (without the #)
    const mdTitle = contentLines[0]
      ? contentLines[0].replace(/^#+\s*/, '')
      : '';

    // Second line is the subtitle/excerpt (now: first line starting with ## )
    let excerpt = '';
    for (const line of contentLines) {
      if (line.startsWith('## ')) {
        excerpt = line.substring(3).trim();
        break;
      }
    }

    return {
      slug,
      title: mdTitle || data.title || slug,
      date: data.date || '',
      excerpt: excerpt,
      content: content, // Include full content for search
    };
  });

  // Sort by date descending if available, but keep "Who is Yeshua?" at the top
  const whoIsYeshuaPost = allPosts.find(
    (post) => post.slug === 'who-is-yeshua'
  );
  const otherPosts = allPosts.filter((post) => post.slug !== 'who-is-yeshua');

  otherPosts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  const sortedPosts = whoIsYeshuaPost
    ? [whoIsYeshuaPost, ...otherPosts]
    : otherPosts;

  return {
    props: {
      allPosts: sortedPosts,
    },
  };
}

export default withBanner(MeetMessiahPage);

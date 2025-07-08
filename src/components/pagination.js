import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const Pagination = ({ currentPage, totalPages, baseUrl = '/blog' }) => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  if (totalPages <= 1) return null;

  const getPageUrl = (page) => {
    // Check if we're on a Hebrew page by looking at the current path
    const isHebrewPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/he');
    
    let hebrewBaseUrl;
    if (isHebrewPage) {
      // If the baseUrl already starts with /he, don't add it again
      hebrewBaseUrl = baseUrl.startsWith('/he') ? baseUrl : `/he${baseUrl}`;
    } else {
      hebrewBaseUrl = baseUrl;
    }
    
    if (page === 1) return hebrewBaseUrl;
    return `${hebrewBaseUrl}/page/${page}`;
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(
        <Link href={getPageUrl(1)} key="first" legacyBehavior>
          <a className="pagination-page">1</a>
        </Link>
      );
      if (startPage > 2) {
        pages.push(<span key="ellipsis1" className="pagination-ellipsis">...</span>);
      }
    }

    // Add visible page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Link href={getPageUrl(i)} key={i} legacyBehavior>
          <a className={`pagination-page ${i === currentPage ? 'pagination-page-active' : ''}`}>
            {i}
          </a>
        </Link>
      );
    }

    // Add last page and ellipsis if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="ellipsis2" className="pagination-ellipsis">...</span>);
      }
      pages.push(
        <Link href={getPageUrl(totalPages)} key="last" legacyBehavior>
          <a className="pagination-page">{totalPages}</a>
        </Link>
      );
    }

    return pages;
  };

  // Determine if we're on a Hebrew page for the display text
  const isHebrewPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/he');

  return (
    <nav className="pagination" aria-label={t('pagination.ariaLabel')} style={{ direction: isHebrewPage ? 'rtl' : 'ltr' }}>
      <div className="pagination-container">
        {/* Previous button */}
        {currentPage > 1 && (
          <Link href={getPageUrl(currentPage - 1)} legacyBehavior>
            <a className="pagination-nav pagination-prev" aria-label={t('pagination.prevAria')}>
              {t('pagination.previous')}
            </a>
          </Link>
        )}
        
        {/* Page numbers */}
        <div className="pagination-pages">
          {renderPageNumbers()}
        </div>
        
        {/* Next button */}
        {currentPage < totalPages && (
          <Link href={getPageUrl(currentPage + 1)} legacyBehavior>
            <a className="pagination-nav pagination-next" aria-label={t('pagination.nextAria')}>
              {t('pagination.next')}
            </a>
          </Link>
        )}
      </div>
      
      {/* Page info */}
      <div className="pagination-info">
        {t('pagination.page')} {currentPage} {t('pagination.of')} {totalPages}
      </div>
    </nav>
  );
};

export default Pagination; 
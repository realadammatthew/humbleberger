import { useState, useEffect } from 'react';

const Search = ({ posts, onSearchResults, onSearchClear }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      onSearchResults(posts);
      if (onSearchClear) {
        onSearchClear();
      }
      return;
    }

    setIsSearching(true);
    
    // Simple search implementation - you can enhance this with more sophisticated search logic
    const results = posts.filter(post => {
      const searchLower = searchTerm.toLowerCase();
      const titleMatch = post.title.toLowerCase().includes(searchLower);
      const excerptMatch = post.excerpt && post.excerpt.toLowerCase().includes(searchLower);
      const contentMatch = post.content && post.content.toLowerCase().includes(searchLower);
      
      return titleMatch || excerptMatch || contentMatch;
    });

    setSearchResults(results);
    onSearchResults(results);
    setIsSearching(false);
  }, [searchTerm, posts, onSearchResults, onSearchClear]);

  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    onSearchResults(posts);
    if (onSearchClear) {
      onSearchClear();
    }
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </div>
        {isSearching && (
          <div className="search-loading">
            <div className="spinner"></div>
          </div>
        )}
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="search-clear"
            aria-label="Clear search"
            title="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        )}
      </div>
      {searchTerm && (
        <div className="search-results-info">
          {searchResults.length === 0 ? (
            <p>No posts found for "{searchTerm}"</p>
          ) : (
            <p>Found {searchResults.length} post{searchResults.length !== 1 ? 's' : ''} for "{searchTerm}"</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search; 
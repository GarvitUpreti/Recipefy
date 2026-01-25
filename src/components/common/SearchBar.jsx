import React, { useState } from 'react';

const SearchBar = ({
  placeholder = 'Search recipes...',
  onSearch,
  initialValue = '',
  className = '',
}) => {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 sm:pl-12 pr-14 sm:pr-24 py-3 sm:py-4 text-base text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        />
        
        {/* Search Icon */}
        <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-12 sm:right-20 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600 active:text-gray-800 transition-colors touch-manipulation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* Search Button - Icon on mobile, text on larger screens */}
        <button
          type="submit"
          className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 p-2.5 sm:px-4 sm:py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 active:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 touch-manipulation"
        >
          {/* Icon for mobile */}
          <svg
            className="w-5 h-5 sm:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {/* Text for larger screens */}
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </form>
  );
};

export const SearchBarCompact = ({
  placeholder = 'Search...',
  onSearch,
  initialValue = '',
}) => {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition-all duration-200"
      />
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </form>
  );
};

export default SearchBar;

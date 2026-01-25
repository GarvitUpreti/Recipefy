import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/common';
import { MealList } from '../components/meal';
import { searchMealByName, getMealsByFirstLetter } from '../services/mealApi';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedLetter, setSelectedLetter] = useState(searchParams.get('letter') || '');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  useEffect(() => {
    const query = searchParams.get('q');
    const letter = searchParams.get('letter');

    if (query) {
      handleSearch(query);
    } else if (letter) {
      handleLetterFilter(letter);
    } else {
      // Load some default meals
      handleSearch('');
    }
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setSelectedLetter('');
    setLoading(true);
    
    if (query) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }

    try {
      const results = await searchMealByName(query || 'a');
      setMeals(results);
    } catch (error) {
      console.error('Search error:', error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLetterFilter = async (letter) => {
    setSelectedLetter(letter);
    setSearchQuery('');
    setLoading(true);
    setSearchParams({ letter });

    try {
      const results = await getMealsByFirstLetter(letter.toLowerCase());
      setMeals(results);
    } catch (error) {
      console.error('Filter error:', error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
          Search Recipes
        </h1>
        <p className="text-gray-600">
          Find your favorite meals by name or browse alphabetically
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar
        placeholder="Search for meals..."
        onSearch={handleSearch}
        initialValue={searchQuery}
        className="mb-8"
      />

      {/* Alphabet Filter */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
          Browse by Letter
        </h2>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterFilter(letter)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg font-medium text-sm sm:text-base transition-all touch-manipulation ${
                selectedLetter === letter
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 sm:mb-6">
          <h2 className="section-title text-lg sm:text-2xl">
            {selectedLetter
              ? `Meals starting with "${selectedLetter}"`
              : searchQuery
              ? `Results for "${searchQuery}"`
              : 'All Recipes'}
          </h2>
          {!loading && meals.length > 0 && (
            <span className="text-gray-500 text-sm">{meals.length} recipes found</span>
          )}
        </div>

        <MealList
          meals={meals}
          loading={loading}
          emptyMessage={
            searchQuery
              ? `No meals found for "${searchQuery}". Try a different search term.`
              : selectedLetter
              ? `No meals found starting with "${selectedLetter}".`
              : 'No meals found.'
          }
        />
      </div>
    </div>
  );
};

export default Search;

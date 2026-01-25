import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/common';
import { MealList } from '../components/meal';
import { CategoryCard } from '../components/category';
import { searchMealByName, getAllCategories, getRandomMeal } from '../services/mealApi';

const Home = () => {
  const [featuredMeal, setFeaturedMeal] = useState(null);
  const [categories, setCategories] = useState([]);
  const [popularMeals, setPopularMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(null);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [random, cats, chicken] = await Promise.all([
          getRandomMeal(),
          getAllCategories(),
          searchMealByName('chicken'),
        ]);
        setFeaturedMeal(random);
        setCategories(cats.slice(0, 6));
        setPopularMeals(chicken.slice(0, 8));
      } catch (error) {
        console.error('Error fetching home data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (query) => {
    if (!query) {
      setSearchResults(null);
      return;
    }
    
    setSearching(true);
    try {
      const results = await searchMealByName(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setSearching(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 sm:mb-6 animate-fade-in">
              Discover Delicious
              <span className="block text-accent-300">Recipes</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-10 px-2">
              Explore thousands of recipes from around the world. Find your next favorite meal!
            </p>
            
            <SearchBar
              placeholder="Search for any meal..."
              onSearch={handleSearch}
              className="max-w-2xl mx-auto px-2 sm:px-0"
            />
          </div>
        </div>
      </section>

      <div className="page-container">
        {/* Search Results */}
        {searchResults !== null && (
          <section className="mb-12 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="section-title">Search Results</h2>
              <button
                onClick={() => setSearchResults(null)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear results
              </button>
            </div>
            <MealList meals={searchResults} loading={searching} />
          </section>
        )}

        {/* Featured Meal */}
        {!searchResults && featuredMeal && (
          <section className="mb-8 sm:mb-12 animate-slide-up">
            <h2 className="section-title mb-4 sm:mb-6">Featured Recipe</h2>
            <Link to={`/meal/${featuredMeal.idMeal}`} className="block group">
              <div className="card overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img
                      src={featuredMeal.strMealThumb}
                      alt={featuredMeal.strMeal}
                      className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-500 sm:group-hover:scale-105"
                    />
                  </div>
                  <div className="md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {featuredMeal.strCategory && (
                        <span className="badge badge-primary">{featuredMeal.strCategory}</span>
                      )}
                      {featuredMeal.strArea && (
                        <span className="badge badge-accent">{featuredMeal.strArea}</span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gray-800 mb-2 sm:mb-4 sm:group-hover:text-primary-500 transition-colors">
                      {featuredMeal.strMeal}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 sm:line-clamp-3 mb-4 sm:mb-6 text-sm sm:text-base">
                      {featuredMeal.strInstructions?.slice(0, 200)}...
                    </p>
                    <div className="flex items-center text-primary-500 font-medium text-sm sm:text-base">
                      <span>View Full Recipe</span>
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transition-transform sm:group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Categories */}
        {!searchResults && (
          <section className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="section-title">Popular Categories</h2>
              <Link to="/categories" className="text-primary-500 font-medium hover:text-primary-600 flex items-center text-sm sm:text-base">
                View All
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-48 sm:h-64 bg-gray-200 rounded-xl animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {categories.map((category) => (
                  <CategoryCard key={category.idCategory} category={category} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Popular Meals */}
        {!searchResults && (
          <section className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="section-title">Popular Recipes</h2>
              <Link to="/search" className="text-primary-500 font-medium hover:text-primary-600 flex items-center text-sm sm:text-base">
                Browse All
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <MealList meals={popularMeals} loading={loading} />
          </section>
        )}

        {/* CTA Section */}
        {!searchResults && (
          <section className="mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 sm:mb-4">
                Feeling Adventurous?
              </h2>
              <p className="text-white/80 mb-4 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base">
                Let us surprise you with a random recipe. Discover new flavors and cuisines!
              </p>
              <Link
                to="/random"
                className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-accent-600 font-semibold rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation text-sm sm:text-base"
              >
                <span className="mr-2">🎲</span>
                Get Random Recipe
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;

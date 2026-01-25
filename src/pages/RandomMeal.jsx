import React, { useState, useEffect, useCallback } from 'react';
import { MealDetail } from '../components/meal';
import { Loader } from '../components/common';
import { getRandomMeal } from '../services/mealApi';

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomMeal = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getRandomMeal();
      setMeal(data);
    } catch (error) {
      console.error('Error fetching random meal:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);

  return (
    <div className="page-container">
      {/* Header */}
      <div className="mb-4 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-800 mb-1 sm:mb-2">
            Random Recipe
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Discover something new and exciting to cook today!
          </p>
        </div>
        <button
          onClick={fetchRandomMeal}
          disabled={loading}
          className="w-full sm:w-auto btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Loading...
            </>
          ) : (
            <>
              <span className="mr-2">🎲</span>
              Get Another Recipe
            </>
          )}
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <Loader size="large" text="Finding a delicious recipe for you..." />
      ) : meal ? (
        <MealDetail meal={meal} />
      ) : (
        <div className="text-center py-12 sm:py-20">
          <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">😕</div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            We couldn't fetch a random recipe. Please try again.
          </p>
          <button onClick={fetchRandomMeal} className="btn-primary">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default RandomMeal;

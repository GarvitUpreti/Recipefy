import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MealDetail } from '../components/meal';
import { Loader } from '../components/common';
import { getMealById } from '../services/mealApi';

const MealDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMealById(id);
        if (data) {
          setMeal(data);
        } else {
          setError('Meal not found');
        }
      } catch (err) {
        setError('Failed to load meal details');
        console.error('Error fetching meal:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMeal();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="page-container">
        <Loader size="large" text="Loading recipe..." />
      </div>
    );
  }

  if (error || !meal) {
    return (
      <div className="page-container">
        <div className="text-center py-12 sm:py-20">
          <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">😕</div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            {error || 'Meal not found'}
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            We couldn't find the recipe you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="btn-primary"
            >
              Go Back
            </button>
            <Link to="/" className="btn-secondary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Breadcrumb - Hidden on very small screens */}
      <nav className="mb-3 sm:mb-6 hidden sm:block">
        <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-primary-500 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          {meal.strCategory && (
            <>
              <li>
                <Link
                  to={`/category/${meal.strCategory}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {meal.strCategory}
                </Link>
              </li>
              <li>/</li>
            </>
          )}
          <li className="text-gray-800 font-medium truncate max-w-[150px] sm:max-w-[200px]">
            {meal.strMeal}
          </li>
        </ol>
      </nav>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 sm:mb-6 flex items-center text-gray-600 hover:text-primary-500 active:text-primary-600 transition-colors touch-manipulation text-sm sm:text-base"
      >
        <svg
          className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5 sm:mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>

      {/* Meal Detail */}
      <MealDetail meal={meal} />
    </div>
  );
};

export default MealDetails;

import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb, strCategory, strArea } = meal;

  return (
    <Link to={`/meal/${idMeal}`} className="block group">
      <article className="card card-hover h-full">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={strMealThumb}
            alt={strMeal}
            className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick View Button - Hidden on mobile for cleaner look */}
          <div className="hidden sm:block absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span className="inline-flex items-center justify-center w-full py-2 bg-white/90 backdrop-blur-sm text-gray-800 font-medium rounded-lg text-sm">
              View Recipe
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-2.5 sm:p-4">
          <h3 className="font-medium sm:font-semibold text-sm sm:text-base text-gray-800 line-clamp-2 sm:group-hover:text-primary-500 transition-colors">
            {strMeal}
          </h3>
          
          {/* Tags - Show only category on mobile */}
          <div className="mt-1.5 sm:mt-2 flex flex-wrap gap-1 sm:gap-2">
            {strCategory && (
              <span className="badge badge-primary text-[10px] sm:text-xs">
                {strCategory}
              </span>
            )}
            {strArea && (
              <span className="badge badge-accent text-[10px] sm:text-xs hidden xs:inline-flex sm:inline-flex">
                {strArea}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export const MealCardCompact = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb } = meal;

  return (
    <Link
      to={`/meal/${idMeal}`}
      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
    >
      <img
        src={`${strMealThumb}/preview`}
        alt={strMeal}
        className="w-12 h-12 rounded-lg object-cover"
        loading="lazy"
      />
      <span className="font-medium text-gray-700 group-hover:text-primary-500 transition-colors line-clamp-2">
        {strMeal}
      </span>
    </Link>
  );
};

export const MealCardHorizontal = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb, strCategory, strArea } = meal;

  return (
    <Link to={`/meal/${idMeal}`} className="block group">
      <article className="card flex flex-col sm:flex-row overflow-hidden">
        {/* Image */}
        <div className="sm:w-48 flex-shrink-0">
          <img
            src={strMealThumb}
            alt={strMeal}
            className="w-full h-48 sm:h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-center">
          <h3 className="font-semibold text-lg text-gray-800 group-hover:text-primary-500 transition-colors">
            {strMeal}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {strCategory && (
              <span className="badge badge-primary text-xs">{strCategory}</span>
            )}
            {strArea && (
              <span className="badge badge-accent text-xs">{strArea}</span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MealCard;

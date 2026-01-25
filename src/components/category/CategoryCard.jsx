import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = category;

  return (
    <Link to={`/category/${strCategory}`} className="block group">
      <article className="card card-hover h-full">
        {/* Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50 p-3 sm:p-6">
          <img
            src={strCategoryThumb}
            alt={strCategory}
            className="w-full h-24 sm:h-40 object-contain transition-transform duration-500 sm:group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-3 sm:p-5">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-800 sm:group-hover:text-primary-500 transition-colors">
            {strCategory}
          </h3>
          {strCategoryDescription && (
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 line-clamp-2 sm:line-clamp-3 hidden sm:block">
              {strCategoryDescription}
            </p>
          )}
          
          {/* View Link */}
          <div className="mt-2 sm:mt-4 flex items-center text-primary-500 text-xs sm:text-sm font-medium">
            <span>Explore</span>
            <svg
              className="w-3 sm:w-4 h-3 sm:h-4 ml-1 transition-transform sm:group-hover:translate-x-1"
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
          </div>
        </div>
      </article>
    </Link>
  );
};

export const CategoryCardSimple = ({ name, count }) => {
  return (
    <Link
      to={`/category/${name}`}
      className="block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
    >
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-700 group-hover:text-primary-500 transition-colors">
          {name}
        </span>
        {count !== undefined && (
          <span className="text-sm text-gray-400">{count} recipes</span>
        )}
      </div>
    </Link>
  );
};

export const AreaCard = ({ area }) => {
  const { strArea } = area;

  // Map areas to flag emojis (common ones)
  const areaFlags = {
    American: '🇺🇸',
    British: '🇬🇧',
    Canadian: '🇨🇦',
    Chinese: '🇨🇳',
    Croatian: '🇭🇷',
    Dutch: '🇳🇱',
    Egyptian: '🇪🇬',
    Filipino: '🇵🇭',
    French: '🇫🇷',
    Greek: '🇬🇷',
    Indian: '🇮🇳',
    Irish: '🇮🇪',
    Italian: '🇮🇹',
    Jamaican: '🇯🇲',
    Japanese: '🇯🇵',
    Kenyan: '🇰🇪',
    Malaysian: '🇲🇾',
    Mexican: '🇲🇽',
    Moroccan: '🇲🇦',
    Polish: '🇵🇱',
    Portuguese: '🇵🇹',
    Russian: '🇷🇺',
    Spanish: '🇪🇸',
    Thai: '🇹🇭',
    Tunisian: '🇹🇳',
    Turkish: '🇹🇷',
    Vietnamese: '🇻🇳',
    Unknown: '🌍',
  };

  const flag = areaFlags[strArea] || '🌍';

  return (
    <Link
      to={`/area/${strArea}`}
      className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md active:bg-gray-50 transition-all group touch-manipulation"
    >
      <span className="text-2xl sm:text-3xl">{flag}</span>
      <span className="font-medium text-sm sm:text-base text-gray-700 sm:group-hover:text-primary-500 transition-colors">
        {strArea}
      </span>
    </Link>
  );
};

export default CategoryCard;

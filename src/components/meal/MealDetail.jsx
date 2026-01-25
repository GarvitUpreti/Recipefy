import React from 'react';
import { Link } from 'react-router-dom';
import { extractIngredients } from '../../services/mealApi';

const MealDetail = ({ meal }) => {
  if (!meal) return null;

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
    strSource,
    strTags,
  } = meal;

  const ingredients = extractIngredients(meal);
  const tags = strTags ? strTags.split(',').map((tag) => tag.trim()) : [];

  // Convert YouTube URL to embed URL
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;
    const videoId = url.split('v=')[1];
    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const youtubeEmbed = getYoutubeEmbedUrl(strYoutube);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative">
        <div className="aspect-[4/3] sm:aspect-video md:aspect-[21/9] overflow-hidden rounded-xl sm:rounded-2xl">
          <img
            src={strMealThumb}
            alt={strMeal}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            {strCategory && (
              <Link
                to={`/category/${strCategory}`}
                className="badge bg-primary-500 text-white hover:bg-primary-600 transition-colors text-xs sm:text-sm"
              >
                {strCategory}
              </Link>
            )}
            {strArea && (
              <Link
                to={`/area/${strArea}`}
                className="badge bg-accent-500 text-white hover:bg-accent-600 transition-colors text-xs sm:text-sm"
              >
                {strArea}
              </Link>
            )}
          </div>
          <h1 className="text-xl sm:text-3xl md:text-5xl font-display font-bold text-white text-balance leading-tight">
            {strMeal}
          </h1>
        </div>
      </div>

      {/* Content Grid - Ingredients first on mobile */}
      <div className="mt-4 sm:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
        {/* Sidebar - Shown first on mobile */}
        <div className="space-y-4 sm:space-y-6 lg:order-2">
          {/* Ingredients */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg sm:text-xl font-display font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
              <span className="text-lg sm:text-xl mr-2">🥗</span>
              Ingredients
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              {ingredients.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-1.5 sm:py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-700 text-sm sm:text-base">{item.ingredient}</span>
                  <span className="text-gray-500 text-xs sm:text-sm font-medium ml-2">
                    {item.measure}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tags */}
          {tags.length > 0 && (
            <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-display font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                <span className="text-lg sm:text-xl mr-2">🏷️</span>
                Tags
              </h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Source Link */}
          {strSource && (
            <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-display font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                <span className="text-lg sm:text-xl mr-2">🔗</span>
                Source
              </h2>
              <a
                href={strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 active:text-primary-700 underline text-sm break-all"
              >
                View Original Recipe
              </a>
            </section>
          )}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-8 lg:order-1">
          {/* Instructions */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg sm:text-2xl font-display font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
              <span className="text-lg sm:text-2xl mr-2 sm:mr-3">📝</span>
              Instructions
            </h2>
            <div className="prose prose-gray max-w-none">
              {strInstructions.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </section>

          {/* Video */}
          {youtubeEmbed && (
            <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-2xl font-display font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                <span className="text-lg sm:text-2xl mr-2 sm:mr-3">🎬</span>
                Video Tutorial
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={youtubeEmbed}
                  title={`${strMeal} video tutorial`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealDetail;

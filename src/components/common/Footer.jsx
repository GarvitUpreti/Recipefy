import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-3 sm:mb-4">
              <span className="text-2xl sm:text-3xl">🍳</span>
              <span className="font-display text-lg sm:text-xl font-bold text-white">
                <span className="text-primary-400">Recipefy</span>
              </span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Discover delicious recipes from around the world. Search by ingredients,
              explore different cuisines, or find your next favorite meal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/" className="text-xs sm:text-sm hover:text-primary-400 active:text-primary-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-xs sm:text-sm hover:text-primary-400 active:text-primary-300 transition-colors">
                  Search
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-xs sm:text-sm hover:text-primary-400 active:text-primary-300 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/random" className="text-xs sm:text-sm hover:text-primary-400 active:text-primary-300 transition-colors">
                  Random
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Categories</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  to="/category/Beef"
                  className="text-xs sm:text-sm hover:text-primary-400 active:text-primary-300 transition-colors"
                >
                  Beef
                </Link>
              </li>
              <li>
                <Link
                  to="/category/Chicken"
                  className="text-xs sm:text-sm hover:text-primary-400 active:text-primary-300 transition-colors"
                >
                  Chicken
                </Link>
              </li>
              <li>
                <Link
                  to="/category/Seafood"
                  className="text-xs sm:text-sm hover:text-primary-400 active:text-primary-300 transition-colors"
                >
                  Seafood
                </Link>
              </li>
              <li>
                <Link
                  to="/category/Vegetarian"
                  className="text-xs sm:text-sm hover:text-primary-400 active:text-primary-300 transition-colors"
                >
                  Vegetarian
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {currentYear} RecipeApp
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-0">
            Powered by{' '}
            <a
              href="https://www.themealdb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 active:text-primary-200 transition-colors"
            >
              TheMealDB
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

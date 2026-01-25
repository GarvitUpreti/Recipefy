import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/common';
import {
  Home,
  Search,
  Categories,
  Areas,
  CategoryMeals,
  AreaMeals,
  MealDetails,
  RandomMeal,
} from './pages';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/category/:name" element={<CategoryMeals />} />
          <Route path="/area/:name" element={<AreaMeals />} />
          <Route path="/meal/:id" element={<MealDetails />} />
          <Route path="/random" element={<RandomMeal />} />
          
          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="page-container text-center py-20">
                <div className="text-8xl mb-6">🍳</div>
                <h1 className="text-4xl font-display font-bold text-gray-800 mb-4">
                  Page Not Found
                </h1>
                <p className="text-gray-600 mb-8">
                  The recipe you're looking for doesn't exist or has been moved.
                </p>
                <a
                  href="/"
                  className="btn-primary inline-flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Go Home
                </a>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;

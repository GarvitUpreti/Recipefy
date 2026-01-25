import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MealList } from '../components/meal';
import { filterByCategory } from '../services/mealApi';

const CategoryMeals = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const data = await filterByCategory(name);
        setMeals(data);
      } catch (error) {
        console.error('Error fetching category meals:', error);
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchMeals();
    }
  }, [name]);

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-primary-500 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/categories" className="hover:text-primary-500 transition-colors">
              Categories
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-800 font-medium">{name}</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
          {name} Recipes
        </h1>
        <p className="text-gray-600">
          {!loading && `${meals.length} delicious ${name.toLowerCase()} recipes to choose from`}
        </p>
      </div>

      {/* Meals Grid */}
      <MealList
        meals={meals}
        loading={loading}
        emptyMessage={`No recipes found in the ${name} category.`}
      />
    </div>
  );
};

export default CategoryMeals;

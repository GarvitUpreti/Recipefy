import React, { useState, useEffect } from 'react';
import { CategoryList } from '../components/category';
import { getAllCategories } from '../services/mealApi';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="page-container">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
          Meal Categories
        </h1>
        <p className="text-gray-600">
          Explore recipes by category and find exactly what you're craving
        </p>
      </div>

      {/* Categories Grid */}
      <CategoryList categories={categories} loading={loading} />
    </div>
  );
};

export default Categories;

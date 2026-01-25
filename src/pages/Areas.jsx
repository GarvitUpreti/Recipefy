import React, { useState, useEffect } from 'react';
import { AreaList } from '../components/category';
import { getAreaList } from '../services/mealApi';

const Areas = () => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAreas = async () => {
      setLoading(true);
      try {
        const data = await getAreaList();
        setAreas(data);
      } catch (error) {
        console.error('Error fetching areas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAreas();
  }, []);

  return (
    <div className="page-container">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
          World Cuisines
        </h1>
        <p className="text-gray-600">
          Explore delicious recipes from different countries and cultures
        </p>
      </div>

      {/* Areas Grid */}
      <AreaList areas={areas} loading={loading} />
    </div>
  );
};

export default Areas;

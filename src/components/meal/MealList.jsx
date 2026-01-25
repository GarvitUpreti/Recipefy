import React from 'react';
import MealCard from './MealCard';
import { SkeletonGrid } from '../common/Loader';

const MealList = ({ meals, loading, emptyMessage = 'No meals found.' }) => {
  if (loading) {
    return <SkeletonGrid count={8} />;
  }

  if (!meals || meals.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🍽️</div>
        <p className="text-gray-500 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export const MealListCompact = ({ meals, loading, title }) => {
  if (loading) {
    return (
      <div className="animate-pulse space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!meals || meals.length === 0) {
    return <p className="text-gray-500 text-sm">No meals found.</p>;
  }

  return (
    <div>
      {title && <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>}
      <div className="space-y-1">
        {meals.slice(0, 5).map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MealList;

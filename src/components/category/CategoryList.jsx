import React from 'react';
import CategoryCard, { AreaCard } from './CategoryCard';
import { SkeletonGrid } from '../common/Loader';

const CategoryList = ({ categories, loading, emptyMessage = 'No categories found.' }) => {
  if (loading) {
    return <SkeletonGrid count={6} />;
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">📂</div>
        <p className="text-gray-500 text-base sm:text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.idCategory || category.strCategory} category={category} />
      ))}
    </div>
  );
};

export const AreaList = ({ areas, loading, emptyMessage = 'No cuisines found.' }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-12 sm:h-16 bg-gray-200 rounded-lg sm:rounded-xl animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (!areas || areas.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🌍</div>
        <p className="text-gray-500 text-base sm:text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
      {areas.map((area) => (
        <AreaCard key={area.strArea} area={area} />
      ))}
    </div>
  );
};

export default CategoryList;

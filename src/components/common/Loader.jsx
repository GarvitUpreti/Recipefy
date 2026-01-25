import React from 'react';

const Loader = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div
          className={`${sizeClasses[size]} border-4 border-gray-200 border-t-primary-500 rounded-full animate-spin`}
        ></div>
      </div>
      {text && (
        <p className="mt-4 text-gray-500 text-sm font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export const LoaderOverlay = ({ text = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <Loader size="large" text={text} />
    </div>
  );
};

export const LoaderInline = () => {
  return (
    <div className="inline-flex items-center space-x-2">
      <div className="w-4 h-4 border-2 border-gray-200 border-t-primary-500 rounded-full animate-spin"></div>
      <span className="text-sm text-gray-500">Loading...</span>
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="aspect-square bg-gray-200"></div>
      <div className="p-2.5 sm:p-4 space-y-2 sm:space-y-3">
        <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-2 sm:h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export const SkeletonGrid = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default Loader;

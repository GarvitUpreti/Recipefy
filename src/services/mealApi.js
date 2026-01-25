const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Search meal by name
export const searchMealByName = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${name}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error searching meals:', error);
    return [];
  }
};

// List meals by first letter
export const getMealsByFirstLetter = async (letter) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?f=${letter}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching meals by letter:', error);
    return [];
  }
};

// Lookup meal by ID
export const getMealById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error('Error fetching meal by ID:', error);
    return null;
  }
};

// Get one random meal
export const getRandomMeal = async () => {
  try {
    const response = await fetch(`${BASE_URL}/random.php`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error('Error fetching random meal:', error);
    return null;
  }
};

// List all meal categories with details
export const getAllCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories.php`);
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// List all category names
export const getCategoryList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/list.php?c=list`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching category list:', error);
    return [];
  }
};

// List all areas (cuisines)
export const getAreaList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/list.php?a=list`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching area list:', error);
    return [];
  }
};

// List all ingredients
export const getIngredientList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/list.php?i=list`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching ingredient list:', error);
    return [];
  }
};

// Filter by ingredient
export const filterByIngredient = async (ingredient) => {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error filtering by ingredient:', error);
    return [];
  }
};

// Filter by category
export const filterByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error filtering by category:', error);
    return [];
  }
};

// Filter by area (cuisine)
export const filterByArea = async (area) => {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?a=${area}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error filtering by area:', error);
    return [];
  }
};

// Helper function to get meal thumbnail in different sizes
export const getMealThumbnail = (thumbnail, size = 'medium') => {
  if (!thumbnail) return '';
  
  const sizes = {
    small: '/preview',
    medium: '',
    large: ''
  };
  
  return `${thumbnail}${sizes[size] || ''}`;
};

// Helper to extract ingredients from meal object
export const extractIngredients = (meal) => {
  const ingredients = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : ''
      });
    }
  }
  
  return ingredients;
};

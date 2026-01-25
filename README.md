# RecipeApp

A beautiful recipe discovery application built with React and Tailwind CSS, powered by TheMealDB API.

## Features

- 🔍 Search meals by name
- 📂 Browse by categories
- 🌍 Explore cuisines by area/region
- 🎲 Discover random meals
- 📱 Fully responsive design
- ⚡ Fast and lightweight

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/
│   ├── common/       # Reusable UI components
│   ├── meal/         # Meal-related components
│   └── category/     # Category-related components
├── pages/            # Page components
├── services/         # API service layer
├── hooks/            # Custom React hooks
└── context/          # React context providers
```

## API Reference

This app uses [TheMealDB](https://www.themealdb.com/api.php) free API.

## Technologies Used

- React 18
- React Router v6
- Tailwind CSS
- TheMealDB API

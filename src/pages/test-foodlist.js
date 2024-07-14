// src/pages/FoodList.js
import React, { useEffect, useState } from 'react';
import FoodItem from '../components/fooditem';
import '../styles/foodlist.css';

const TestFoodList = ({route}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      setSearchQuery('a'); 
  
    if (searchQuery) {
      const url = `http://127.0.0.1:8000/api/searchrecipes/?q=${searchQuery}`;
      fetch(url)
       .then(response => response.json())
       .then(data => setRecipes(data))
       .catch(error => console.error('Error:', error));
    }

  }, [ searchQuery]);

  return (
    <>
      {recipes.length > 0? (
        <section className="food-list">
          {recipes.map((recipe, index) => (
            <FoodItem
              key={index}
              image={recipe.recipe_image || 'https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Crispy-Rice-Salad-4.jpg'}
              date={recipe.recipe_created_at}
              title={recipe.recipe_title}
              description={recipe.recipe_description}
              link="#"
            />
          ))}
        </section>
      ) : (
        <div className="error-message">
          No recipes found for "{searchQuery}". Try searching for something else!
        </div>
      )}
    </>
  );
};

export default TestFoodList;
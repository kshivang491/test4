// src/pages/FoodList.js
import React, { useEffect, useState } from 'react';
import FoodItem from '../components/fooditem';
import { useLocation } from 'react-router-dom';
import '../styles/foodlist.css';

const FoodList = ({route}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.searchQuery) {
    setSearchQuery(location.state.searchQuery);
  } else {
    setSearchQuery(''); 
  }
  
  if (searchQuery) {
    const url = `http://127.0.0.1:8000/api/searchrecipes/?q=${searchQuery}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error:', error));
  }

  }, [location, searchQuery]);

  return (
    <>
    {recipes.length > 0? (

<section style={{ backgroundColor: '#f2f2f2' }}>
<div className="food-list-container" style={{ backgroundColor: '#f2f2f2', marginTop: '0px', paddingTop:'30px' }}>
    <div className="food-search-heading">Showing Results For:</div>
    <div className="food-search-result">{searchQuery}</div>
  </div>

      <div className="food-list">
        {recipes.map((recipe, index) => (
          <FoodItem
            key={index}
            image={'https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Crispy-Rice-Salad-4.jpg'}
            // image={recipe.recipe_image || 'https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Crispy-Rice-Salad-4.jpg'}
            date={recipe.recipe_created_at}
            title={recipe.recipe_title}
            description={recipe.recipe_description}
            link="#"
          />
        ))}
      </div>
      </section>
    ) : (
      <div className="error-message">
        <div className="food-search-heading">
        0 Results found for "{searchQuery}".
        </div>
        <div className="food-search-result">
         Try searching for something else!
        </div>
      </div>
    )}
  </>
  );
};

export default FoodList;

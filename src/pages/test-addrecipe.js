// src/pages/AddRecipe.js
import React, { useState } from 'react';
import FormInput from '../components/forminput';
import FormTextarea from '../components/formtextarea';
import FormButton from '../components/formbutton';
import '../styles/addrecipe.css';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      recipe_title: title,
      recipe_description: desc,
    //   recipe_image: image,
    //   ingredients: ingredients,
    //   recipe: recipe,
    //   cooking_time: cookingTime,
      recipe_ratings: 5,
      user: "shivang491@gmail.com"
    };

    fetch('http://127.0.0.1:8000/api/addrecipe/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to submit data.');
      });
  };

  return (
    <section className="add-recipe-section" style={styles.addRecipeSection}>
      <div className="addfood-container" style={styles.addFoodContainer}>
        <span id="addrecipe"></span>
        <h2 style={styles.heading}>Add a Recipe</h2>
        <p>Uploading personal recipes is easy! Add yours to your favorites, share with friends, family, or the Allrecipes community.</p>
        <form id="add-recipe-form" onSubmit={handleSubmit}>
        <div class="form-group">
          <FormInput
            id="recipe-title"
            label="Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your recipe a title"
            required
            />
            </div>
            <div class="form-group">
          <FormInput
            id="recipe-description"
            label="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Share the story behind your recipe and what makes it special"
            required
            />
            </div>
            <div class="form-group">
          <FormInput
            id="recipe-image"
            label="Recipe Image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter your recipe image's url"
            required
          />
          </div>
          <div class="form-group">
          <FormTextarea
            id="ingredients"
            label="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Add ingredients"
            required
          />
          </div>
          <div class="form-group">
          <FormTextarea
            id="recipe"
            label="Recipe"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
            placeholder="Enter your recipe here"
            required
          />
          </div>
          <div class="form-group">
          <FormInput
            id="cooking-time"
            label="Cooking Time: in minutes"
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
          </div>
          <FormButton type="reset" text="Cancel" className="common_button secondary" />
              <FormButton type="submit" text="Submit Recipe" className="common_button primary" />
        </form>
      </div>
    </section>
  );
};

const styles = {
  addRecipeSection: {
    paddingTop: '3rem',
    backgroundImage: 'url(https://media.istockphoto.com/id/1250524993/photo/vegan-ingredients-frame-on-black-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=POfh3WDShD6vDSov0pBQKY3-mY201bFMSLDwaFfd40c=)',
    backgroundRepeat: 'repeat-x',
    backgroundColor: '#f2f2f2',
    width: 'auto',
    height: '180px'
  },
  addFoodContainer: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '640px',
    margin: '4px auto',
    padding: '32px',
    backgroundColor: '#e5e5e5'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '16px',
    marginLeft: '25px'
  }
};

export default AddRecipe;

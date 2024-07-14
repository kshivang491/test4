import React, { useState } from 'react';
import FormInput from './forminput';
import FormTextarea from './formtextarea';
import FormButton from './formbutton';
import '../styles/addrecipe.css';

function AddrecipeForm() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const handleIngredientChange = (e, index) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (i === index) {
        return e.target.value;
      }
      return ingredient;
    });
    setIngredients(newIngredients);
  };

  const handleStepChange = (e, index) => {
    const newSteps = steps.map((step, i) => {
      if (i === index) {
        return e.target.value;
      }
      return step;
    });
    setSteps(newSteps);
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const removeStep = (index) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  return (
    <section className="add-recipe-section">
      <div className="addfood-container">
        <span id="addrecipe"></span>
        <h2>Add a Recipe</h2>
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
            <label>Ingredients</label>
            <FormButton
              className="common_button primary add-step-btn1"
              type="button"
              onClick={addIngredient}
              text="Add Ingredient"
            />
            <div className="steps-container1">
              <ol id="steps-list1">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <FormInput
                      type="text"
                      value={ingredient}
                      onChange={(e) => handleIngredientChange(e, index)}
                      placeholder="Enter ingredient"
                      required
                    />
                    <FormButton
                      className="common_button secondary add-step-btn1"
                      type="button"
                      onClick={() => removeIngredient(index)}
                      text="Remove"
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div class="form-group">
            <label>Recipe Steps</label>
            <FormButton
              className="common_button primary add-step-btn2"
              type="button"
              onClick={addStep}
              text="Add Step"
            />
            <div className="steps-container2">
              <ol id="steps-list2">
                {steps.map((step, index) => (
                  <li key={index}>
                    <FormTextarea
                      value={step}
                      onChange={(e) => handleStepChange(e, index)}
                      placeholder="Enter step description"
                    />
                    <FormButton
                      className="common_button secondary add-step-btn2"
                      type="button"
                      onClick={() => removeStep(index)}
                      text="Remove"
                    />
                  </li>
                ))}
              </ol>
            </div>
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
}

export default AddrecipeForm;

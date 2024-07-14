import React from 'react';
import '../styles/foodlist.css';

const HomeFoodList = () => {
    return (
    <div>
      <section className="main-food-heading-section">
        <div className="main-food-heading-container">
          <div className="main-food-heading">
            <div className="food-heading" style={{fontSize:"1.4rem"}}>
              Delicious Looks,
            </div>
            <div className="food-heading" style={{fontSize:"2.2rem"}}>
              Incredible Taste
            </div>
            <div className="food-heading" style={{fontSize:"1.2rem"}}>
              Anytime, Anywhere
            </div>
          </div>
        </div>
      </section>
      <section className="food-list-section">
        <div className="food-list-container">
          <div className="food-list-title-container">
            <span className="food-list-title">FOOD &rarr;</span>
          </div>
          <div className="food-list">
            <FoodItems
              imageSrc="https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Crispy-Rice-Salad-4.jpg"
              title="Crispy Rice Salad with Cucumbers and Herbs"
              description="Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top. This crispy rice salad is all I want to eat right now!"
              uploadDate="APRIL 23, 2024"
            />
            <FoodItems
              imageSrc="https://www.simplyrecipes.com/thmb/xqOyEGMq5uipuqp93Xs4pO7jnJk=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pad-See-Ew-Plated-LEAD-Overhead-Horizontal-2-0cf5e866975c4958b1405a559b563cd6.jpg"
              title="Crispy Rice Salad with Cucumbers and Herbs"
              description="Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top. This crispy rice salad is all I want to eat right now!"
              uploadDate="APRIL 23, 2024"
            />
            <FoodItems
              imageSrc="https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Crispy-Rice-Salad-4.jpg"
              title="Crispy Rice Salad with Cucumbers and Herbs"
              description="Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top. This crispy rice salad is all I want to eat right now!"
              uploadDate="APRIL 23, 2024"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FoodItems(props) {
  return (
    <div className="food-item">
      <a className="food-image-container" href="#" aria-label="View recipe">
        <img className="food-image" src={props.imageSrc} alt="Recipe image" />
      </a>
      <div className="food-details">
        <div className="food-upload-date">{props.uploadDate}</div>
        <h2 className="food-title">{props.title}</h2>
        <p className="food-desc">{props.description}</p>
        <a href="#" className="get-foodinfo">CONTINUE READING</a>
      </div>
    </div>
  );
}

export default HomeFoodList;
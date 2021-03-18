import React from 'react';
import classes from './PizzaImage.css';
import PImage from '../../assets/pizza.jpg';

const PizzaImage = (props) => {
   return (
      <div className={classes.PizzaImage}>
         <img src={PImage} className={classes.PizzaImg} />
      </div>
   );
}

export default PizzaImage;
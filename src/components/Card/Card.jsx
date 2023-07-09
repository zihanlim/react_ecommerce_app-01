import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

//2.1This is an arrow function Card
//2.2The function takes an object as its parameter and destructures the {item} property from that object.
//2.3It is a shorthand syntax for extracting specific properties from an object.
//2.4The function body is denoted by the curly braces {}.
//Card is a Child component of FeatureProducts.{item} prop is being passed down to here.

const Card = ({ item }) => {
  return (
    //using ROUTER to link to a page when clicked
    //When the link is triggered, it will navigate to a specific URL,
    //which is constructed using a template string (${...}) and the item.id value.
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {/* conditional rendering statement in JavaScript, 
          specifically using the logical AND (&&) operator. 
           Otherwise, if item.isNew is false or a falsy value, 
           it does not render anything.*/}
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="" className="mainImage" />
          <img src={item.img2} alt="" className="secondImage" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
    //${item.id} access the 'id' property of the {item} prop from FeatureProducts
  );
};

export default Card;

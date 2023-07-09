import React from "react";
import "./FeatureProducts.scss";
import Card from "../Card/Card";

//1.1: "FeatureProducts.jsx" is Child to the Parent "Home.jsx".{type} prop is being passed
//1.2: there are two {type} props, 'featured' and 'trending'
const FeatureProducts = ({ type }) => {
  //2.1This is an arrow function FeatureProducts
  //2.2The function takes an object as its parameter and destructures the {type} property from that object.
  //2.3It is a shorthand syntax for extracting specific properties from an object.
  //2.4The function body is denoted by the curly braces {}.
  const data = [
    //3.1creating a constant variable called data and assigning it an array with three empty objects.
    //3.2creating an array with three object literals {} as its elements.
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinys rgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Adidas Originals Logo Embroidered Crewneck T-Shirt ",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "Armida Button Blazer Dress",
      oldPrice: 30,
      price: 22,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs=tinys rgb&w=1600",
      title: "Jenica Lace Blouse",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      FeatureProducts
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, possimus
          vitae expedita dolorem ad officiis nostrum, repudiandae libero animi
          blanditiis quisquam nesciunt laborum eum porro voluptas, sit quibusdam
          nisi quidem.
        </p>
      </div>
      <div className="bottom">
        {/* mapping over the data array and rendering a <Card> component for each item in the array. 
      the 'data' variable is assumed to be an array, and the map() method is called on it. 
      The map() method iterates over each 'item' in the array and performs some operation on it. 
      In this case, the operation being performed is creating a <Card> component for each item.
      */}
        {data.map((item) => (
          // Within the map() method, an arrow function is defined that takes each item as a parameter(represented by the 'item' variable).
          <Card item={item} key={item.id} /> //Card.jsx is a Child of FeatureProducts
          //The arrow function then returns a JSX expression that renders a <Card> component,
          //passing the item as a prop called 'item' and key as a prop callted 'item.id'.
          //for each item in the data array, a <Card> component is created with the item prop set to the current item.
          //This allows the <Card> component to receive the relevant data from the data array and use it for rendering or other purposes.
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;

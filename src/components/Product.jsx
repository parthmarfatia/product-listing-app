import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../Context";
import { useContext } from "react";

const Product = (props) => {
  const {
    title,
    thumbnail,
    description,
    price,
    rating,
    stock,
    discountPercentage: discount,
  } = props.val;

  const { setAddToCart } = useContext(Context);
  return (
    <div className="product--container">
      <img className="product--image" src={thumbnail} alt={title} />
      <h4 className="product--title">{title}</h4>
      <small className="product--info">
        <p>{description}</p>
        <p className="product--rating">
          <FontAwesomeIcon icon={faStar} style={{ color: "green" }} />{" "}
          <b>{rating}/5</b>
        </p>
        <p>
          Cost:<b>${price}</b> [{Math.round(discount)}% Discount]
        </p>
      </small>
      {stock < 50 && (
        <p className="product--stock">Hurry only {stock} items left!</p>
      )}
      <button
        className="product--addToCart"
        onClick={(props) => setAddToCart((data) => [...data, props])}
      >
        <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
      </button>
    </div>
  );
};

export default Product;

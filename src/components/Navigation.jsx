import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../Context";
import { useContext } from "react";

const Navigation = () => {
  const { addToCart } = useContext(Context);
  return (
    <nav>
      <a className="nav--logo">
        <FontAwesomeIcon className="nav--home--icon" icon={faHouse} />
        <h1>TheFastWay</h1>
      </a>
      <a className="nav--cart">
        <p>
          <small>{addToCart.length}</small>
        </p>
        <FontAwesomeIcon icon={faCartShopping} />
      </a>
    </nav>
  );
};

export default Navigation;

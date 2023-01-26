import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav>
      <a href="/" className="nav--logo">
        <FontAwesomeIcon className="nav--home--icon" icon={faHouse} />
        <h1>TheFastWay</h1>
      </a>
      <a href="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
      </a>
    </nav>
  );
};

export default Navigation;

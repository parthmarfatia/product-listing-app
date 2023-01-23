import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    return(
        <nav>
            <h1>TheFastWay</h1>
            <FontAwesomeIcon icon={faCartShopping} className='cart-icon'/>
        </nav>
    )
}

export default Navigation;
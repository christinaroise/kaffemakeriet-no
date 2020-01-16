import React from 'react';
import './ButtonDark.css';
import {Link} from "react-router-dom";

function scrollToTop() {
    window.scrollTo({
      top: 0
    });
}

const ButtonDark = (props) => {
    return(
        <Link to="/Produkter">
            <button className='btnDark' onClick={() => scrollToTop()}>{props.title}</button>
        </Link>
    );
}

export default ButtonDark 
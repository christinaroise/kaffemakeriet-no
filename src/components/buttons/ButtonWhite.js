import React from 'react';
import './ButtonWhite.css';
import {Link} from "react-router-dom";

const ButtonWhite = (props) => {
    return(
        <Link to="/Info">
            <button className='btnWhite'>{props.title}</button>
        </Link>
    );
}

export default ButtonWhite 
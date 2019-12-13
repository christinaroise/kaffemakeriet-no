import React from 'react';
import './ButtonWhite.css';

const ButtonWhite = (props) => {
    return(
        <div>
            <button className='btnWhite'>{props.title}</button>
        </div>
    );
}

export default ButtonWhite 
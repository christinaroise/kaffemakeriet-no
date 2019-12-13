import React from 'react';
import './ButtonDark.css';

const ButtonDark = (props) => {
    return(
        <div>
            <button className='btnDark'>{props.title}</button>
        </div>
    );
}

export default ButtonDark 
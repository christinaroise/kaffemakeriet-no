import React from 'react';
import './TxtBlock.css';

const TxtBlock = (props) => {
    return(
        <article className='txtBlock'>
            <h2>{props.title}</h2>
            <div contentEditable 
            className='txtBlock-paragraph'>
                <p>{props.txt1}</p>
                <p>{props.txt2}</p>
            </div>
        </article>
    )
}

export default TxtBlock;
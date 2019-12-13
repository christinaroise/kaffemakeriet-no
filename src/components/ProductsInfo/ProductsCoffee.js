import React from 'react';

const ProductsCoffee = (props) => {
    return(
            <div className='product'>
                <img src={props.url} />
                <h4>{props.title}</h4>
                <h5>Kaffe fra {props.region}</h5>
            </div>
    );
} 
 
export default ProductsCoffee

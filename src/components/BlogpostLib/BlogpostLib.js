import React from 'react';

const BlogpostLib = (props) => {
    return(
            <div className='blogpost'>
                <img src={props.url} />
                <h5>{props.date}</h5>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
    );
} 

export default BlogpostLib
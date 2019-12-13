import React from 'react';
import './ImgBlock.css';
import TxtOverlay from './TxtOverlay';

const ImgBlock = (props) => {

    return(
        <article className={['imgBlock', props.customClass].join(' ')} style={{backgroundImage: "url(" + props.imgUrl + ")"}}>
            { props.showTxtOverlay ? <TxtOverlay quote={props.quote} title={props.title} quote2={props.quote2} hideButtonWhite={props.hideButtonWhite}/> : null }
        </article>
    );
}

export default ImgBlock 
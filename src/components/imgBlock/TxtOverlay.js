import React from 'react';
import ButtonWhite from '../buttons/ButtonWhite';
import '../imgBlock/TxtOverlay.css';

function TxtOverlay(props) {
    return(
        <div className='txt-overlay'>
            <h3>{props.quote}</h3>
            <h1>{props.title}</h1>
            <h3>{props.quote2}</h3>
            {props.hideButtonWhite == "true" ? null : <ButtonWhite showButtonWhite="true" title="Eh, ja!"/>}
        </div>
    );
}

export default TxtOverlay 
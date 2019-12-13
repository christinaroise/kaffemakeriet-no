import React from 'react';
import { chownSync } from 'fs';

//NOT IN USE. Will become toggle menu for header on mobile


const ToggleMenu = () => {
    return(
        <label id="mob-nav-toggle">
            <div className='top-bar'></div>
            <div className='middle-bar'></div>
            <div className='bottom-bar'></div>
        </label>
    );
}

export default ToggleMenu

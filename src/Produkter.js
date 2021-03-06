import React from 'react';
import ImgBlock from './components/imgBlock/ImgBlock';
import ProductsLib from './components/ProductsInfo/ProductsLib';

import coffeNature from './images/coffeNature.jpg'

// On mobile, Coffee menu will become a toggle/burger menu. 

// I had plans to create a pop up: when clicking on a product, an info card will appear with all the information on the product provided by the .json file. 

const Produkter = () => {
    return(
        <main>
            <ImgBlock imgUrl={coffeNature} showTxtOverlay="false" quote="Vi er stolte leverandører av" title="Solberg & Hansen" hideButtonWhite="true"/>
            <ProductsLib/>
        </main>
    )
}

export default Produkter
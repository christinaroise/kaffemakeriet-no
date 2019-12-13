import React from 'react';
import ImgBlock from './components/imgBlock/ImgBlock';
import Bio from './components/info/Bio'
import Cafes from './components/info/Cafes'
import Career from './components/info/career'
import './components/info/info.css'

// On mobile, the menu will become a toggle/burger menu. When clicked on each button its sister-component will appear, the others will remain hidden. "Vår historie" will be default. 

const Intro = () => {
    return(
        <main>
            <ImgBlock imgUrl="../../assets/images/womanCoffee.jpg" showTxtOverlay="true" hideButtonWhite="true"/>
            <article className="info-grid">
                <nav>
                    <a>Vår Historie</a>
                    <a>Våre Kaffebarer</a>
                    <a>Bli en kaffemaker</a>
                </nav>
                <div>
                    <Bio/>
                    <Cafes />
                    <Career />
                </div>             
            </article>
            
        </main>
    )
}

export default Intro
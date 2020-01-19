import React from 'react';
import ImgBlock from './components/imgBlock/ImgBlock';
import Bio from './components/info/Bio'
import Cafes from './components/info/Cafes'
import Career from './components/info/career'
import './components/info/info.css'

import womanCoffee from './images/womanCoffee.jpg'

// On mobile, the menu will become a toggle/burger menu. When clicked on each button its sister-component will appear, the others will remain hidden. "Vår historie" will be default. 

function showBio () {
    let bioDiv = document.getElementById("compBioDiv");
    let bioLink = document.getElementById("bioLink");
    let cafeDiv = document.getElementById("compCafeDiv");
    let cafeLink = document.getElementById("cafeLink");
    let careerDiv = document.getElementById("compCareerDiv");
    let careerLink = document.getElementById("careerLink");
    

    bioDiv.className = "show";
    bioLink.className = "selected";
    cafeDiv.className = "hide";
    cafeLink.className = "";
    careerDiv.className = "hide";
    careerLink.className = "";
}

function showCafes () {
    let bioDiv = document.getElementById("compBioDiv");
    let bioLink = document.getElementById("bioLink");
    let cafeDiv = document.getElementById("compCafeDiv");
    let cafeLink = document.getElementById("cafeLink");
    let careerDiv = document.getElementById("compCareerDiv");
    let careerLink = document.getElementById("careerLink");

    bioDiv.className = "hide";
    bioLink.className = "";
    cafeDiv.className = "show";
    cafeLink.className = "selected";
    careerDiv.className = "hide";
    careerLink.className = "";


}

function showCareer () {
    let bioDiv = document.getElementById("compBioDiv");
    let bioLink = document.getElementById("bioLink");
    let cafeDiv = document.getElementById("compCafeDiv");
    let cafeLink = document.getElementById("cafeLink");
    let careerDiv = document.getElementById("compCareerDiv");
    let careerLink = document.getElementById("careerLink");

    bioDiv.className = "hide";
    bioLink.className = "";
    cafeDiv.className = "hide";
    cafeLink.className = "";
    careerDiv.className = "show";
    careerLink.className = "selected";
}

const Intro = () => {

      function showMenu () {
        const mobInfoMenuCont = document.getElementById("mobInfoMenuCont");
        const infoMenuBtn = document.getElementById("infoMenuBtn");

        if(infoMenuBtn.innerHTML == "+"){
            infoMenuBtn.innerHTML = "-"
            mobInfoMenuCont.style.setProperty('visibility', 'visible');
            mobInfoMenuCont.style.setProperty('display', 'initial');
        }else{
            if(infoMenuBtn.innerHTML == "-"){
                infoMenuBtn.innerHTML = "+"
                mobInfoMenuCont.style.setProperty('visibility', 'collapse');
                mobInfoMenuCont.style.setProperty('display', 'none');

            }
        }
      }

    return(
        <main>
            <ImgBlock imgUrl={womanCoffee} showTxtOverlay="true" hideButtonWhite="true"/>
            <article className="info-grid">
                <nav className="desktopInfoMenu">
                    <a id="bioLink" onClick={showBio}>Vår Historie</a>
                    <a id="cafeLink" onClick={showCafes}>Våre Kaffebarer</a>
                    <a id="careerLink" onClick={showCareer}>Bli en kaffemaker</a>
                </nav>

                <article className="mobileInfo">
                    <div>
                        <div id="openInfoMenuBtnCont" className="openInfoMenuBtnContainer">
                            <button id="infoMenuBtn" onClick = { () => {showMenu()}}>+</button>
                        </div>
                    </div>

                    <div id="mobInfoMenuCont" className="mobileInfoMenuContainer">
                        <nav>
                            <a id="bioLink" onClick={showBio}>Vår Historie</a>
                            <a id="cafeLink" onClick={showCafes}>Våre Kaffebarer</a>
                            <a id="careerLink" onClick={showCareer}>Bli en kaffemaker</a>
                        </nav>
                    </div>
                </article> 

                <div>
                    <div id="compBioDiv" className="show"><Bio/></div>
                    <div id="compCafeDiv" className="hide"><Cafes/></div>
                    <div id="compCareerDiv" className="hide"><Career/></div>
                </div>             
            </article>
            
        </main>
    )
}

export default Intro
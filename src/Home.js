import React from 'react';
import ImgBlock from './components/imgBlock/ImgBlock';
import TxtBlock from './components/txtBlock/TxtBlock';
import PreviewBlock from './components/previewBlock/PreviewBlock';
import coffeePress from './images/coffeePress.jpg';
import coffeeHeart from './images/coffeeHeart.jpg';
import coffeeshop from './images/coffeeshop.jpg';

// A little too late, I realized I wanted ImgBlock 2 and 3 in Home to have a shorter height than the first. That the "hero" would remain the same on each page, but the ImgBlocks working as decorative backgrounds would not. I should, and I will create a separate component for this reason.

// Products will have a drop-down menu containing Kaffe, Tea, and Other

// I also didn't have time to attach working links to buttons and other a-elements outside header. 

function Home() {
  return (
    <main>
      <ImgBlock imgUrl={coffeePress} showTxtOverlay="false" quote="Lyst på" title="verdens beste" quote2="jobb?"/> 
      <TxtBlock title="Velkommen" txt1="I 2005 åpnet Kaffemakeriet sin første kaffebar. Drivkraften i Kaffemakeriet er stor lidenskap for kaffe og alt som hører med. Vi kan i dag tilby kaffe og te i en rekke varianter, bakevarer, iskrem, smoothies og milkshakes i mange forskjellige smaker. Etter mye testing og langt samarbeid med kunder og leverandører har vi valgt ut det vi mener er de beste råvarene og produktene til våre kaffebarer." txt2="Målet vårt er å bestandig ha fornøyde kunder. For mange er kaffe en stor lidenskap og våre kunder har høye forventninger. Da holder det ikke med bare gode råvarer, vi må også ha topp utstyr. Vi ønsker kvalitet i alle ledd og alt fra steamkopp til kvern og kaffemaskin ble nøye testet før vi tok det i bruk. Man får ikke en god kopp kaffe uten at noen som virkelig kan lage den gjør det."/>
      <ImgBlock imgUrl={coffeeHeart} showTxtOverlay="false"  hideButtonWhite="true" customClass="imgBlockMobile"/>
      <PreviewBlock title="Anbefalte produkter" showKaffe="false" showCarousel="false" SmallProductsLib="true"/>
      <ImgBlock imgUrl={coffeeshop} showTxtOverlay="false" hideButtonWhite="true" customClass="imgBlockMobile"/>
      <PreviewBlock title="Blogg" showArticleBlock="true" hideButtonDark="true" />

    </main>
  );
}

export default Home;
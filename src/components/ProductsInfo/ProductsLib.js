
import React, {useState, useEffect}from 'react'
import ProductsCoffee from './ProductsCoffee';
import '../previewBlock/previewBlock.css';
import './coffeeCat.css';
import CoffeeProd from '../../CoffeeProd.json';

import donmayoCoffee from  '../../images/products/donmayoCoffee.png';
import cerrolostamalesCoffee from  '../../images/products/cerrolostamalesCoffee.png';
import sonoraCoffee from  '../../images/products/sonoraCoffee.png';
import MamaMina from  '../../images/products/MamaMina.png';
import burbonjungle from  '../../images/products/burbonjungle.png';
import merthimountain from  '../../images/products/merthimountain.png';
import madanestate from  '../../images/products/madanestate.png';
import monsoonedMalabar from  '../../images/products/monsoonedMalabar.png';
import lasPalmas from  '../../images/products/lasPalmas.png';
import kanketi from  '../../images/products/kanketi.png';
import mihuti from  '../../images/products/mihuti.png';
import tade from  '../../images/products/tade.png';
import gatugi from  '../../images/products/Gatugi.png';
import azucarbuena from '../../images/products/azucarbuena.png';
import clemente from '../../images/products/clemente.png';
import yeniRamos from '../../images/products/yeniRamos.png';
import fazendoBarreiro from '../../images/products/fazendoBarreiro.png';
import tadeEspresso from '../../images/products/tadeEspresso.png';
import planadasEspresso from '../../images/products/planadasEspresso.png';
import barreiroEspresso from '../../images/products/barreiroEspresso.png';
import madanEspresso from '../../images/products/madanEspresso.png';
import javaMocca from '../../images/products/javaMocca.png';
import franskbrent from '../../images/products/franskbrent.png';
import halfNhalf from '../../images/products/halfNhalf.png';
import italienskbrent from '../../images/products/italienskbrent.png';
import nicaragua from '../../images/products/nicaragua.png';
import laBolsa from '../../images/products/laBolsa.png';
import kraftigjulekaffe from '../../images/products/kraftigjulekaffe.png';
import klassiskjulekaffe from '../../images/products/klassiskjulekaffe.png';
import juleEspresso from '../../images/products/juleespresso.png';
import tarquiEspresso from '../../images/products/tarquiEspresso.png';
import tarqui from '../../images/products/tarqui.png';

//s
const coffeeProductsList = [
  {
    "title": "Don Mayo",
    "url": donmayoCoffee, 
    "description": "En ren og kompleks kaffe med duft av tørket frukt. Smak av kakao og mørke bær.",
    "region": "Mellom-Amerika",
    "origin": "Costa Rica",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Cerro Los Tamales",
    "url": cerrolostamalesCoffee,
    "description": "En saftig og rundt kaffe med duft av melkesjokolade og karamell. Smak av modne røde bær og en søt syrlighet lik som rips. Floral og lang ettersmak.",
    "region": "Mellom-Amerika",
    "origin": "El Salvador",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
 {
    "title": "Sonora",
    "url": sonoraCoffee, 
    "description": "En søt og frisk kaffe med aroma av modne bær og vanilje. Smak av markjordbær og eple. En søt og floral ettersmak med preg av plomme.",
    "region": "Mellom-Amerika",
    "origin": "Costa Rica",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  }, 
  {
    "title": "Mama Mina",
    "url": MamaMina, 
    "description": "Vanilje og plomme på duft. En fyldig kaffe med toner av mørke bær og karamell. Lang ettersmak av søt steinfrukt..",
    "region": "Mellom-Amerika",
    "origin": "Nicaragua",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Burbon Jungle",
    "url": burbonjungle, 
    "description": "Floral aroma med toner av mørke bær og karamell. En saftig og middels fyldig kaffe med smak av epler og røde bær.",
    "region": "Mellom-Amerika",
    "origin": "El Salvador",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Merthi Mountain",
    "url": merthimountain, 
    "description": "En rustikk og fyldig kaffe. Duft av søt tobakk. Smak av kakao og solbær.",
    "region": "Asia",
    "origin": "India",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Madan Estate",
    "url": madanestate, 
    "description": "En søt og fyldig kaffe. Duft av friske bær, vanilje og tørket frukt. Smak av rabarbra og plomme. Rund, lang og søt ettersmak.",
    "region": "Asia",
    "origin": "Papa Ny-Guinea",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Monsooned Malabar",
    "url": monsoonedMalabar, 
    "description": "En særegen aroma av søt tobakk, salt sjøluft og lær. Kraftig på smak med toner av sjokolade, nøtter og vanilje.",
    "region": "Asia",
    "origin": "India",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Las Palmas",
    "url": lasPalmas, 
    "description": "En søt og intens kaffe med duft av tørket frukt og sjokolade. Smak av søte epler, og en floral avslutning.",
    "region": "Mellom-Amerika",
    "origin": "El Salvador",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Kanketi",
    "url": kanketi, 
    "description": "En frisk og saftig kaffe med floral duft av sjasmin. Smak av grønt eple, bergamott og sort te.",
    "region": "Afrika",
    "origin": "Etiopia",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Mihuti",
    "url": mihuti, 
    "description": "En fruktig og ren kaffe med krydret duft. Smak av solbær, kirsebær og plomme. Ettersmak av rabarbra og grapefrukt.",
    "region": "Afrika",
    "origin": "Kenya",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Tade",
    "url": tade, 
    "description": "En delikat og leskende kaffe med floral aroma av jasmin og sitronmelisse. Smaker av bergamott, søt sitrus og honning.",
    "region": "Afrika",
    "origin": "Etiopia",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Gatugi",
    "url": gatugi, 
    "description": "En saftig og bærfrisk kaffe. Duft av røde bær. Smak av rips og solbær.",
    "region": "Afrika",
    "origin": "Kenya",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Azucár Buena",
    "url": azucarbuena, 
    "description": "En saftig og delikat kaffe. Duft av marsipan og kirsebær. Krydret smak av vanilje, kardemomme og nype. Søt ettersmak.",
    "region": "Sør-Amerika",
    "origin": "Colombia",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Clemente",
    "url": clemente, 
    "description": "Lys sjokolade og karamell på duft. Toner av floralitet. En leskende kaffe med smak av grønne epler. Frisk avslutning.",
    "region": "Sør-Amerika",
    "origin": "Peru",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Yeni Ramos",
    "url": yeniRamos, 
    "description": "Duft av sjasmin og søte epler. En søt og fruktig kaffe med smak av moden frukt og kirsebær. Saftig ettersmak.",
    "region": "Sør-Amerika",
    "origin": "Colombia",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Fazendo Barreiro",
    "url": fazendoBarreiro, 
    "description": "En rund og søt kaffe. Duft av hasselnøtt. Smak av sjokolade og tørket frukt.",
    "region": "Sør-Amerika",
    "origin": "Brasil",
    "productID": "Kaffe",
    "roast": "Normalbrent"
  },
  {
    "title": "Tade Espresso",
    "url": tadeEspresso, 
    "description": "En balansert espresso med floral aroma. Smaken er delikat og preges av søt sitrus som bergamott og appelsin. Tørket frukt i ettersmaken.",
    "region": "Afrika",
    "origin": "Etiopia",
    "productID": "Kaffe",
    "roast": "Espresso"
  },
  {
    "title": "Planadas Espresso",
    "url": planadasEspresso, 
    "description": "En saftig og intens espresso. Kirsebær på duft. Smak av tørket aprikos, kirsebær og sjokolade.",
    "region": "Sør-Amerika",
    "origin": "Colombia",
    "productID": "Kaffe",
    "roast": "Espresso"
  },
  {
    "title": "Fazenda Barreiro Espresso",
    "url": barreiroEspresso, 
    "description": "En søt og intens espresso med smak av hasselnøtter og bjørnebær. Ettersmak av mørk sjokolade. Lang avslutning.",
    "region": "Sør-Amerika",
    "origin": "Brasil",
    "productID": "Kaffe",
    "roast": "Espresso"
  },
  {
    "title": "Madan Estate",
    "url": madanEspresso, 
    "description": "En saftig espresso med smak av søte plommer og solbær.",
    "region": "Asia",
    "origin": "Papa Ny-Guinea",
    "productID": "Kaffe",
    "roast": "Espresso"
  },
  {
    "title": "Java Mocca",
    "url": javaMocca, 
    "description": "Fruktig aroma med toner av nøtter og karamell. En sødmefull kaffe med ettersmak av mørk sjokolade og moden frukt.",
    "region": "Blanding",
    "origin": "Kaffeblanding",
    "productID": "Kaffe",
    "roast": " "
  },
  {
    "title": "Franskbrent",
    "url": franskbrent, 
    "description": "Søt aroma av karamell og nøtter. En klassisk og rund espresso med smak av kirsebær, nøtter og sjokolade.",
    "region": "Blanding",
    "origin": "Espressoblanding",
    "productID": "Kaffe",
    "roast": "Espresso"
  },
  {
    "title": "Half & Half",
    "url": halfNhalf, 
    "description": "Aroma av melkesjokolade, karamell og nøtter. En rund espresso med smak av sjokolade og moden mørk steinfrukt.",
    "region": "Blanding",
    "origin": "Espressoblanding",
    "productID": "Kaffe",
    "roast": "Espresso"
  },
  {
    "title": "Italienskbrent",
    "url": italienskbrent, 
    "description": "Aroma av mørk karamell og ristede nøtter. En kremet og intens espresso med toner av vanilje og smak av mørk kakao.",
    "region": "Blanding",
    "origin": "Mørkbrent espresso",
    "productID": "Kaffe",
    "roast": "Espresso"
  },
  {
    "title": "Funky Naturals: Nicaragua",
    "url": nicaragua, 
    "description": "En søt og funky kaffe med duft av modne bær og vanilje. Smak av tropisk frukt og sitronmelisse.",
    "region": "Mellom-Amerika",
    "origin": "Nicaragua",
    "productID": "Kaffe",
    "roast": " "
  },
  {
    "title": "La Bolsa",
    "url": laBolsa, 
    "description": "En saftig og kompleks kaffe. Duft av mandel, karamell og appelsin. Smak av friske bær og sitrus.",
    "region": "Mellom-Amerika",
    "origin": "En julefortelling fra Guatemala",
    "productID": "Kaffe",
    "roast": " "
  },
  {
    "title": "Kraftig Julekaffe",
    "url": kraftigjulekaffe, 
    "description": "En mørkere brent og fyldig kaffe. Duft av plomme. Smak av kokesjokolade og mørke bær.",
    "region": "Asia",
    "origin": "Papa Ny-Guinea",
    "productID": "Kaffe",
    "roast": "Mørkbrent"
  },
  {
    "title": "Klassisk Julekaffe",
    "url": klassiskjulekaffe, 
    "description": "En søt og saftig kaffe. Duft av vanilje, nøtter og bjørnebær. Smak av kakao, karamell og røde bær.",
    "region": "Mellom-Amerika",
    "origin": "Costa Rica",
    "productID": "Kaffe",
    "roast": " "
  },
  {
    "title": "Juleespresso",
    "url": juleEspresso, 
    "description": "En kremet og søt espresso med moden fruktkarakter. Smak av kirsebær, og et hint av jordbær og vanilje.",
    "region": "Blanding",
    "origin": "El Salvador og Colombia",
    "productID": "Kaffe",
    "roast": "Espresso"
  },
  {
    "title": "Dekaffinert Espresso, Tarqui",
    "url": tarquiEspresso, 
    "description": "modne røde bær i aromaen. Smak med preg av jordbær, vanilje og karamell. Balansert, med kremet munnfølelse.",
    "region": "Sør-Amerika",
    "origin": "Columbia",
    "productID": "Kaffe",
    "roast": "Espresso"
  },
  {
    "title": "Dekaffinert, Tarqui",
    "url": tarqui, 
    "description": "Om smaken: duft av modne bær og vanilje. Kremet kaffe med smak av melkesjokolade og tørket frukt. Krydret og søt ettersmak.",
    "region": "Sør-Amerika",
    "origin": "Colombia",
    "productID": "Kaffe",
    "roast": " "
  }
]

const ProductsLib = (props) => {

  function hightlightHandler (highlightedBtnId, containerId) {   
    const roastBtnCluster = document.getElementById("roastDiv");
    const regionBtnCluster = document.getElementById("regionDiv");

    if(containerId == "roastDiv"){
      for (var i = 0; i<roastBtnCluster.getElementsByTagName("BUTTON").length; i++) {
        const currentBtn = roastBtnCluster.getElementsByTagName("BUTTON")[i]
        if (currentBtn.className == "highlightBtn") {
          currentBtn.className = " ";
        } else {
          if (currentBtn.id==highlightedBtnId) {
            currentBtn.className = "highlightBtn";
          } else {
            currentBtn.className = " ";
          }
        }
      }
    }else if(containerId == "regionDiv"){
      for (var i = 0; i<regionBtnCluster.getElementsByTagName("BUTTON").length; i++) {
        const currentBtn = regionBtnCluster.getElementsByTagName("BUTTON")[i]
        if (currentBtn.className == "highlightBtn") {
          currentBtn.className = " ";
        } else {
          if (currentBtn.id==highlightedBtnId) {
            currentBtn.className = "highlightBtn";
          } else {
            currentBtn.className = " ";
          }
        }
      }
    }else if (containerId == "all"){
      for (var i = 0; i<roastBtnCluster.getElementsByTagName("BUTTON").length; i++) {
        const currentBtn = roastBtnCluster.getElementsByTagName("BUTTON")[i]
        currentBtn.className = " ";
      } 
      
      for (var i = 0; i<regionBtnCluster.getElementsByTagName("BUTTON").length; i++) {
        const currentBtn = regionBtnCluster.getElementsByTagName("BUTTON")[i]
        currentBtn.className = " ";
      }
    }
  }

  var coffeeProducts = coffeeProductsList 
  var [products, filterProducts] = useState(coffeeProducts)

  const [roast, setRoast] = useState("all");
  const [region, setRegion] = useState("all");

  useEffect(() => { 
    filterCoffeeProducts();
  }, [roast, region])

  var changeRoast = (typeRoast) =>{
    setRoast(typeRoast);
  }

  function changeRegion(typeRegion) {
    setRegion(typeRegion);
  } 

  function filterCoffeeProducts() {
    var copyCoffeeProducts = [...coffeeProducts]
    if(roast === "all" && region === "all") {
      console.log("1")
      filterProducts(coffeeProductsList)
      return;
    }

    if(roast === "all") {
      console.log("2")
      copyCoffeeProducts = copyCoffeeProducts.filter( product => product.region === region);
      filterProducts(copyCoffeeProducts)
      return;
    }

    if(region === "all") {
      console.log("3")
      copyCoffeeProducts = copyCoffeeProducts.filter( product => product.roast === roast);
      filterProducts(copyCoffeeProducts)
      return;
    }

    console.log("4")
    copyCoffeeProducts = copyCoffeeProducts.filter( product => product.roast === roast && product.region === region);
    filterProducts(copyCoffeeProducts)
  }

  return(
    <article className="coffeeCat">
        <div>
          <h4>Kaffe</h4>
          <p>Brenningsgrad</p>
          <div className="products-btns-mobile" id="roastDiv">
            <button id="btn-normal-roast" onClick={() => {
              hightlightHandler("btn-normal-roast", "roastDiv");
              changeRoast("Normalbrent");
            }} >Normal brent</button>

            <button id="btn-dark-roast" onClick={ () => {
              hightlightHandler("btn-dark-roast", "roastDiv");
              changeRoast("Mørkbrent");
            }}> Mørk brent </button>

            <button id="btn-espresso" onClick={ () => {
              hightlightHandler("btn-espresso", "roastDiv");
              changeRoast("Espresso");
            }}>Espresso</button>
          </div>
          <br/>
          <p>Region</p>
          <div className="products-btns-mobile" id="regionDiv">
            <button id="btn-Afrika" onClick={ () => {
              hightlightHandler("btn-Afrika", "regionDiv");
              changeRegion("Afrika");
            }}>Afrika</button>
            <button id="btn-Asia" onClick={ () => {
              hightlightHandler("btn-Asia", "regionDiv");
              changeRegion("Asia");
            }}>Asia</button>
            <button id="btn-MAmerika" onClick={ () => {
             hightlightHandler("btn-MAmerika", "regionDiv");
             changeRegion("Mellom-Amerika");
            }}>Mellom-Amerika</button>
            <button id="btn-SAmerika" onClick={ () => {
              hightlightHandler("btn-SAmerika", "regionDiv");
              changeRegion("Sør-Amerika");
            }}>Sør-Amerika</button>
            <button id="btn-Blanding" onClick={ () => {
              hightlightHandler("btn-Blanding", "regionDiv");
              changeRegion("Blanding");
            }}>Blanding</button>
          </div>
          <br></br>
          <button id="btn-normal-roast" onClick={() => {
              hightlightHandler("btn-normal-roast", "all");
              changeRegion("all");
              changeRoast("all");
            }}>Vis alle</button>
      </div>
      <div className='productsShow-columns'>
        {
          products.map(
            (product, i) =>
            <ProductsCoffee 
                key={i}
                url={product.url}
                title={product.title}
                description={product.description}
                origin={product.origin}
                region={product.region}
                roast={product.roast}
                productID={product.productID}
                ingredients={product.ingredients}
                type={product.ingrediens}
              /> 
          )
        }
      </div>
    </article>
  )
}


export default ProductsLib




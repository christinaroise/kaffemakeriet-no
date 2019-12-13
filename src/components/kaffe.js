import React, {useState, useEffect}from 'react'
import ProductsCoffee from './ProductsInfo/ProductsCoffee';
import CoffeeProd from '../CoffeeProd.json'
import ButtonDark from '../components/buttons/ButtonDark'
import './kaffe.css'

import donmayoCoffee from  '../images/donmayoCoffee.png'

const Kaffe = (props) => {
  const coffeeProducts = [
    {
      "title": "Don Mayo",
      "url": {donmayoCoffee}, 
      "description": "En ren og kompleks kaffe med duft av tørket frukt. Smak av kakao og mørke bær.",
      "region": "Mellom-Amerika",
      "origin": "Costa Rica",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Cerro Los Tamales",
      "url": "../../assets/images/products/cerrolostamalesCoffee.png",
      "description": "En saftig og rundt kaffe med duft av melkesjokolade og karamell. Smak av modne røde bær og en søt syrlighet lik som rips. Floral og lang ettersmak.",
      "region": "Mellom-Amerika",
      "origin": "El Salvador",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
   {
      "title": "Sonora",
      "url": "../../assets/images/products/sonoraCoffee.png", 
      "description": "En søt og frisk kaffe med aroma av modne bær og vanilje. Smak av markjordbær og eple. En søt og floral ettersmak med preg av plomme.",
      "region": "Mellom-Amerika",
      "origin": "Costa Rica",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    }, 
    {
      "title": "Mama Mina",
      "url": "../../assets/images/products/MamaMina.png", 
      "description": "Vanilje og plomme på duft. En fyldig kaffe med toner av mørke bær og karamell. Lang ettersmak av søt steinfrukt..",
      "region": "Mellom-Amerika",
      "origin": "Nicaragua",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Burbon Jungle",
      "url": "../../assets/images/products/burbonjungle.png", 
      "description": "Floral aroma med toner av mørke bær og karamell. En saftig og middels fyldig kaffe med smak av epler og røde bær.",
      "region": "Mellom-Amerika",
      "origin": "El Salvador",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Merthi Mountain",
      "url": "../../assets/images/products/merthimountain.png", 
      "description": "En rustikk og fyldig kaffe. Duft av søt tobakk. Smak av kakao og solbær.",
      "region": "Asia",
      "origin": "India",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Madan Estate",
      "url": "../../assets/images/products/madanestate.png", 
      "description": "En søt og fyldig kaffe. Duft av friske bær, vanilje og tørket frukt. Smak av rabarbra og plomme. Rund, lang og søt ettersmak.",
      "region": "Asia",
      "origin": "Papa Ny-Guinea",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Monsooned Malabar",
      "url": "../../assets/images/products/monsoonedMalabar.png", 
      "description": "En særegen aroma av søt tobakk, salt sjøluft og lær. Kraftig på smak med toner av sjokolade, nøtter og vanilje.",
      "region": "Asia",
      "origin": "India",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Las Palmas",
      "url": "../../assets/images/products/lasPalmas.png", 
      "description": "En søt og intens kaffe med duft av tørket frukt og sjokolade. Smak av søte epler, og en floral avslutning.",
      "region": "Mellom-Amerika",
      "origin": "El Salvador",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Kanketi",
      "url": "../../assets/images/products/kanketi.png", 
      "description": "En frisk og saftig kaffe med floral duft av sjasmin. Smak av grønt eple, bergamott og sort te.",
      "region": "Afrika",
      "origin": "Etiopia",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Mihuti",
      "url": "../../assets/images/products/mihuti.png", 
      "description": "En fruktig og ren kaffe med krydret duft. Smak av solbær, kirsebær og plomme. Ettersmak av rabarbra og grapefrukt.",
      "region": "Afrika",
      "origin": "Kenya",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Tade",
      "url": "../../assets/images/products/tade.png", 
      "description": "En delikat og leskende kaffe med floral aroma av jasmin og sitronmelisse. Smaker av bergamott, søt sitrus og honning.",
      "region": "Afrika",
      "origin": "Etiopia",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Gatugi",
      "url": "../../assets/images/products/gatugi.png", 
      "description": "En saftig og bærfrisk kaffe. Duft av røde bær. Smak av rips og solbær.",
      "region": "Afrika",
      "origin": "Kenya",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Azucár Buena",
      "url": "../../assets/images/products/azucarbuena.png", 
      "description": "En saftig og delikat kaffe. Duft av marsipan og kirsebær. Krydret smak av vanilje, kardemomme og nype. Søt ettersmak.",
      "region": "Sør-Amerika",
      "origin": "Colombia",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Clemente",
      "url": "../../assets/images/products/clemente.png", 
      "description": "Lys sjokolade og karamell på duft. Toner av floralitet. En leskende kaffe med smak av grønne epler. Frisk avslutning.",
      "region": "Sør-Amerika",
      "origin": "Peru",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Yeni Ramos",
      "url": "../../assets/images/products/yeniRamos.png", 
      "description": "Duft av sjasmin og søte epler. En søt og fruktig kaffe med smak av moden frukt og kirsebær. Saftig ettersmak.",
      "region": "Sør-Amerika",
      "origin": "Colombia",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Fazendo Barreiro",
      "url": "../../assets/images/products/fazendoBarreiro.png", 
      "description": "En rund og søt kaffe. Duft av hasselnøtt. Smak av sjokolade og tørket frukt.",
      "region": "Sør-Amerika",
      "origin": "Brasil",
      "productID": "Kaffe",
      "roast": "Normalbrent"
    },
    {
      "title": "Tade Espresso",
      "url": "../../assets/images/products/tadeEspresso.png", 
      "description": "En balansert espresso med floral aroma. Smaken er delikat og preges av søt sitrus som bergamott og appelsin. Tørket frukt i ettersmaken.",
      "region": "Afrika",
      "origin": "Etiopia",
      "productID": "Kaffe",
      "roast": "Espresso"
    },
    {
      "title": "Planadas Espresso",
      "url": "../../assets/images/products/planadasEspresso.png", 
      "description": "En saftig og intens espresso. Kirsebær på duft. Smak av tørket aprikos, kirsebær og sjokolade.",
      "region": "Sør-Amerika",
      "origin": "Colombia",
      "productID": "Kaffe",
      "roast": "Espresso"
    },
    {
      "title": "Fazenda Barreiro Espresso",
      "url": "../../assets/images/products/barreiroEspresso.png", 
      "description": "En søt og intens espresso med smak av hasselnøtter og bjørnebær. Ettersmak av mørk sjokolade. Lang avslutning.",
      "region": "Sør-Amerika",
      "origin": "Brasil",
      "productID": "Kaffe",
      "roast": "Espresso"
    },
    {
      "title": "Madan Estate",
      "url": "../../assets/images/products/madanEspresso.png", 
      "description": "En saftig espresso med smak av søte plommer og solbær.",
      "region": "Asia",
      "origin": "Papa Ny-Guinea",
      "productID": "Kaffe",
      "roast": "Espresso"
    },
    {
      "title": "Java Mocca",
      "url": "../../assets/images/products/javaMocca.png", 
      "description": "Fruktig aroma med toner av nøtter og karamell. En sødmefull kaffe med ettersmak av mørk sjokolade og moden frukt.",
      "region": "Blanding",
      "origin": "Kaffeblanding",
      "productID": "Kaffe",
      "roast": " "
    },
    {
      "title": "Franskbrent",
      "url": "../../assets/images/products/franskbrent.png", 
      "description": "Søt aroma av karamell og nøtter. En klassisk og rund espresso med smak av kirsebær, nøtter og sjokolade.",
      "region": "Blanding",
      "origin": "Espressoblanding",
      "productID": "Kaffe",
      "roast": "Espresso"
    },
    {
      "title": "Half & Half",
      "url": "../../assets/images/products/halfNhalf.png", 
      "description": "Aroma av melkesjokolade, karamell og nøtter. En rund espresso med smak av sjokolade og moden mørk steinfrukt.",
      "region": "Blanding",
      "origin": "Espressoblanding",
      "productID": "Kaffe",
      "roast": "Espresso"
    },
    {
      "title": "Italienskbrent",
      "url": "../../assets/images/products/italienskbrent.png", 
      "description": "Aroma av mørk karamell og ristede nøtter. En kremet og intens espresso med toner av vanilje og smak av mørk kakao.",
      "region": "Blanding",
      "origin": "Mørkbrent espresso",
      "productID": "Kaffe",
      "roast": "Espresso"
    },
    {
      "title": "Funky Naturals: Nicaragua",
      "url": "../../assets/images/products/nicaragua.png", 
      "description": "En søt og funky kaffe med duft av modne bær og vanilje. Smak av tropisk frukt og sitronmelisse.",
      "region": "Mellom-Amerika",
      "origin": "Nicaragua",
      "productID": "Kaffe",
      "roast": " "
    },
    {
      "title": "La Bolsa",
      "url": "../../assets/images/products/laBolsa.png", 
      "description": "En saftig og kompleks kaffe. Duft av mandel, karamell og appelsin. Smak av friske bær og sitrus.",
      "region": "Mellom-Amerika",
      "origin": "En julefortelling fra Guatemala",
      "productID": "Kaffe",
      "roast": " "
    },
    {
      "title": "Kraftig Julekaffe",
      "url": "../../assets/images/products/kraftigjulekaffe.png", 
      "description": "En mørkere brent og fyldig kaffe. Duft av plomme. Smak av kokesjokolade og mørke bær.",
      "region": "Asia",
      "origin": "Papa Ny-Guinea",
      "productID": "Kaffe",
      "roast": "Mørkbrent"
    },
    {
      "title": "Klassisk Julekaffe",
      "url": "../../assets/images/products/klassiskjulekaffe.png", 
      "description": "En søt og saftig kaffe. Duft av vanilje, nøtter og bjørnebær. Smak av kakao, karamell og røde bær.",
      "region": "Mellom-Amerika",
      "origin": "Costa Rica",
      "productID": "Kaffe",
      "roast": " "
    },
    {
      "title": "Juleespresso",
      "url": "../../assets/images/products/juleEspresso.png", 
      "description": "En kremet og søt espresso med moden fruktkarakter. Smak av kirsebær, og et hint av jordbær og vanilje.",
      "region": "Blanding",
      "origin": "El Salvador og Colombia",
      "productID": "Kaffe",
      "roast": "Espresso"
    },
    {
      "title": "Dekaffinert Espresso, Tarqui",
      "url": "../../assets/images/products/tarquiEspresso.png", 
      "description": "modne røde bær i aromaen. Smak med preg av jordbær, vanilje og karamell. Balansert, med kremet munnfølelse.",
      "region": "Sør-Amerika",
      "origin": "Columbia",
      "productID": "Kaffe",
      "roast": "Espresso"
    },
    {
      "title": "Dekaffinert, Tarqui",
      "url": "../../assets/images/products/tarqui.png", 
      "description": "Om smaken: duft av modne bær og vanilje. Kremet kaffe med smak av melkesjokolade og tørket frukt. Krydret og søt ettersmak.",
      "region": "Sør-Amerika",
      "origin": "Colombia",
      "productID": "Kaffe",
      "roast": " "
    }
  ]

  var [products, limitProducts] = useState(coffeeProducts)

  function getProducts(limit) {
    var copyCoffeeProducts = [...coffeeProducts]
    var limitedCoffeList = []
    for(var i = 0; i < limit; i++){
      limitedCoffeList.push(copyCoffeeProducts[i])
    }
    limitProducts(limitedCoffeList)
  }

  useEffect(() => {
    getProducts(3)
  }, []);

    return(
      <article className="hidebuttonDiv">
        <div className="kaffe-columns">
         {
           products.map(
             (coffee, i) =>
             <ProductsCoffee 
                key={i}
                url={coffee.url}
                title={coffee.title}
                region={coffee.region}
              />
           )
         }
        </div>
        {props.hideButtonDark == "true" ? null : <ButtonDark showButtonDark="true" title="Alle produkter"/>}
      </article>
      )
}

export default Kaffe
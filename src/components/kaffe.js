import React, {useState, useEffect}from 'react'
import ProductsCoffee from './ProductsInfo/ProductsCoffee';
import CoffeeProd from '../CoffeeProd.json'
import ButtonDark from '../components/buttons/ButtonDark'
import './kaffe.css'

const Kaffe = (props) => {
  const coffeeProducts = CoffeeProd

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

import React, {useState} from 'react';
import ProductsCoffee from './ProductsCoffee';
import '../previewBlock/previewBlock.css';
import './coffeeCat.css';
import CoffeeProd from '../../CoffeeProd.json';

const ProductsLib = (props) => {

  var coffeeProducts = CoffeeProd 

  var [products, filterProducts] = useState(coffeeProducts)

  function filterByRoastValue(roast) {
    var copyCoffeeProducts = [...coffeeProducts]
    copyCoffeeProducts = copyCoffeeProducts.filter(function (product) {
      return (product.roast === roast)
    })
    filterProducts(copyCoffeeProducts)
  }

  function filterByOrigin(region) {
    var copyCoffeeProducts = [...coffeeProducts]
    copyCoffeeProducts = copyCoffeeProducts.filter(function (product) {
      return (product.region === region)
    })
    filterProducts(copyCoffeeProducts)
  }


  return(
    <article className="coffeeCat">
        <div>
          <h4>Kaffe</h4>
          <p>Brenningsgrad</p>
          <button onClick={ () => filterByRoastValue("Normalbrent")} >Normal brent</button>
          <button onClick={ () => filterByRoastValue("Mørkbrent")}> Mørk brent </button>
          <button onClick={ () => filterByRoastValue("Espresso")}>Espresso</button>
          <br/>
          <p>Region</p>
          <button onClick={ () => filterByOrigin("Afrika")}>Afrika</button>
          <button onClick={ () => filterByOrigin("Asia")}>Asia</button>
          <button onClick={ () => filterByOrigin("Mellom-Amerika")}>Mellom-Amerika</button>
          <button onClick={ () => filterByOrigin("Sør-Amerika")}>Sør-Amerika</button>
          <button onClick={ () => filterByOrigin("Blanding")}>Blanding</button>
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




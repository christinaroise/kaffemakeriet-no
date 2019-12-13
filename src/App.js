import React from 'react';
import './App.css';
import Home from './Home';
import Info from './Info';
import Produkter from './Produkter';
import Footer from './components/various/Footer';
import logo from './images/logo.png'

import { HashRouter, Route, Link } from "react-router-dom";

const NavLink = props => (
  <Link 
    {...props}
    getProps={({isCurrent}) => {
      return {
        style: {  
          color: isCurrent ? "#a7a7a7" : "white",
          textDecoration: isCurrent ? "none" : "none"
          }
        }
      }
    }
    />
)

// The logo (I stole) wasn't a true black, so when I inverted it in css it didn't turn white. I totally forgot to fix that.

const App = () => {
  return (
    <HashRouter basename='/'>
      <main>
        <article className='header'>
          <img src={logo}/>
          <nav>
            <Link to="/">Hjem</Link>
            <Link to="Info">Info</Link>
            <Link to="Produkter">Produkter</Link>
          </nav>
        </article>
        <Route exact path="/" component={Home} />
        <Route path="/Info" component={Info} />
        <Route path="/Produkter" component={Produkter} />
        <Footer/>
      </main>
    </HashRouter>
  )
  
}


export default App 

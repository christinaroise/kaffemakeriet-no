import React from 'react';
import {Router, Link} from '@reach/router';
import './App.css';
import Home from './Home';
import Info from './Info';
import Produkter from './Produkter';
import Footer from './components/various/Footer';

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
    <main>
      <article className='header'>
        <img src="../../assets/images/logo.png"/>
        <nav>
          <NavLink to="/">Hjem</NavLink>
          <NavLink to="Info">Info</NavLink>
          <NavLink to="Produkter">Produkter</NavLink>
        </nav>
      </article>
      <Router>
        <Home path="/" />
        <Info path="Info" />
        <Produkter path="Produkter"/>
      </Router>
      <Footer/>
    </main>
  )
  
}


export default App 

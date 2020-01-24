import React from 'react';
import './App.css';
import Home from './Home';
import Info from './Info';
import Produkter from './Produkter';
import Footer from './components/various/Footer';
import logo from './images/logo.png'

import { HashRouter, Route, NavLink } from "react-router-dom";

// The logo (I stole) wasn't a true black, so when I inverted it in css it didn't turn white. I totally forgot to fix that.

const App = () => {

  function showMenu () {
    const openMenuContainer = document.getElementById("openMenuContainer");
    const mobileMenuContainer = document.getElementById("mobileMenuContainer");

    openMenuContainer.style.setProperty('opacity', '0');
    mobileMenuContainer.style.setProperty('opacity', '1');
    mobileMenuContainer.style.setProperty('z-index', '6');
  }

  function hideMenu () {
    const openMenuContainer = document.getElementById("openMenuContainer");
    const mobileMenuContainer = document.getElementById("mobileMenuContainer");

    openMenuContainer.style.setProperty('opacity', '1');
    mobileMenuContainer.style.setProperty('opacity', '0');
    mobileMenuContainer.style.setProperty('z-index', '-1');

  }

  return (
    <HashRouter basename='/'>
      <main>
        <article className='header'>
          <img src={logo}/>
          <nav className="desktopMenu">
            <NavLink exact to="/" activeClassName="nav-link--active">Hjem</NavLink>
            <NavLink to="Info" activeClassName="nav-link--active">Info</NavLink>
            <NavLink to="Produkter" activeClassName="nav-link--active">Produkter</NavLink>
          </nav>
        </article>
        <article className="headerMobile">
         <div>
            <div id="openMenuContainer" className="mobileToggleMenuBtn">
              <button onClick = { () => {showMenu()}}>
                <svg height="2.8rem" viewBox="0 -66 335.628 335" width="2.25rem" xmlns="http://www.w3.org/2000/svg"><path d="m328.628906 188.3125h-321.628906c-3.867188 0-7 3.136719-7 7 0 3.867188 3.132812 7 7 7h321.628906c3.863282 0 7-3.132812 7-7 0-3.863281-3.136718-7-7-7zm0 0"/><path d="m328.628906 94.3125h-321.628906c-3.867188 0-7 3.136719-7 7 0 3.867188 3.132812 7 7 7h321.628906c3.863282 0 7-3.132812 7-7 0-3.863281-3.136718-7-7-7zm0 0"/><path d="m328.628906.3125h-321.628906c-3.867188 0-7 3.136719-7 7 0 3.867188 3.132812 7 7 7h321.628906c3.863282 0 7-3.132812 7-7 0-3.863281-3.136718-7-7-7zm0 0"/></svg>
              </button>
            </div>
          </div>
          <nav id="mobileMenuContainer" className="mobileMenu">
            <div className="mobileExitBtn">
              <button onClick = { () => {hideMenu()}}>
                <svg id="Capa_1" enable-background="new 0 0 413.348 413.348" height="2.1rem" viewBox="0 0 413.348 413.348" width="2.2rem" xmlns="http://www.w3.org/2000/svg"><path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>
              </button>
            </div>
            <div className="mobileMenuList">
            <h2>Meny</h2>
            <NavLink onClick = { () => {hideMenu()}} to="/" activeClassName="nav-link--active">Hjem</NavLink>
            <NavLink onClick = { () => {hideMenu()}} to="Info" activeClassName="nav-link--active">Info</NavLink>
            <NavLink onClick = { () => {hideMenu()}} to="Produkter" activeClassName="nav-link--active">Produkter</NavLink>
            </div>
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

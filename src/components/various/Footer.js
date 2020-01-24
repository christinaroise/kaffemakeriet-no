import React from 'react';
import {Link} from "react-router-dom";

import Home from '../../Home.js';
import Info from '../../Info.js';
import Produkter from '../../Produkter.js';


function scrollToTop() {
    window.scrollTo({
      top: 0
    });
}


const Footer = () => {
    return(
        <article className="footer">
            <div className="footer-columns">
                <div className="footer-menu">
                    <h4>Meny</h4>
                    <Link to ="/">
                        <a onClick={() => scrollToTop()}>Hjem</a>
                    </Link>
                    <Link to="/Info">
                        <a onClick={() => scrollToTop()}>Info</a>
                    </Link>
                    <Link to="/Produkter">
                        <a onClick={() => scrollToTop()}>Produkter</a>
                    </Link>
                    <a href="https://www.instagram.com/kaffemakeriet/">Instagram</a>
                    <a href="https://www.facebook.com/KAFFEMAKERIET">Facebook</a>
                </div>

                <div className="hours">
                    <h4>Åpningstider</h4>
                    <p>Kaffemakeriet Metro
                        <br/>Bibloiteksgata 30
                        <br/>1473 Lørenskog</p>
                    <p>Man-Fre 930-21
                        <br/>Lør 9-18</p>
                    <p>Kaffemakeriet Jessheim
                        <br/>Storgata 6
                        <br/>2050 Jessheim</p>
                    <p>Man-Fre 930-21
                        <br/>Lør 930-19</p>
                </div>

                <div className="contact">
                    <h4>Kontakt</h4>
                    <p>Hovedkontor</p>
                    <p>Telefon 930 89 710
                        <br/>E-post post@kaffemakeriet.no</p>
                    <p>Kaffemakeriet Norge AS
                        <br/>Postboks 224
                        <br/>1417 Lørenskog</p>
                </div>
            </div>
            <div className="credits">
                    <h5>Developed and Designed by Christina Røise</h5>
                </div>

        </article>
    )
}

export default Footer
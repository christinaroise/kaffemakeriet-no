import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import './carousel.css'
import ButtonDark from '../buttons/ButtonDark'


// This component is not finished. I'd like to link it to CoffeeProd.json but am running out of time. 

//It is mobile and desktop friendly, but NOT tablet/iPad friendly. 

const CarouselBlock = (props) => {
    return(
        <article className="carouselBlock">
            <Carousel className="carousel">
                <Carousel.Item className="carouselItem">
                    <img
                    src="../../assets/images/products/donmayoCoffee.png"
                    alt="First slide"
                    />
                    <h4>Don Mayo</h4>
                    <h5>Kaffe fra Mellom-Amerika</h5>
                
                </Carousel.Item>

                <Carousel.Item className="carouselItem">
                    <img
                    src="../../assets/images/products/cerrolostamalesCoffee.png"
                    alt="Second slide"
                    />
                    <h4>Cerro Los Tamales</h4>
                    <h5>Kaffe fra Mellom-Amerika</h5>
                </Carousel.Item>

                <Carousel.Item className="carouselItem">
                    <img
                    src="../../assets/images/products/sonoraCoffee.png"
                    alt="Third slide"
                    />
                    <h4>Sonora</h4>
                    <h5>Kaffe fra Mellom-Amerika</h5>
                </Carousel.Item>
            </Carousel>
            <div className="btnDarkCarousel">
                {props.hideButtonDark == "true" ? null : <ButtonDark showButtonDark="true" title="Alle produkter"/>}
            </div>

        </article>
    )
}

export default CarouselBlock
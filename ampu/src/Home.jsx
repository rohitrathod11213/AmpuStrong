import './stylecss/Home.css';
import './stylecss/Navbar.css';
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//import onli from './images/onli.jpg';
import img5 from './images/img5.jpeg'
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img7 from './images/img7.jpeg';
import img8 from './images/img8.jpeg';
import img4 from './images/img4.jpeg';
import Contact from './Contact';



export default function Home(){
    return(
        <div>
        <div className="back-img">
            <img src={img1} alt="logo"/>
            </div>
        <div className="about--us">
        <h1>ABOUT US</h1>
        <h4>Ampustrong function as a support for amputees and aims to assist them in living a normal and respectable life.Ampustrong guides its users and aids them by providing information about the best prosthestic seling outlet in their locality to connecting them with physio and psychotherapists</h4>
      </div>
      <div className="Slider">
      <div class="carousel-wrapper">
            <Carousel infiniteLoop showArrows={false}  showStatus={false} showThumbs={false}  autoPlay>
                <div>
                    <img src={img2} alt="logo"/>
                </div>
                <div>
                    <img src={img7} alt="logo"/>
                </div>
                <div>
                    <img src={img8} alt="logo"/>
                </div>
            </Carousel>
        </div>
      </div>
      <div className="Features">
        <h1>WHAT WE OFFER</h1>
        <h4>Check OUt the Features</h4>
      </div>
      <div className="container-box">
        <div className="container-box-img">
        <img src={img5} alt="logo"/>
        </div>
        <div className="container-box-content">
          <h2>PROSTHETIC OUTLETS NEAR YOU</h2>
          <h4>Customer Favourite</h4>
          <p>Find out the best places to buy your prosthestic near you! In just a click explore various prosthestic outlets,compare prices and shop!</p>
        </div>
      </div>
      <div className="container-box1">
        <div className="container-box-img">
        <img src={img4} alt="logo"/>
        </div>
        <div className="container-box-content">
          <div className="container-box-content-cont">
          <h2>PRODUCT</h2>
          <h4>New Addition</h4>
          <span>These items are not only the highest quality,but also comes in a variety of options to suit your needs. For more information, feel free to call us or simple come by the store to see our full inventory.</span></div>
      </div>
      </div>
      <Contact/>
      
      </div>
    );
}



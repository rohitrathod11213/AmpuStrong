import "../stylecss/Home.css";
import "../stylecss/Navbar.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img5 from "../images/img5.jpeg";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img7 from "../images/img7.jpeg";
import img8 from "../images/img8.jpeg";
import img4 from "../images/img4.jpeg";
import Contact from "./Contact";
import Features from "./Features";
import Navbar1 from "./navbar1";
import Navbar from "./Navbar"

export default function Home() {
  return (
    <div>
      <div className="App" >
        <div className="nav">
          <Navbar1/>
          <Navbar/>
        </div>
      </div>
      <div className="back-img">
        <img src={img1} alt="logo" />
      </div>
      <div className="about--us">
        <h1>ABOUT US</h1>
        <h4>
          Ampustrong function as a support for amputees and aims to assist them
          in living a normal and respectable life.Ampustrong guides its users
          and aids them by providing information about the best prosthestic
          seling outlet in their locality to connecting them with physio and
          psychotherapists
        </h4>
      </div>
      <div className="Slider">
        <div class="carousel-wrapper">
          <Carousel
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay
          >
            <div>
              <img src={img2} alt="logo" />
            </div>
            <div>
              <img src={img7} alt="logo" />
            </div>
            <div>
              <img src={img8} alt="logo" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="Features">
        <h1>WHAT WE OFFER</h1>
        <h3>Check Out the Features</h3>
      </div>
      <div className="container-box">
        <div className="container-box-img">
          <img src={img5} alt="logo" />
        </div>
        <div className="container-box-content">
          <div className="container-box-content-cont">
            <h2>PROSTHETIC OUTLETS NEAR YOU</h2>
            <h4>Customer Favourite</h4>
            <p>
              Find out the best places to buy your prosthestic near you! In just
              a click explore various prosthestic outlets,compare prices and
              shop!
            </p>
          </div>
        </div>
      </div>
      <div className="container-box1">
        <div className="container-box-img">
          <img src={img4} alt="logo" />
        </div>
        <div className="container-box-content">
          <div className="container-box-content-cont">
            <h2>PRODUCT</h2>
            <h4>New Addition</h4>
            <p>
              These items are not only the highest quality,but also comes in a
              variety of options to suit your needs. For more information, feel
              free to call us or simple come by the store to see our full
              inventory.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h1>Key Features</h1>
      </div>
      <Features />
      <Contact />
    </div>
  );
}

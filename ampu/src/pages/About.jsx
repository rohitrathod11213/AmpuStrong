import '../stylecss/Home.css';
//import onli from './images/onli.jpg'
import img2 from '../images/img2.jpeg';
import img7 from '../images/img7.jpeg';
import img8 from '../images/img8.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar1 from './navbar1';
import Navbar from './Navbar';
import { useContext } from 'react';
import { Context } from '../context/Context';
import Navbar2 from '../therapist/navbar/Navbar2';
export default function About(){
    const {user} =useContext(Context);
    return(
        <>
        {user.cate==="amputee" ? <div className="App" >
        <div className="nav">
          <Navbar1/>
          <Navbar/>
        </div>
      </div> : <div className="App" >
        <div className="nav">
          <Navbar1/>
          <Navbar2/>
        </div>
      </div>}
        <section className='about-us'>
            <div className='about-us-heading'>
                <h1>SITE BACKGROUND</h1>
            </div>
            <div className='about-us-content'>
                <h4>At Ampustrong,we're commmitted to offering quality products,unparalleled service at a single place.Great service begns with great people and industry experience,which is whyour staff is made up of the best and most qualified in the business.WE have partnered with the best retailers and specialists for the the satisfaction of our customers.</h4>
                <h4>AmpuStrong is proud to have participatecd in creating a generation of happy and satisfied users and looks forward to continuing our work for years to come!</h4>
            </div>
            <div className="Slider">
      <div class="carousel-wrapper">
            <Carousel infiniteLoop showThumbs={false} autoPlay>
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
      <footer>
        <h1>Ampustrong</h1>
      </footer>
        </section>
        </>
    );
}
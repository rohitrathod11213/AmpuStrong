import '../stylecss/Home.css';
//import onli from './images/onli.jpg';
import img7 from '../images/img7.jpeg';
import img3 from '../images/img3.jpeg';
import img8 from '../images/img8.jpeg';
import Navbar1 from './navbar1';
import Navbar from './Navbar';
import { useContext } from 'react';
import { Context } from '../context/Context';
import Navbar2 from '../therapist/navbar/Navbar2';
export default function Faq(){
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
        <section className='faq'>
        <div className='faq-heading'>
            <h1>FAQS</h1>
        </div>
        <div className="faq-content">
            <h3>You Asked,We Answered</h3>
            <br />
            <h3>Looking for more info about one of ur services,or a pending appointment? check out our list of frequently asked question below for some quick answers. if your question isn't answered here,get in touch today.</h3>
        </div>
        <br />
        <br /><br /><br /><br /><br /><br />
        <div className='faq-img-cont'>
        <div className='faq-img'>
            <img src={img7} alt="logo" />
        </div>
        <div className="faq-cont">
            <h2>Question 1:</h2>
            <h4>Enter your answer here.Be thoughtful , write clearly and concisely, and consider adding writtenas well as visual examples. Go over what you've written to make sure that if it was the first time you'd understand your answer.</h4>
        </div>
        <div className='faq-img'>
            <img src={img8} alt="logo" />
        </div>
        <div className="faq-cont">
            <h2>Which payment methods do you accept?</h2>
            <h4>Payment for Psychiatrist and physiotherapist can be done through online as well as offline modes</h4>
        </div>
        <div className='faq-img'>
            <img src={img3} alt="logo" />
        </div>
        <div className="faq-cont">
            <h2>Question 3:</h2>
            <h4>Enter your answer here.Be thoughtful , write clearly and concisely, and consider adding writtenas well as visual examples. Go over what you've written to make sure that if it was the first time you'd understand your answer.</h4>
        </div>
        </div>
        <footer>
            <h1>Ampustrong</h1>
        </footer>
        </section>
        </>
    );
}
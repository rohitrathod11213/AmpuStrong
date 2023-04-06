import '../stylecss/Home.css';
import img1 from "../images/girl.jpg"
import img2 from "../images/boy.jpg"
import img3 from "../images/boy2.jpg"
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"
import { AiFillStar } from 'react-icons/ai';
import Navbar1 from './navbar1';
import Navbar from './Navbar';
import { useContext } from 'react';
import { Context } from '../context/Context';
import Navbar2 from '../therapist/navbar/Navbar2';
export default function Team(){
    const {user}=useContext(Context);
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
        <section className="teamate">
            <div className="featuresflex">
            <div className="feature-box">
                <div className="feature-contt">
                <div className="teamimgg">
                <img src={img3} alt="" className="teamimg"/>
                </div>
                <h3>Rohit Rathod</h3>
                <h5 className='studentdel'>TecmpnB/35</h5>
                <i className='star'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></i>
                <br/>
                <ImQuotesLeft className='quotes'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste esse sed reprehenderit, aperiam doloremque deserunt.</p>
                <ImQuotesRight className='quotes'/>
                <br />
                <button className="read_button">Read more</button>
                </div>
            </div>
            <div className="feature-box">
                <div className="feature-contt">
                <div className="teamimgg">
                <img src={img2} alt="" className="teamimg"/>
                </div>
                <h3>Krishna Vishwakarma</h3>
                <h5 className='studentdel'>TecmpnB/36</h5>
                <i className='star'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></i>
                <br/>
                <ImQuotesLeft className='quotes'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste esse sed reprehenderit, aperiam doloremque deserunt.</p>
                <ImQuotesRight className='quotes'/>
                <br />
                <button className="read_button">Read more</button>
                </div>
            </div>
            <div className="feature-box">
                <div className="feature-contt">
                <div className="teamimgg">
                <img src={img1} alt="" className="teamimg"/>
                </div>
                <h3>Anushka Rane</h3>
                <h5 className='studentdel'>TecmpnB/37</h5>
                <i className='star'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></i>
                <br/>
                <ImQuotesLeft className='quotes'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste esse sed reprehenderit, aperiam doloremque deserunt.</p>
                <ImQuotesRight className='quotes'/>
                <br />
                <button className="read_button">Read more</button>
                </div>
            </div>
           
        </div>            
            <span style={{textAlign:"center",fontSize:"30px",padding:"20px",display:"block"}}>AmpuStrong</span>
        </section>
        </>
    );
}
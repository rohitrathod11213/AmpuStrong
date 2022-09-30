import './stylecss/Home.css';
import './stylecss/Navbar.css';
import img10 from './images/img10.jpeg';
import img9 from './images/img9.jpeg';
export default function Bookapp(){
    return(
        <div className="services">
            <div className='box-container-box1'>
            <h1>Our Services
            </h1>
                <div className='box-container-box1-content'>
                    <div className='box-container-box1-content-box1'>
                       <img src={img10} alt="logo"/>
                       <div>
                       <h2>Physiotherapy</h2>
                       <hr/>
                       <span>1 hr</span>
                       <h4>Rs 1,300</h4>
                       <button>Book Now</button>
                       </div>
                    </div>
                    <div className='box-container-box1-content-box1'>
                    <img src={img9} alt="logo"/>
                       <div>
                       <h2>Psychotherapy</h2>
                       <hr/>
                       <span>1 hr</span>
                       <h4>Rs 1,500</h4>
                       <button>Book Now</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
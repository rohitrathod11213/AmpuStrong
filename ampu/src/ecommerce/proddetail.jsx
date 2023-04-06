import Navbar from "../pages/Navbar";
import Navbar1 from "../pages/navbar1";
import "./ecommerce.css"
import img1 from ".././images/pros1.jpg"
import {AiFillStar} from "react-icons/ai"
import {Link} from "react-router-dom"
export default function Proddetail(){
    // const name1=props.name;
    // const price=props.price
    return(
        <div >
        <div className="App" >
        <div className="nav">
          <Navbar1/>
          <Navbar/>
        </div>
        </div>
        <div className="section_pros">
            <div className="proddetail">
                <div className="proddetail1">
                <div className="prodimg">
                    <img src={img1} alt="" />
                </div>
                <div className="proddet">
                    <h1>Porduct Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa sapiente tempora earum ducimus ex, dolorem nulla, ad quia repellat sequi cupiditate sit.</p>
                    <i className='starr'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></i>
                    <br/>
                    <br/>
                    <Link to="/ecommerce"><button style={{marginRight:"40px"}}>back</button></Link><Link to="/mycart"><button>Add to Cart</button></Link>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}
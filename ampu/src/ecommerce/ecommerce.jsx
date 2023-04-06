import Navbar from "../pages/Navbar";
import Navbar1 from "../pages/navbar1";
import img1 from ".././images/pros1.jpg";
import img2 from ".././images/pros2.jpg";
import img3 from ".././images/pros3.jpg";
import img4 from ".././images/pros11.jpg";
import img5 from ".././images/pros22.jpg";
import img6 from ".././images/pros33.jpg";
import { Link } from "react-router-dom";
import "./ecommerce.css";
export default function Ecommerce() {
  return (
    <div>
      <div className="App">
        <div className="nav">
          <Navbar1 />
          <Navbar />
        </div>
      </div>
      <div className="section_pros">
        <div className="prosthetic_right">
          <h3>Upper Limb</h3>
          <div className="ecommercebox">
            <div className="ecommercecont">
              <div className="pos">
                <h3>Right limb</h3>
                <h4>Price : 400</h4>
                <Link to="/proddet">
                  <button>View Product</button>
                </Link>
              </div>
              <div className="ecommercec">
                <div className="ecommerceimg">
                  <img src={img1} alt="" />
                </div>
                <div className="ecomcont">
                  <h3>Right limb</h3>
                  <h4>Price : 400</h4>
                  <Link to="/proddet">
                    <button>View Product</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ecommercecont">
              <div className="pos">
                <h3>Right limb</h3>
                <h4>Price : 400</h4>
                <Link to="/proddet">
                  <button>View Product</button>
                </Link>
              </div>
              <div className="ecommercec">
                <div className="ecommerceimg">
                  <img src={img2} alt="" />
                </div>
                <div className="ecomcont">
                  <h3>Right limb</h3>
                  <h4>Price : 400</h4>
                  <Link to="/proddet">
                    <button>View Product</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ecommercecont">
              <div className="pos">
                <h3>Right limb</h3>
                <h4>Price : 400</h4>
                <Link to="/proddet">
                  <button>View Product</button>
                </Link>
              </div>
              <div className="ecommercec">
                <div className="ecommerceimg">
                  <img src={img3} alt="" />
                </div>
                <div className="ecomcont">
                  <h3>Right limb</h3>
                  <h4>Price : 400</h4>
                  <Link to="/proddet">
                    <button>View Product</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prosthetic_left">
          <h3>Lower Limb</h3>
          <div className="ecommercebox">
          <div className="ecommercecont">
              <div className="pos">
                <h3>Lower limb</h3>
                <h4>Price : 400</h4>
                <Link to="/proddet">
                  <button>View Product</button>
                </Link>
              </div>
              <div className="ecommercec">
                <div className="ecommerceimg">
                  <img src={img4} alt="" />
                </div>
                <div className="ecomcont">
                  <h3>Lower limb</h3>
                  <h4>Price : 400</h4>
                  <Link to="/proddet">
                    <button>View Product</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ecommercecont">
              <div className="pos">
                <h3>Lower limb</h3>
                <h4>Price : 400</h4>
                <Link to="/proddet">
                  <button>View Product</button>
                </Link>
              </div>
              <div className="ecommercec">
                <div className="ecommerceimg">
                  <img src={img5} alt="" />
                </div>
                <div className="ecomcont">
                  <h3>Lower limb</h3>
                  <h4>Price : 400</h4>
                  <Link to="/proddet">
                    <button>View Product</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ecommercecont">
              <div className="pos">
                <h3>lower Limb</h3>
                <h4>Price : 400</h4>
                <Link to="/proddet">
                  <button>View Product</button>
                </Link>
              </div>
              <div className="ecommercec">
                <div className="ecommerceimg">
                  <img src={img6} alt="" />
                </div>
                <div className="ecomcont">
                  <h3>lower Limb</h3>
                  <h4>Price : 400</h4>
                  <Link to="/proddet">
                    <button>View Product</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <h1>AmpuStrong</h1>
      </footer>
    </div>
  );
}

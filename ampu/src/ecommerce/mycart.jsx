import Navbar from "../pages/Navbar";
import Navbar1 from "../pages/navbar1";
import "./cart.css"
import img1 from ".././images/pros1.jpg"
export default function Mycart(){
    return(
        <div>
        <div className="App">
        <div className="nav">
          <Navbar1/>
          <Navbar />
        </div>
      </div>
      <div className="section_cart">
        <div className="cartbox">
            <div className="container">
                <div className="container1">
                    <table>
                        <thead className="border">
                            <tr className="border">
                            <td className="product">Product</td>
                            <td className="spacing">Product Name</td>
                            <td className="prize">prize</td>
                            <td className="quantity">Qauntity</td>
                            <td className="subtotal">Subtotal</td>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td><div className="primg"><img src={img1} alt="" /></div></td>
                                <td>Upper Limb</td>
                                <td>400</td>
                                <td>1</td>
                                <td>400</td>
                            </tr>
                            <tr>
                                <td><div className="primg"><img src={img1} alt="" /></div></td>
                                <td>Upper Limb</td>
                                <td>400</td>
                                <td>1</td>
                                <td>400</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        <div className="cartbox">
        <div className="totalbox">
            <div className="totalcont">
                <h3>Total price</h3>
                <h3>3000</h3>
            </div>
            <div className="totalcont">
                <h3>Number of item</h3>
                <h3>2</h3>
            </div>
           <br/>
            <button>Proceed to checkout</button>
        </div>
        </div>
      </div>
        </div>
    );
}
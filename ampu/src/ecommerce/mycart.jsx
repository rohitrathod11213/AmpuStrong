import Navbar from "../pages/Navbar";
import Navbar1 from "../pages/navbar1";
import "./cart.css"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context";

export default function Mycart(){
    const PF = "http://localhost:5001/images/products/";
    const { user } = useContext(Context);
    const userId = user._id;
    const [cartProds, setCart] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchCart = async () => {
            const res = await axios.get("http://localhost:5001/api/cart/" + userId);
            setCart(res.data);
        };
        fetchCart();
        computeTotal();
    }, [cartProds]);

    const computeTotal = () => {
        let total = 0;
        cartProds.map((cp) => total += cp.price);
        setItemCount(cartProds.length);
        setTotal(total);
    }

    const handleDelete = async (prodId) => {
        await axios.delete("http://localhost:5001/api/cart", {data: {userId, prodId}});
        setCart([]);
    }

    const handleCheckout = async () => {
        if(cartProds.length === 0) {
            alert('Cart is empty, cannot place an order');
            return;
        }
        const res = await axios.put("http://localhost:5001/api/cart/" + userId);
        if(res.status === 200) {
            let cartProdsId = [];
            cartProds.map((cp) => cartProdsId.push(cp._id));
            const newOrder = {userId: userId, prodId: cartProdsId};
            await axios.post("http://localhost:5001/api/order", newOrder);
            setCart([]);
            alert('Order Placed');
        }
    }

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
                            {cartProds.map((cp) => {
                                return (<tr>
                                    <td><div className="primg"><img src={PF + cp.imgSrc} alt="" /></div></td>
                                    <td>{cp.name}</td>
                                    <td>{cp.price}</td>
                                    <td>1</td>
                                    <td>{cp.price}</td>
                                    <td><button onClick={() => handleDelete(cp._id)}>Delete</button></td>
                                </tr>
                            );})}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        <div className="cartbox">
        <div className="totalbox">
            <div className="totalcont">
                <h3>Total price</h3>
                <h3>{total}</h3>
            </div>
            <div className="totalcont">
                <h3>Number of item</h3>
                <h3>{itemCount}</h3>
            </div>
           <br/>
            <button onClick={() => handleCheckout()}>Proceed to checkout</button>
        </div>
        </div>
      </div>
        </div>
    );
}
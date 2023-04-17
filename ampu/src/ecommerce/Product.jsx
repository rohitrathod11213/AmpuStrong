import "./ecommerce.css";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context";

export default function Product({prod}) {
  const PF = "http://localhost:5001/images/products/";
    const { user } = useContext(Context);
    const userId = user._id;
    const prodId = prod._id;

    const handleAdd = async () => {
        try {
          await axios.put("http://localhost:5001/api/cart", {
            userId,
            prodId,
          });
          alert("Added to Cart");
        } catch (err) {
          console.log(err);
          alert("Couldn't add to Cart");
        }
    };

  return (
    <div className="ecommercecont">
        <div className="pos">
            <button onClick={() => handleAdd()}>Add to Cart</button>
        </div>
        <div className="ecommercec">
            <div className="ecommerceimg">
                <img src={PF + prod.imgSrc} alt="" />
            </div>
            <div className="ecomcont">
                <h3>{prod.type}</h3>
                <h4>Price : {prod.price}</h4>
            </div>
        </div>
    </div>
  );
}

import Navbar from "../pages/Navbar";
import Navbar1 from "../pages/navbar1";
import Product from "./Product.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import "./ecommerce.css";

export default function Ecommerce() {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    const fetchProds = async () => {
      const res = await axios.get("http://localhost:5001/api/products");
      setProds(res.data);
    };
    fetchProds();
  }, []);

  return (
    <div>
      <div className="App">
        <div className="nav">
          <Navbar1 />
          <Navbar />
        </div>
      </div>
      <div className="section_pros">
        {prods.map((p) => (
          <Product prod={p} />
        ))}
      </div>
      <footer>
      <h1>Ampustrong</h1>
      </footer>
    </div>
  );
}

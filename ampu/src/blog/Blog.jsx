import "../stylecss/Home.css";

import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Post from "./Post.jsx";
import Navbar1 from "../pages/navbar1";
import Navbar from "../pages/Navbar";
import { Context } from "../context/Context";
import Navbar2 from "../therapist/navbar/Navbar2";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const {user} =useContext(Context);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:5001/api/posts");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
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
    <section className="blog-page">
      <div className="blog-page-cont">
        <h1>All Posts</h1>
        {blogs.map((p) => (
          <Post post={p} />
        ))}

        <footer style={{ width: "100%" }}>
          <h1>AmpuStrong</h1>
        </footer>
      </div>
    </section>
    </>
  );
}

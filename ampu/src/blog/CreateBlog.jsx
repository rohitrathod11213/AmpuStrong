import { useContext, useState } from "react";
import blog from "../images/blog (2).jpg";
import "./createBlog.css";
import axios from "axios";
import { Context } from "../context/Context";
//import { FaArrowUp } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import Navbar1 from "../pages/navbar1";
import Navbar from "../pages/Navbar";
import Navbar2 from "../therapist/navbar/Navbar2";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      profilePic: user.profilePic,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5001/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:5001/api/posts", newPost);
      res.data && alert("blog posted successfully");
      window.location.replace("/blog");
    } catch (err) {}
  };
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
    <div className="write" >
      <div className="bloghead">
        <img src={blog} alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="titleinput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div className="textinput">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="textareainput"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <br />
        <label htmlFor="fileInput">
          <span className="uploadfile">
            <FaUpload /> choose a file
          </span>
        </label>
        <br />
        {file && (
          <img className="blogimg" src={URL.createObjectURL(file)} alt="" />
        )}
        <br />
        <button type="submit" className="buttonblog">
          Publish
        </button>
      </form>
      <hr />
      <footer style={{ fontSize: "30px" }}>AmpuStrong</footer>
    </div>
    </>
  );
}

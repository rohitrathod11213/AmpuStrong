import "../stylecss/Home.css";
// import onli from "./images/onli.jpg";
import img11 from "../images/img11.jpeg";
import { FaEllipsisV } from "react-icons/fa";
// import { useContext } from "react";
// import { Context } from "./context/Context";

export default function Post({ post }) {
  const PF = "http://localhost:5001/images/";
  const PFF = "http://localhost:5001/images/";
  // const {user} =useContext(Context);
  return (
    <div className="blog-container">
      <div className="blog-container-box">
        
        <div className="blog-container-box-img">
          {post.photo && <img src={PF + post.photo} className="postphoto" alt="" />}
          {!post.photo && <img src={img11} className="postphoto" alt="" />}
        </div>
        <div className="blog-container-box-content">
          <div className="profile-box-cont">
            <img src={PFF+ post.profilePic} alt="" />
            <span>{post.username}</span>
            <div className="profile-box-contt">
              
              <br />
            </div>
            <i className="fa fa-fas">
              <FaEllipsisV />
            </i>
          </div>
          <div className="blog-container-box-content-cont">
            <h2 style={{fontFamily:"cursive",fontWeight:"200"}}>{post.title}</h2>
            <h4 className="postdesc">{post.desc}</h4>
            
            <hr className="hrr" />
            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

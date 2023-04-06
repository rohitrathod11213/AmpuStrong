import "../stylecss/Signup_login.css";
import img12 from "../images/sign.jpeg";
// import img14 from "./images/img14.jpeg";
import { useState } from "react";
import axios from "axios";
// import Navbar from "../pages/Navbar";
import Navbar1 from "../pages/navbar1";
// import { FaUpload } from "react-icons/fa";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // const [file, setFile] = useState(null);
  const [cate,setCate]=useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      cate,
      password,
    };
    setError(false);
    // if (file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   user.profilePic = filename;
    //   try {
    //     await axios.post("http://localhost:5001/api/upload", data);
    //   } catch (err) {}
    // }
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/register",
        user
      );
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
    <div className="App" >
        <div className="nav">
          <Navbar1/>
          {/* <Navbar/> */}
        </div>
      </div>
    <div
      style={{
        backgroundImage: `url(${img12})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        padding: `50px`,
      }}
    >
      <section className="signup-page">
        <div className="signup-page-container" style={{justifyContent:"flex-start"}}>
          {/* <div className="signup-page-container-cont">
            <img src={img14} alt="logo" />
          </div> */}
          <div className="signup-page-container-content " >
            <form
              className="signup-page-container-content-form"
              onSubmit={handleSubmit}
            >
              <table>
                <tr>
                  <td>Username:</td>
                  <td>
                    <input
                      className="input"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </td>
                </tr>
                <br />
                <tr>
                  <td>Email:</td>
                  <td>
                    <input
                      className="input"
                      type="email"
                      placeholder="enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <br />
                <tr>
                  <td>Category:</td>
                  <td>
                  <select
                        className="selectregisterr"
                        onChange={(e) => setCate(e.target.value)}>
                        <option value="none" selected>Select an option</option>
                        <option>amputee</option>
                        <option>therapist</option>
                      </select>
                  </td>
                </tr>
                <br />
                <tr>
                  <td>Password:</td>
                  <td>
                    <input
                      className="input"
                      type="password"
                      placeholder="enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                </tr>
                <br />
                <tr>
                  {/* <td>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label htmlFor="fileInput">
                      <span className="uploadfile">
                        <FaUpload /> choose a file
                      </span>
                    </label>
                    <br />
                    {file && (
                      <img
                        className="blogimg"
                        src={URL.createObjectURL(file)}
                        alt=""
                      />
                    )}
                  </td> */}
                  <td>
                    <button className="button">Register</button>
                    {error && (
                      <div
                        style={{
                          color: "red",
                          marginTop: "10px",
                          fontSize: "10px",
                        }}
                      >
                        Something went wrong!
                      </div>
                    )}
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

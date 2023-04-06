import "../stylecss/Signup_login.css";
import img12 from "../images/sign.jpeg";
// import img14 from './images/img14.jpeg'
import { useRef, useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { BsFillKeyFill } from "react-icons/bs";
import Navbar1 from "../pages/navbar1";
// import Navbar from "../pages/Navbar";

export default function Signin() {
  const userRef = useRef();
  const passwordRef = useRef();
  const cateRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        username: userRef.current.value,
        cate: cateRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      if (res.data.cate === "therapist") {
        window.location.replace("/therapist");
      } else {
        window.location.replace("/home");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
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
        <div className="signup-page-container">
          <div
            className="signup-page-container-content"
            style={{ justifyContent: "flex-end" }}
          >
            <form
              className="signup-page-container-content-form"
              onSubmit={handleSubmit}
            >
              <div className="login_label">
                <div className="label">
                  <label htmlFor="">
                    <i style={{ paddingRight: "10px" }}>
                      <FaUser />
                    </i>
                    Username
                  </label>
                </div>
                <div className="login_input">
                  :{" "}
                  <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    ref={userRef}
                  />
                </div>
              </div>
              <div className="login_label">
                <div className="label">
                  <label htmlFor="">
                    <i style={{ paddingRight: "10px" }}>
                      <BiCategory />
                    </i>
                    category
                  </label>
                </div>
                <div className="login_input">
                  :{" "}
                  <select className="selectregisterr" ref={cateRef}>
                    <option value="none" selected>
                      select an option
                    </option>
                    <option style={{ height: "40px" }}>amputee</option>
                    <option style={{ height: "40px" }}>therapist</option>
                  </select>
                </div>
              </div>
              <div className="login_label">
                <div className="label">
                  <label htmlFor="">
                    <i style={{ paddingRight: "10px" }}>
                      <BsFillKeyFill />
                    </i>
                    Password
                  </label>
                </div>
                <div className="login_input">
                  :{" "}
                  <input
                    className="input"
                    type="password"
                    placeholder="enter your password"
                    ref={passwordRef}
                  />
                </div>
              </div>
              <button className="button" type="submit" disabled={isFetching}>
                Login
              </button>
              {error && (
                <div
                  style={{ color: "red", marginTop: "10px", fontSize: "10px" }}
                >
                  Something went wrong!
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../../stylecss/Navbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function Navbar2() {
  //const [btn ,btnShow]= useState(false);
  const [menu, showMenu] = useState(false);
  const { user } = useContext(Context);
  return (
    <div className="Header">
      <div className="logo">
        <h3>AmpuStrong</h3>
      </div>
      <div
        className={`nav-menu ${menu ? "menuactive" : "menuinactive"} `}
        id="navMenu"
      >
        <ul>
          <li>
            <Link to="/therapist">
              <h3>HOME</h3>
            </Link>
          </li>
          <li>
            <Link to="/booking">
              <h3>APPOINTMENT</h3>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <h3>BLOG</h3>
            </Link>
          </li>
          <li>
            <Link to={user ? "/create" : "/login"}>
              <h3>CREATE BLOG</h3>
            </Link>
          </li>
          <li>
            <Link to={user ? "/messenger" : "/login"}>
              <h3>CHATS</h3>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h3>ABOUT</h3>
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <h3>FAQ</h3>
            </Link>
          </li>
          <li>
            <Link to="/team">
              <h3>TEAM</h3>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <h3>CONTACT</h3>
            </Link>
          </li>
        </ul>
      </div>
      <div className="menuu">
        <button onClick={() => showMenu(!menu)}>
          <FaBars />
        </button>
      </div>
    </div>
  );
}

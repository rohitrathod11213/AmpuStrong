import "./Home";
import { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar1 from "./navbar1";
import Navbar from "./Navbar";
import { Context } from "../context/Context";
import Navbar2 from "../therapist/navbar/Navbar2";
// import img10 from "././images/cont2.jpg"
export default function Contact() {
  const {user}=useContext(Context);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wsm26f9",
        "template_ponq956",
        form.current,
        "XZvRF7BGMf5J4Weye"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("successfully sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
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
      <section className=" contact-us-page">
        <div className="contact-us-details">
          <div className="contact-us-details-content">
            <h2>Contact US</h2>
            <h3
              style={{ color: "white", padding: "50px", textAlign: "justify" }}
            >
              St. Francis Institute of Technology, Sadar Vallabhai Patel Road,
              near bhagwati Hospital, Mount Poinsur, Borivali West, Mumbai,
              Maharashtra,India
            </h3>
          </div>
        </div>
        <div className="contact-us-form">
          <form ref={form} onSubmit={sendEmail}>
            <label className="contactlabel">Name</label>
            <input
              type="text"
              className="inp"
              name="from_name"
              placeholder="enter your name here..."
            />
            <br />
            <label className="contactlabel">Email</label>
            <input
              type="email"
              className="inp"
              name="user_email"
              placeholder="enter your email here..."
            />
            <br />
            <label>Message</label>
            <br />
            <textarea
              name="message"
              className="text"
              placeholder="text your message...."
            />
            <br />
            <br />
            <input type="submit" value="Send" className="Button" />
          </form>
        </div>
      </section>
      {/* <div>
      <iframe width="1349" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=St.%20Francis%20Institute%20of%20Technology,%20Sadar%20Vallabhai%20Patel%20Road,%20near%20bhagwati%20Hospital,%20Mount%20Poinsur,%20Borivali%20West,%20Mumbai,%20Maharashtra,India&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div> */}
      <footer>
        <div className="footer">
          <h1>AmpuStrong</h1>
        </div>
      </footer>
    </div>
  );
}

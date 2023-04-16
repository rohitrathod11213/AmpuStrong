import "../stylecss/Home.css";
import "../stylecss/Navbar.css";
import Navbar1 from "./navbar1";
import Navbar from "./Navbar";
import BookappointBox from "./BookappointBox.jsx";

export default function Bookapp() {

  return (
    <>
    <div className="App" >
        <div className="nav">
          <Navbar1/>
          <Navbar/>
        </div>
      </div>
    <div className="services">
      <div className="box-container-box1">
        <h1>Our Services</h1>
        <div className="box-container-box1-content">
          <BookappointBox title="Physiotherapy" appointDate="April 25, 2022 14:00" duration="1" cost="1300" docusername="anushka" />
          <BookappointBox title="Psychotherapy" appointDate="April 25, 2022 15:00" duration="1" cost="1200" docusername="krishna" />
          <BookappointBox title="Physiotherapy" appointDate="April 26, 2022 15:00" duration="1" cost="1000" docusername="anushka" />
          <BookappointBox title="Physiotherapy" appointDate="April 26, 2022 17:00" duration="1" cost="900" docusername="anushka" />
          <BookappointBox title="Psychotherapy" appointDate="April 27, 2022 13:00" duration="1" cost="1000" docusername="krishna" />
          <BookappointBox title="Physiotherapy" appointDate="April 27, 2022 13:00" duration="1" cost="1000" docusername="anushka" />

        </div>
      </div>
    </div>
    </>
  );
}

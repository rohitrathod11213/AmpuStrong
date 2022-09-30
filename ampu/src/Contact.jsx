import './Home';
export default function Contact(){
    return(
        <div>
        <section className=" contact-us-page">
        <div className="contact-us-details">
          <div className="contact-us-details-content">
            <h1>CONTACT US</h1>
            <h3>St. Francis Institute of Technology, Sadar Vallabhai Patel Road, near bhagwati Hospital, Mount Poinsur, Borivali West, Mumbai,  Maharashtra,India</h3>
          </div>
        </div>
        <div className="contact-us-form">
          <form action="" method="">
            <input className="inp" type="text" placeholder="Name"/>
            <input className="inp" type="email" placeholder="Email"/><br/>
            <input className="inp" type="text" placeholder="Phone"/>
            <input className="inp" type="text" placeholder="Address"/><br/>
            <input className="inp" type="text" placeholder="subject" /><br/>
            <textarea rows="10" cols="50" placeholder="Type your message here..."/><br/><br/>
            <input className="Button" type="submit"/>
          </form>
        </div>
      </section>
      <div>
      <iframe width="1349" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=St.%20Francis%20Institute%20of%20Technology,%20Sadar%20Vallabhai%20Patel%20Road,%20near%20bhagwati%20Hospital,%20Mount%20Poinsur,%20Borivali%20West,%20Mumbai,%20Maharashtra,India&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      <footer>
        <div className="footer">
          <h1>AmpuStrong</h1>
        </div>
      </footer>
      </div>
      
    );
}
import img10 from "../../images/img10.jpeg";
import "./appoint.css";

export default function AppointBox({ appoint }) {

  const appointDate = new Date(appoint.appointDate);

  return (
    <div className="appointboxcont">
      <div className="userimg">
        <img src={img10} alt="" />
      </div>
      <div className="appointusername">
        <h3>{appoint.username}</h3>
      </div>
      <div className="date">
        <h5>{new Date(appoint.appointDate).toDateString()}</h5>
        <span>{appointDate.toLocaleTimeString()} - {new Date(appointDate.getTime() + 60*60*1000).toLocaleTimeString()}</span>
      </div>
    </div>
  );
}
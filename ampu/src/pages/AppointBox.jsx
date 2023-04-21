import img10 from "../images/img10.jpeg";
import "../stylecss/appoint.css";

export default function AppointBox({ appoint, appointDelete }) {

  const appointDate = new Date(appoint.appointDate);

  return (
    <div className="appointboxcont">
      <div className="userimg">
        <img src={img10} alt="" />
      </div>
      <div className="appointusername">
        <h3>Doc. Username: </h3>
        <i>@{appoint.docusername}</i>
      </div>
      <div className="date">
        <h5>{new Date(appoint.appointDate).toDateString()}</h5>
        <span>{appointDate.toLocaleTimeString()} - {new Date(appointDate.getTime() + 60*60*1000).toLocaleTimeString()}</span>
      </div>
      <div>
        <button style={{margin: "0 20px", backgroundColor: "red"}}
          onClick={() => {appointDelete(appoint._id)}}>
            Delete
        </button>
      </div>
    </div>
  );
}
import './message.css'
import img1 from './../images/img1.jpeg'
// import {format} from "timeago.js";
export default function Message({message,own}){
    return(
        <section id="message">
            <div className={own ? "message own" : "message"}>
                <div className="messagetop">
                    <img className="messageimg"src={img1} alt="" />
                    <p className='messagetext'>{message.text}</p>
                </div>
                <div className="messagebottom">{new Date(message.createdAt).toDateString()}</div>
            </div>
        </section>
    )
}
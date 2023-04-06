import "./conversation.css"
import img12 from "./../images/img5.jpeg";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
export default function Conversation({conversation ,currentUser}){
    const [user, setUser] = useState("");
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:5001/api/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
    return(
        <div>
        <div className="conversation">
            <img src={img12}  className="conservationimg" alt="" />
            <span className="conservationame">{user?.username}</span>
            
        </div>
        
    </div>
    )
}
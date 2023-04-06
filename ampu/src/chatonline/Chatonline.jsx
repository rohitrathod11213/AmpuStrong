import './chatonline.css'
import img11 from './../images/img11.jpeg'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Chatonline({ onlineUsers, currentId, setCurrentChat }){
    const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("http://localhost:5001/api/users/friends/" + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `http://localhost:5001/api/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
    return(
        <div className="Chatonline">
            {onlineFriends.map((o) => (
        <div className="chatonlinefriend" onClick={() => handleClick(o)}>
                <div className="chatonlineimgcont">
                    <img className="chatonlineimg" src={img11} alt="" />
                    <div className="chatonlinecotent">
                    </div>
                    
                </div>
                <span className="chatOnlineName">{o?.username}</span>
            </div>))}
        </div>
    )
}
  

  

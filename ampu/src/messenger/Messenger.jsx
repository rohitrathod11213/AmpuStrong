import './messenger.css'
import Message from "./../message/Message"
//import Chatonline from "./../chatonline/Chatonline"
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import { MdSend} from 'react-icons/md'
import { useContext } from 'react'
import {Context} from './../context/Context'
import { useState, useEffect} from 'react'
import axios from 'axios';
import Conversation from './../conversations/Conversation'
import { useRef } from 'react'
import {io} from "socket.io-client"
import Navbar1 from '../pages/navbar1'
import Navbar from '../pages/Navbar'
export default function Messenger(){
    const [conversations,setConversations]=useState([]);
    const [currentchat,setCurrentchat]=useState(null);
    const [messages,setMessages]=useState([]);
    const [newMessage,setNewMessage]=useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    // const [onlineUsers, setOnlineUsers] = useState([]);
    // const [socket,setSocket]=useState(null);
   const socket = useRef();
    const scrollref=useRef()
    const {user} =useContext(Context);

    useEffect(()=>{
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
          setArrivalMessage({
            sender: data.senderId,
            text: data.text,
            createdAt: Date.now(),
          });
        });
    },[])
    useEffect(() => {
        socket.current.emit("addUser",user._id);
        socket.current.on("getUser", users => {
            console.log(users)
        })
    }, [user]);
        
    
      
    
    
      useEffect(() => {
        arrivalMessage &&
          currentchat?.members.includes(arrivalMessage.sender) &&
          setMessages((prev) => [...prev, arrivalMessage]);
      }, [arrivalMessage, currentchat]);
    
    //   useEffect(() => {
    //     socket.current.emit("addUser", user._id);
    //     socket.current.on("getUsers", (users) => {
    //       setOnlineUsers(
    //         user.followings.filter((f) => users.some((u) => u.userId === f))
    //       );
    //     });
    //   }, [user]);
    
    
    useEffect(()=>{
        const getConversations=async()=>{
            try{
                const res=await axios.get("http://localhost:5001/api/conversation/"+user._id);
                setConversations(res.data);
            }catch(err){
                console.log(err);
            }
        };
        getConversations();
    },[user._id])

    useEffect(()=>{
        const getmessages=async ()=>{
            try{
                const res=await axios.get("http://localhost:5001/api/message/"+currentchat?._id);
                setMessages(res.data)
                //console.log(res)
            }catch(err){
                console.log(err)
            }
        };
        getmessages();
    },[currentchat]);

    const mesageSubmit= async (e)=>{
        e.preventDefault();
        const message={
            sender:user._id,
            text:newMessage,
            conversationId:currentchat._id,
        };
        const receiverId = currentchat.members.find(
            (member) => member !== user._id
          );
      
          socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage,
          });
        try{
            const res = await axios.post("http://localhost:5001/api/message", message)
            setMessages([...messages,res.data]);
            setNewMessage("");
        }catch(err){
            console.log(err)
        }
    };
    useEffect(()=>{
        scrollref.current?.scrollIntoView({behavior:"smooth"});
    },[messages])
    

    return(
        <>
        <div className="App" >
        <div className="nav">
          <Navbar1/>
          <Navbar/>
        </div>
      </div>
        <section id="messenger" style={{BackgroundColor:"white"}}>
            
            <div className="messenger">
            
                <div className="chatmenu">
                    <div className="chatmenuwrapper">
                        <input type="text" placeholder='search for freind' className='chatmenuinput' />
                        <div className="chatmenuwrap">
                            {conversations.map((c)=>(
                                <div onClick={()=>setCurrentchat(c)}>
                                <Conversation conversation={c} currentUser={user}/>
                                </div>
                            ))}
                        
                        </div>
                    </div>
                </div>
                <div className="chatbox">
                    <div className="chatboxwrapper">
                    {
                                currentchat?
                            <>
                        <div className="chatboxtop">
                            {
                                messages.map(m=>(
                                    <div ref={scrollref}>
                                        <Message message={m} own={m.sender===user._id}/>
                                    </div>
                                ))}
                            
                            {/* <Message own={true}/> */}
                            
                        </div>
                        <div className="chatboxbottom">
                            <textarea className="chatmessagetext" placeholder="text your message..." name=""value={newMessage} id="" onChange={(e)=>setNewMessage(e.target.value)} ></textarea>
                            <button className="chatsubmitbutton" onClick={mesageSubmit}><i className='md'><MdSend/></i></button>
                        </div></>:<span style={{paddingTop:"100px"}}>open conversation </span>}
                    </div>
                </div>
                <div className="chatOnline" style={{display:"none"}}>
                    <div className="chaticon">
                        <i><BsFillChatLeftTextFill/></i>
                        <h2>CHAT's</h2>
                        </div>
                        <hr />
                    <div className="chatonlinewrapper">
                        {/* <Chatonline onlineUsers={onlineUsers} currentId={user._id} setCurrentChat={setCurrentchat}/> */}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
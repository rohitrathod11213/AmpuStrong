import "./Editporfile.css"
import {useState} from "react";
import axios from "axios";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import {Context} from "./../context/Context"
import Navbar1 from "../pages/navbar1";
import Navbar from "../pages/Navbar";
import Navbar2 from "../therapist/navbar/Navbar2";
export default function Editprofile() {
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [dateofbirth,setBirth]=useState("");
  const [gender,setGender]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [language,setLanguage]=useState("");
  const [age,setAge]=useState("");
  const [address1,setAddress1]=useState("");
  const [address2,setAddress2]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [country,setCountry]=useState("");
  const [pincode,setPincode]=useState("");
  const [about,setAbout]=useState("");
  const {user,dispatch} = useContext(Context);
  const [success, setSuccess] = useState(false);
  const [file,setFile]=useState(null);
  const handleSubmit=async (e)=>{
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updateduser={
      userId:user._id,firstname,lastname,state,country,language,gender,dateofbirth,phone,email,address1,address2,age,city,pincode,about,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateduser.profilePic = filename;
      try {
        await axios.post("http://localhost:5001/api/upload", data);
      } catch (err) {}
    }
    try{
      const res=await axios.put("http://localhost:5001/api/users/"+ user._id,updateduser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    }catch(err){
      dispatch({ type: "UPDATE_FAILURE" });
    }
  }
  return (
    <>
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
    <div>
      <div className="profiledivision">
        
        <div className="profiledivision2">
          <div>
            <form onSubmit={handleSubmit}>
            {/* <div className="profilepic" style={{width:"200px" ,height:"200px"}}>
                    <img src={img1} alt="" style={{width:"100%" ,height:"100%"}}/>
                    </div> */}
              <div className="profileheader">
              <div className="editpic"><input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label htmlFor="fileInput">
                      <span>
                        <FaUserCircle />
                      </span>
                      <h5 style={{color:"black",margin:"0",fontSize:"20px"}}>choose a image</h5>
                    </label>
                    <br />
                    {file && (
                      <img
                        className="picimg"
                        src={URL.createObjectURL(file)}
                        alt=""
                      />
                    )}
                    </div>
                <div className="basicinfodetailhead" id="basicinfo">
                
                  <div className="basicinfodetail">
                    <label htmlFor="">First Name :</label>
                    <br />
                    <input placeholder={user.firstname ? user.firstname : "Enter first Name...."} onChange={(e)=>setFirstname(e.target.value)}/>
                  </div>
                  <div className="basicinfodetail">
                    <label htmlFor="">Last Name :</label>
                    <br />
                    <input placeholder={user.lastname ? user.lastname : "Enter Last Name...."} onChange={(e)=>setLastname(e.target.value)}/>
                  </div>
                  <div className="basicinfodetail">
                    <label htmlFor="">Email :</label>
                    <br />
                    <input placeholder={user.email ? user.email : "Enter Email...."} onChange={(e)=>setEmail(e.target.value)}/>
                  </div>
                  <div className="basicinfodetail">
                    <label htmlFor="">Phone :</label>
                    <br />
                    <input placeholder={user.phone ? user.phone : "Enter mobile number...."} onChange={(e)=>setPhone(e.target.value)}/>
                  </div>
                  <div className="basicinfodetail">
                    <label htmlFor="">Gender :</label>
                    <br />
                    <select className="selectregister" onChange={(e)=>setGender(e.target.value)} >
                      <option value="none" selected>
                        {user.gender ? user.gender :"Select an Option"}
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Transgender</option>
                    </select>
                  </div>
                  <div className="basicinfodetail">
                    <label htmlFor="">Language :</label>
                    <br />
                    <select className="selectregister" onChange={(e)=>setLanguage(e.target.value)} >
                      <option value="none" selected>
                      {user.language ? user.language :"Select an Option"}
                      </option>
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Marathi</option>
                    </select>
                  </div> 
                  <div className="basicinfodetail">
                    <label htmlFor="">Age :</label>
                    <br />
                    <input placeholder={user.age ? user.age : "Enter age..."} onChange={(e)=>setAge(e.target.value)}/>
                  </div>
                  <div className="basicinfodetail">
                    <label htmlFor="">Date Of Birth :</label>
                    <br />
                    <input type="date" placeholder={user.dateofbirth ? user.dateofbirth :"Enter Date of Birth..."} onChange={(e)=>setBirth(e.target.value)}/>
                  </div>
                  
                  <div className="basicinfodetail">
                    <label htmlFor="">Address1 :</label>
                    <br />
                    <input placeholder={user.address1 ?user.address1 :"Enter Address1 line..."} onChange={(e)=>setAddress1(e.target.value)}/>
                  </div>
                  <div className="basicinfodetail">
                    <label htmlFor="">Address2 :</label>
                    <br />
                    <input placeholder={user.address2 ?user.address2 :"Enter Address2 line..."}  onChange={(e)=>setAddress2(e.target.value)}/>
                  </div>
                  <div className="basicinfodetail">
                    <label htmlFor="">country :</label>
                    <br />
                    <select className="selectregister" onChange={(e)=>setCountry(e.target.value)}>
                    <option value="none" selected>
                    {user.country ? user.country :"Select an Option"}
                      </option>
                      <option>India</option>
                      <option>SouthAfrica</option>
                      <option>Afghanistan</option>
                      <option>Dubai</option>
                      <option>SaudiArabia</option>
                      <option>Usa</option>
                    </select>
                  </div>
                  <div className="basicinfodetail">
                    <label htmlFor="">State :</label>
                    <br />
                    <select className="selectregister" onChange={(e)=>setState(e.target.value)} >
                    <option value="none" selected>
                    {user.state ? user.state :"Select an Option"}
                      </option>
                      <option>Andhra Pradesh</option>
                      <option>Arunchal Pradesh</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>Chhatisgarh</option>
                      <option>Goa</option>
                      <option>Gujrat</option>
                      <option>Haryana</option>
                      <option>HImachal Pradesh</option>
                      <option>Jharkand</option>
                      <option>Karnataka</option>
                      <option>Kerala</option>
                      <option>Madhya Pradesh</option>
                      <option >Maharashtra</option>
                      <option>Manipur</option>
                    </select>
                  </div>
                  <div className="basicinfodetail">
                    <label htmlFor="">City :</label>
                    <br />
                    <input placeholder={user.city ?user.city:"Enter City..."} onChange={(e)=>setCity(e.target.value)}/>
                  </div>
                  <div className="basicinfodetail">
                    <label htmlFor="">Pin Code :</label>
                    <br />
                    <input placeholder={user.pincode ? user.pincode :"Enter Pin code..."} onChange={(e)=>setPincode(e.target.value)}/>
                  </div>
                  <div className="basicinfodetails">
                    <label>About me :</label>
                    <br />
                    <textarea
                      rows="5"
                      columns="100"
                      placeholder={user.about ? user.about : "Write something about yourself" }
                      onChange={(e)=>setAbout(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="buttonregister">
                    <button>{user.firstname ? "Change" : "Submit"}</button>
                    <br />
                    {success && (<span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>
              Profile has been updated...
            </span>
          )}
                  </div>
                </div>

                <div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

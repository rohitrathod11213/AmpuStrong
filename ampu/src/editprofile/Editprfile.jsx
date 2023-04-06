import './Editporfile.css'
import axios from "axios"
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../context/Context';
export default function Editprofile(){
    const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
//   const [error, setError] = useState(false);
const {user} =useContext(Context)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const profile = {
    username: user.username,
      firstname,
      lastname,
      gender,
      dob,
      occupation,
      phone,
      location,
      about,
    };
    try {
      const res = await axios.post(
        "http://localhost:5001/api/personal",
        profile
      );
      res.data && window.location.replace("/profile");
    } catch (err) {
      console.log(err);
    }
  };
    return(
        <div style={{paddingTop:"100px"}}>
        <div>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10px">
                    <tbody>
                        <tr>
                            <td>firstname</td>
                            <td>
                               : <input type="text" 
                               onChange={(e) => setFirstname(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>lastname</td>
                            <td>
                               : <input type="text" 
                               onChange={(e) => setLastname(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>gender</td>
                            <td>
                               : <input type="text"
                               onChange={(e) => setGender(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>date of birth </td>
                            <td>
                               : <input type="text"
                               onChange={(e) => setDob(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>location</td>
                            <td>
                               : <input type="text"
                               onChange={(e) => setLocation(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>phone</td>
                            <td>
                               : <input type="text"
                               onChange={(e) => setPhone(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>occupation</td>
                            <td>
                               : <input type="text"
                               onChange={(e) => setOccupation(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>about</td>
                            <td>
                               : <textarea type="text"
                               onChange={(e) => setAbout(e.target.value)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="Edit"/>
                {/* {error && (
                      <div
                        style={{
                          color: "red",
                          marginTop: "10px",
                          fontSize: "10px",
                        }}
                      >
                        Something went wrong!
                      </div>
                    )} */}
            </form>
        </div>
        </div>
    )
}
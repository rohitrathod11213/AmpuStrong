import './stylecss/Signup_login.css'
import img12 from './images/img12.jpeg'
import img14 from './images/img14.jpeg'
import { useState } from 'react';
import axios from 'axios';

export default function Signup(){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                username, email, password,
            });
            res.data && window.location.replace("/login");
        } catch(err) {
            setError(true);
            console.log(err);
        }
    }

    return (
        <div style={{backgroundImage:`url(${img12})`, backgroundRepeat:`no-repeat`,backgroundSize:`cover` ,padding:`50px`}}>
        <section className="signup-page" >
            <div className="signup-page-container">
                <div className='signup-page-container-cont'>
                    <img src={img14} alt="logo"/>
                    </div>
                <div className="signup-page-container-content">
                    <form className="signup-page-container-content-form" onSubmit={handleSubmit}>
                        <table>
                        <tr>
                            <td>Username:</td>
                            <td><input 
                                className='input' type="text" placeholder="Name"
                                onChange={e=>setUsername(e.target.value)}
                            /></td>
                            </tr>
                            <br/>
                            <tr>
                            <td>Email:</td>
                            <td><input className='input' type="email" placeholder="enter your email"
                                onChange={e=>setEmail(e.target.value)}
                            /></td>
                            </tr>
                            <br/>
                            <tr>
                            <td>Password:</td>
                            <td><input className='input' type="password" placeholder="enter your password"
                                onChange={e=>setPassword(e.target.value)}
                            /></td>
                            </tr>
                            <br/>
                            <tr>
                            <td></td>
                            <td>
                                <button className="button">Register</button>
                                {error && <div style={{color:'red', marginTop:'10px', fontSize:'10px'}}>Something went wrong!</div>}
                            </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </section>
        </div>
    );
}
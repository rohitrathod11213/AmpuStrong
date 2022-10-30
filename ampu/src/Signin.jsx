import './stylecss/Signup_login.css'
import img12 from './images/img12.jpeg'
import img14 from './images/img14.jpeg'
import { useRef, useContext } from 'react';
import axios from 'axios';
import { Context } from './context/Context';
import { useState } from 'react';

export default function Signin(){

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [ error, setError ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS", payload: res.data });
            window.location.replace('/');
        } catch(err) {
            dispatch({type:"LOGIN_FAILURE"});
            setError(true);
        }
    };

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
                                ref={userRef}
                            /></td>
                            </tr>
                            <br/>
                            <tr>
                            <td>Password:</td>
                            <td><input className='input' type="password" placeholder="enter your password"
                                ref={passwordRef}
                            /></td>
                            </tr>
                            <br/>
                            <tr>
                            <td></td>
                            <td>
                                <button className="button" type="submit" disabled={isFetching}>Login</button>
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
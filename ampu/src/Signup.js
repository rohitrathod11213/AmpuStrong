import './stylecss/Signup_login.css'
import img12 from './images/img12.jpeg'
import img14 from './images/img14.jpeg'
export default function Signup(){
    return (
        <div style={{backgroundImage:`url(${img12})`, backgroundRepeat:`no-repeat`,backgroundSize:`cover` ,padding:`50px`}}>
        <section className="signup-page" >
            <div className="signup-page-container">
                <div className='signup-page-container-cont'>
                    <img src={img14} alt="logo"/>
                    </div>
                <div className="signup-page-container-content">
                    <form className="signup-page-container-content-form">
                        <table>
                        <tr>
                            <td>Username:</td>
                            <td><input className='input' type="text" placeholder="Name"/></td>
                            </tr>
                            <br/>
                            <tr>
                            <td>Email:</td>
                            <td><input className='input' type="email" placeholder="enter your email" name="" /></td>
                            </tr>
                            <br/>
                            <tr>
                            <td>Password:</td>
                            <td><input className='input' type="password" placeholder="enter your password" name="" /></td>
                            </tr>
                            <br/>
                            <tr>
                            <td>Phone:</td>
                            <td><input className='input' type="text" placeholder="enter your phone" name="" /></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </section>
        </div>
    );
}
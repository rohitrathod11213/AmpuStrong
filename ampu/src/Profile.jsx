import './stylecss/Home.css'
import onli from './images/onli.jpg'
import { FaCamera } from 'react-icons/fa';
import { FaEllipsisV} from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
export default function Profile(){
    return(
        <section className="profile-page">
            <div className="profile">
            <i className='fa fas'><FaCamera/></i>
                <div className="profile-coontainer">
                    <div className="profile-photo-img">
                        <img src={onli} alt="" />
                    </div>
                    <div className='profile-photo-details'>
                        <h3>Anushkarane118</h3><br />
                        <span>0 followers</span>
                        <span>0 following</span>
                        <button className='view-profile'>View Public Profile</button>
                        <i className='fa'><FaEllipsisV/></i>
                    </div>
                </div>
                <div className="profile-container">
                    <div className='navigation'>
                        <ul>
                            <li><h4>Profile</h4></li>
                            <li><h4>My Booking</h4></li>
                            <li><h4>My Wallet</h4></li>
                            <li><h4>My Orders</h4></li>
                            <li><h4>My Addreses</h4></li>
                            <li><h4>My Subscription</h4></li>
                            <li><h4>More</h4></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="profile-container-content">
                        <span className='profi'>Profile</span>
                        <button><i><FaPen/></i>Edit profile</button><br />
                        <br />
                        <span>Join Date</span><br /><br />
                        <hr />
                        
                        <form action="">
                            <h2>About</h2>
                            <textarea name="" id="" cols="120" rows="10"></textarea>
                            <h2>Posts</h2>
                            <textarea name="" id="" cols="120" rows="10"></textarea>
                        </form>
                        <hr />
                    </div>
                </div>
                

            </div>
        </section>
    );
}
import './stylecss/Home.css'
import onli from './images/onli.jpg'
import img11 from './images/img11.jpeg'
import { FaEllipsisV} from 'react-icons/fa';



export default function Post({post}) {
    return(
        <div className="blog-container">
            <div className="blog-container-box">
                    <div className="blog-container-box-img">
                        { post.photo && <img src={post.photo} alt="" /> }
                        { !post.photo && <img src={img11} alt="" /> }
                    </div>
                    <div className="blog-container-box-content">
                    <div className="profile-box-cont">
                        <img src={onli} alt="" />
                        <div className="profile-box-contt">
                        <span>{post.username}</span>
                        <br />
                        </div>
                        <i className='fa fa-fas'><FaEllipsisV/></i>
                    </div>
                    <div className="blog-container-box-content-cont">
                        <h2>{post.title}</h2>
                        <h4>{post.desc}</h4>
                        <br /><br /><hr />
                        <span>{new Date(post.createdAt).toDateString()}</span>
                    </div>
                </div>
            </div>
        <br /><br />
        </div>
    );
}
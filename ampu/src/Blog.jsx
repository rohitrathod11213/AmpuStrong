import './stylecss/Home.css'
import img11 from './images/img11.jpeg'
import img12 from './images/img12.jpeg'
import img13 from './images/img13.jpeg'
import onli from './images/onli.jpg'
import { FaEllipsisV} from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa'
export default function Blog(){
    return(
        <section className='blog-page'>
            <div className="blog-page-cont">
            <h1>All Posts</h1>
            <div className="blog-container">
                <div className="blog-container-box">
                    <div className="blog-container-box-img">
                        <img src={img11} alt="" />
                    </div>
                    <div className="blog-container-box-content">
                    <div className="profile-box-cont">
                        <img src={onli} alt="" />
                        <div className="profile-box-contt">
                        <span>anushkarane118</span>
                        <br />
                        <span>1 minute ago</span>
                        </div>
                        <i className='fa fa-fas'><FaEllipsisV/></i>
                    </div>
                    <div className="blog-container-box-content-cont">
                        <h2>Now You Can Blog from Everywhere</h2>
                        <h4>We've made it quick and convenient for you to manage you blog from anywhere. In this blog post, we'all share the ways you can post to your wix blog.Blogging from the ...</h4>
                        <br /><br /><hr />
                        <div className='blog-container-box-content-cont-h5'><h5>2 views   0 comments </h5>
                        <i><FaHeart/></i></div>
                    </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="blog-container">
                <div className="blog-container-box">
                    <div className="blog-container-box-img">
                        <img src={img12} alt="" />
                    </div>
                    <div className="blog-container-box-content">
                    <div className="profile-box-cont">
                        <img src={onli} alt="" />
                        <div className="profile-box-contt">
                        <span>anushkarane118</span>
                        <br />
                        <span>1 minute ago</span>
                        </div>
                        <i className='fa fa-fas'><FaEllipsisV/></i>
                    </div>
                    <div className="blog-container-box-content-cont">
                        <h2>Now You Can Blog from Everywhere</h2>
                        <h4>We've made it quick and convenient for you to manage you blog from anywhere. In this blog post, we'all share the ways you can post to your wix blog.Blogging from the ...</h4>
                        <br /><br /><hr />
                        <div className='blog-container-box-content-cont-h5'><h5>2 views   0 comments </h5>
                        <i><FaHeart/></i></div>
                    </div>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div className="blog-container">
                <div className="blog-container-box">
                    <div className="blog-container-box-img">
                        <img src={img13} alt="" />
                    </div>
                    <div className="blog-container-box-content">
                    <div className="profile-box-cont">
                        <img src={onli} alt="" />
                        <div className="profile-box-contt">
                        <span>anushkarane118</span>
                        <br />
                        <span>1 minute ago</span>
                        </div>
                        <i className='fa fa-fas'><FaEllipsisV/></i>
                    </div>
                    <div className="blog-container-box-content-cont">
                        <h2>Now You Can Blog from Everywhere</h2>
                        <h4>We've made it quick and convenient for you to manage you blog from anywhere. In this blog post, we'all share the ways you can post to your wix blog.Blogging from the ...</h4>
                        <br /><br /><hr />
                        <div className='blog-container-box-content-cont-h5'><h5>2 views   0 comments </h5>
                        <i><FaHeart/></i></div>
                    </div>
                    </div>
                </div>
            </div>
            <footer style={{width:'100%'}}>
                <h1>AmpuStrong</h1>
            </footer>
            </div>
        </section>
    );
}
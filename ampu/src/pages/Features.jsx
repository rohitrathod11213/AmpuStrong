import img1 from "../images/chat.jpg"
import img2 from "../images/blog.jpg"
import img3 from "../images/support.jpg"
export default function Features(){
    return(
        <div className="featuresflex">
            <div className="feature-box">
                <div className="feature-cont">
                <img src={img1} alt="" />
                <h3>Chat Window</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste esse sed reprehenderit, aperiam doloremque deserunt.</p>
                <button className="read_button">Read more</button>
                </div>
            </div>
            <div className="feature-box">
                <div className="feature-cont">
                    <img src={img2} alt="" />
                    <h3>Blogger</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste esse sed reprehenderit, aperiam doloremque deserunt.</p>
                <button className="read_button">Read more</button>
                </div>
            </div>
            <div className="feature-box">
                <div className="feature-cont">
                    <img src={img3} alt="" />
                    <h3>Support 24/7</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste esse sed reprehenderit, aperiam doloremque deserunt.</p>
                <button className="read_button">Read more</button>
                </div>
            </div>
           
        </div>
    )
}
import './Home'
import onli from './images/onli.jpg'
export default function Group(){
    return(
        <div className="C-container">
            <div className="C-slides">
                <div className="C-slide">
                    <img src={onli} alt="" />
                </div>
                <div className="slide">
                    <img src={onli} alt="" />
                </div>
                <div className="slide">
                    <img src={onli} alt="" />
                </div>
            </div>
        </div>
    );
}
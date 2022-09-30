import './stylecss/Home.css';
import onli from './images/userr.jpg';
export default function Team(){
    return(
        <section className="teamate">
            <div className="team">
                <div className="teamate-team-box">
                    <div className="teamate-team-box-cont">
                        <div className="team-img">
                            <img src={onli} alt="logo" />
                        </div>
                        <div className="team-cont">
                            <h1>ROHIT RATHOD</h1>
                            <h3>STUDENT B/35</h3>
                        </div>
                    </div>
                </div>
                <div className="teamate-team-box">
                    <div className="teamate-team-box-cont">
                        <div className="team-img">
                            <img src={onli} alt="logo" />
                        </div>
                        <div className="team-cont">
                            <h1>KRISHNA VISHWAKARMA</h1>
                            <h3>STUDENT B/36</h3>
                        </div>
                    </div>
                </div>
                <div className="teamate-team-box">
                    <div className="teamate-team-box-cont">
                        <div className="team-img">
                            <img src={onli} alt="logo" />
                        </div>
                        <div className="team-cont">
                            <h1>ANUSKHA RANE </h1>
                            <h3>STUDENT B/37</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import React from "react";
import "./HomePage.css";
import logo from '../images/logo.svg';
import arrow from '../images/arrow.svg';

function HomePage() {
    return (
        <>
            <header>
                <img src={logo} alt="logo" className="header_logo" />
                <div className="header_text">
                    <h1>We want your <br /> inspiring music</h1>
                    <p>Get your music into films, videos & TV all around the world. Join the Artlist family.</p>
                    <span className="header_arrow"><img src={arrow} alt="arrow" /></span>
                </div>
            </header>
            <main>
                <div className="artists">
                    <h2>Join leading artists around the world</h2>
                    <div className="roles">
                        <div className="roles_artists musicians">
                            <div className="roles_wrapper">
                                <h3>Musicians</h3>
                                <p><span>Geva Alon</span> Rock-folk artist</p>
                            </div>
                        </div>
                        <div className="roles_artists producers">
                            <div className="roles_wrapper">
                                <h3>Producers</h3>
                                <p><span>Geva Alon</span> Rock-folk artist</p>
                            </div>
                        </div>
                        <div className="roles_artists composers">
                            <div className="roles_wrapper">
                                <h3>Composers</h3>
                                <p><span>Geva Alon</span> Rock-folk artist</p>
                            </div>
                        </div>
                        <div className="roles_artists agents">
                            <div className="roles_wrapper">
                                <h3>Agents</h3>
                                <p><span>Geva Alon</span> Rock-folk artist</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <h2>Keep doing your thing</h2>
                    <div className="roles_rights">
                        <div className="wrapper">
                            <div className="set_a">
                                <div className="box">
                                    <h3>Keep your rights</h3>
                                    <p>It’s your music and you <br />keep all of the rights.</p>
                                </div>
                                <div className="box">
                                    <h3>Revenue</h3>
                                    <p>Join the growing sync-licensing market and tap into a whole new revenue stream.</p>
                                </div>
                                <div className="box">
                                    <h3>Inspire</h3>
                                    <p>Let your music help to tell the story and be the soul of films around the world.</p>
                                </div>
                            </div>
                            <div className="set_b">
                                <div className="box">
                                    <h3>Non-exclusive</h3>
                                    <p>You can license with Artlist and still distribute/license your music anywhere else you choose.</p>
                                </div>
                                <div className="box">
                                    <h3>Expand your reach</h3>
                                    <p>See your social and streaming channels grow as your music is recognized in thousands of films worldwide.</p>
                                </div>
                                <div className="box">
                                    <h3>Creative community </h3>
                                    <p>Distribute your music through one of the top music licensing platforms in the world, and be part of a select group of composers and indie artists.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="submissions">
                    <div className="wrapper">
                        <div className="text">
                            <h2>Things to check before we start</h2>
                            <button>Start Now</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage;
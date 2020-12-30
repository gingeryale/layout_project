import React from 'react';
import DropForm from './DropForm';
import "./Submission.css";


function Submission() {
    return (
        <>
            <div className="panel_2">
                <div className="panel">
                    <h1 className="header">Submit your music</h1>
                    <div className="fieldWrap">
                        <input name="fullName" type="text" placeholder="Full name" />
                        <label for="FullName">Full name</label>
                    </div>
                    <div className="fieldWrap">
                        <input name="email" type="text" placeholder="Email" />
                        <label for="email">Email</label>
                    </div>
                    <div className="fieldWrap">
                        <input name="country" type="text" placeholder="Country" />
                        <label for="country">Country</label>
                    </div>
                    <div className="tooltip">
                        <p className="bio">Let us know who you are and where you’re coming from, what inspires you, who you have worked with and what you think is interesting about your work in the world of music and film, etc.  How should we present you as an artist? </p>
                    </div>
                    <div className="fieldWrap">
                        <textarea placeholder="Bio" name="bio"></textarea>
                        <label for="bio">Bio</label>
                    </div>
                    <div className="fieldWrap">
                        <input name="job" type="text" placeholder="What Do You Do?" />
                        <label for="job">What Do You Do?</label>
                    </div>
                    <div className="fieldWrap">
                        <input name="portfolio" type="text" placeholder="portfolio links" />
                        <label for="portfolio">Portfolio links</label>
                    </div>
                    <div className="fieldWrap radioBtn">
                        <p for="pro">Are you registered with a PRO?</p>
                        <span className="radioSpan">
                            <label for="yes">Yes</label>
                            <input type="radio" id="pro" name="pro" value="yes" />
                        </span>
                        <span className="radioSpan">
                            <label for="nopro">No</label>
                            <input type="radio" id="nopro" name="pro" value="no" />
                        </span>
                    </div>
                </div>
                <div className="panel">
                    <DropForm />
                </div>

            </div>

        </>
    )
}

export default Submission;
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
                        <label for="FullName">Full name</label>
                        <input name="fullName" type="text" placeholder="Full name" />
                    </div>
                    <div className="fieldWrap">
                        <label for="email">Email</label>
                        <input name="email" type="text" placeholder="Email" />
                    </div>
                    <div className="fieldWrap">
                        <label for="country">Country</label>
                        <input name="country" type="text" placeholder="Country" />
                    </div>
                    <div className="fieldWrap">
                        <label for="bio">Bio</label>
                        <input name="bio" type="textarea" placeholder="Bio" />
                    </div>
                    <div className="fieldWrap">
                        <label for="job">What Do You Do?</label>
                        <input name="job" type="text" placeholder="What Do You Do?" />
                    </div>
                    <div className="fieldWrap">
                        <label for="portfolio">Portfolio links</label>
                        <input name="portfolio" type="text" placeholder="portfolio links" />
                    </div>
                    <div className="fieldWrap radioBtn">
                        <p for="pro">Are you registered with a PRO?</p>
                        <span className="radioSpan">
                            <input type="radio" id="pro" name="pro" value="yes" />
                            <label for="yes">Yes</label>
                        </span>
                        <span className="radioSpan">
                            <input type="radio" id="nopro" name="pro" value="no" />
                            <label for="nopro">No</label>
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
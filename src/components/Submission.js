import React from 'react';
import DropForm from './DropForm';
import "./Submission.css";


function Submission() {
    return (
        <>
            <div className="panel_2">
                <div className="panel">
                    <h1 className="headline">Submit your music</h1>
                    <div className="inner_form">
                        <div className="form_item">
                            <input name="fullName" type="text" placeholder="Full name" />
                            <label for="FullName">Full name</label>
                        </div>
                        <div className="form_item">
                            <input name="email" type="text" placeholder="Email" />
                            <label for="email">Email</label>
                        </div>

                        <div className="form_item country">
                            <input name="country" type="text" placeholder="Country2" />
                            <label for="country">Country</label>
                            <ul className="dropdown_select">
                                <li className="dropdown_list" data-country="is">Iran</li>
                                <li className="dropdown_list" data-country="ir">Ireland</li>
                                <li className="dropdown_list" data-country="il">Israel</li>
                                <li className="dropdown_list" data-country="it">Italy</li>
                            </ul>
                        </div>

                        <div className="tooltip">
                            <p className="bio">Let us know who you are and where you’re coming from, what inspires you, who you have worked with and what you think is interesting about your work in the world of music and film, etc.  How should we present you as an artist? </p>
                        </div>
                        <div className="form_item">
                            <textarea placeholder="Bio" name="bio"></textarea>
                            <label for="bio">Bio</label>
                        </div>
                        <div className="form_item">
                            <input name="job" type="text" placeholder="What Do You Do?" />
                            <label for="job">What Do You Do?</label>
                        </div>
                        <div className="form_item">
                            <input name="portfolio" type="text" placeholder="portfolio links" />
                            <label for="portfolio">Portfolio links</label>
                        </div>
                        <div className="form_item radio_group">
                            <p for="pro">Are you registered with a PRO?</p>
                            <div class="radioBtn_wrapper">
                                <div class="radio_item">
                                    <input type="radio" class="radio_input" id="yes" name="pro" />
                                    <label for="yes" class="radio_label">
                                        <span class="radio_btn"></span>Yes</label>
                                </div>
                                <div class="radio_item">
                                    <input type="radio" class="radio_input" id="no" name="pro" />
                                    <label for="no" class="radio_label">
                                        <span class="radio_btn"></span>No</label>
                                </div>
                            </div>
                        </div>
                        <div className="form_item">
                            <input name="proName" type="text" placeholder="Name of the Pro" />
                            <label for="portfolio">Name of the Pro</label>
                        </div>
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
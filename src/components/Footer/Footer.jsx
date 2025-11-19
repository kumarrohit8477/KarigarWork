import React from "react";
import "./Footer.css"; // Import external CSS

const Footer = () => {
    return (
        <div className="footer">
            <div className="topfooter">KarigarWork</div>

            <div className="midfooter">
                <div className="midf">
                    <h4>Company</h4>
                    <div className="info">
                        <ul className="list">
                            <li><a className="link" href="#">About Us</a></li>
                            <li><a className="link" href="#">Investors Relation</a></li>
                            <li><a className="link" href="#">Terms & Conditions</a></li>
                            <li><a className="link" href="#">Privacy Policy</a></li>
                            <li><a className="link" href="#">Career</a></li>
                        </ul>
                    </div>
                </div>

                <div className="midf">
                    <h4>For Customers</h4>
                    <div className="info">
                        <ul className="list">
                            <li><a className="link" href="#">KW Reviews</a></li>
                            <li><a className="link" href="#">Categories Near You</a></li>
                            <li><a className="link" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="midf">
                    <h4>For Professionals</h4>
                    <div className="info">
                        <ul className="list">
                            <li><a className="link" href="#">Register as a Professional</a></li>
                            <li><a className="link" href="#">Apps for You</a></li>
                        </ul>
                    </div>
                </div>

                <div className="midf">
                    <h4>Social Links</h4>
                    <div className="info">
                        <ul className="list">
                            <li>
                                <a className="link" href="#">
                                    <i className="fa-brands fa-instagram"></i> Instagram
                                </a>
                            </li>
                            <li>
                                <a className="link" href="#">
                                    <i className="fa-brands fa-twitter"></i> Twitter
                                </a>
                            </li>
                            <li>
                                <a className="link" href="#">
                                    <i className="fa-brands fa-facebook"></i> Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottomfooter">
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy,
                and Content Policies.
                <br />
                All trademarks are properties of their respective owners. 2024–2025 © Karigar™ Ltd.
                All rights reserved. ®
            </div>
        </div>
    );
};

export default Footer;

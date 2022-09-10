import React from "react";
import "./footer.scss"
import twitter from "../../imgs/footer/Twitter.png"
import facebook from "../../imgs/footer/Facebook.png"
import linkedin from "../../imgs/footer/LinkedIn.png"

export default function Footer() {
    return (
    <footer>
        <div className="footerColumn">
            <h1>Contacts</h1>
            <div className="footerText">2019 Rootz Foundation.</div>
            <div className="footerText">All rights reserved </div>
        </div>
        <div className="footerColumn">
            <h2>Headquarters</h2>
            <div className="footerText">1234 Taliban</div>
            <div className="footerText">Los Angeles, La 123456</div>
            <div className="footerText">(123) 456-7890 </div>
        </div>
        <div className="footerColumn">
            <h2>Social media</h2>
            <div id="footerMedia">
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </div>
    </footer>
    )
}
import React from "react"
// eslint-disable-next-line
import Styles from "./footer.css"
import SocialMediaA from "./social-media-a"
import TwitterImg from "../assets/twitter-square-brands.svg"


export default (props) => (
    <footer>
        <p className="smaller">COPYRIGHT &copy; 2003-2012 VENTUS INC. ALL RIGHTS RESERVED.</p>

        <div className="social-media-div">
        <SocialMediaA href="https://twitter.com/"/* tooltip="Twitter" */>
            <TwitterImg></TwitterImg>
        </SocialMediaA>
        
        </div>
    </footer>
)
import React from "react"
// eslint-disable-next-line
import Styles from "./feature-div.css"
import ReadMoreButton from "./read-more-button"
import Icon from "./icon"

export default ({children}) => (
    <div className="feature">
        <div className="icon-div">
            <Icon></Icon>
        </div>

        <h3><b>TITLE</b> TITLE</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ullam vel consequuntur accusantium, asperiores.</p>

        <ReadMoreButton></ReadMoreButton>
    </div>
)
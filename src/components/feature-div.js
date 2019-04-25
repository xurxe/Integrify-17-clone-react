import React from "react"
// eslint-disable-next-line
import Styles from "./feature-div.css"
import ReadMoreButton from "./read-more-button"

export default (props) => (
    <div className="feature">
        <div className="icon-div">
            <div className="circle">
            </div>
        </div>

        <h3><b>{props.title1}</b> {props.title2}</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ullam vel consequuntur accusantium, asperiores.</p>

        <ReadMoreButton></ReadMoreButton>
    </div>
)
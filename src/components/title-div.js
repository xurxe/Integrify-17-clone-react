import React from "react"
// eslint-disable-next-line
import Styles from "./title-div.css"

export default (props) => (
    <div className="title-div">
        <div className="stripes"></div>
        <h4>{props.title}</h4>
        <div className="stripes"></div>
    </div>
)
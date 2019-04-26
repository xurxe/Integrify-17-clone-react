import React from "react"
// eslint-disable-next-line
import Styles from "./social-media-a.css"

export default (props) => (
    <a className="social-media-a" href={props.href} /* tooltip={props.tooltip} tooltip-position="top" */ >
        <img className="social-media-img" src={props.children} alt=""/>
    </a>
)
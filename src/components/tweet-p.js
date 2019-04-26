import React from "react"
// eslint-disable-next-line
import Styles from "./tweet-p.css"

export default (props) => (
    <p className="tweet-p">
        <b>{props.username} </b> 
        {props.text} 
        <b> {props.hashtag}</b> 
        <br /> 
        <span className="smaller-italic">about 
            <b> {props.time}</b>
        </span>
    </p>
)
import React from "react"
// eslint-disable-next-line
import Styles from "./white-button.css"
import { Link } from "gatsby"


export default (props) => (
    <Link to="/" className="white-button">
        {props.text}
    </Link>
)
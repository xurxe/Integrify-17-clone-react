import React from "react"
// eslint-disable-next-line
import Styles from "./blue-button.css"
import { Link } from "gatsby"


export default (props) => (
    <Link to="/" className="blue-button">
        {props.text}
    </Link>
)
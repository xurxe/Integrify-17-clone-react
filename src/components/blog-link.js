import React from "react"
// eslint-disable-next-line
import Styles from "./blog-link.css"
import { Link } from "gatsby"


export default (props) => (
    <Link to="/" className="blog-link">
        {props.text}
    </Link>
)
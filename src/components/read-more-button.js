import React from "react"
// eslint-disable-next-line
import Styles from "./read-more-button.css"
import { Link } from "gatsby"


export default ({children}) => (
    <Link to="/" className="read-more-button">
        READ MORE
    </Link>
)
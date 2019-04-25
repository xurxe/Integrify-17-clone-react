import React from "react"
// eslint-disable-next-line
import Styles from "./blog-div.css"
import { Link } from "gatsby"


export default ({children}) => (
<Link to="/" className="blog-div">
    <div className="blog-thumbnail-div"></div>
    <div className="blog-snippet-div">
        <h5>Blog Title</h5>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, iusto dicta exercitationem laudantium quibusdam...
        </p>
    </div>
</Link>
)
import React from "react"
// eslint-disable-next-line
import Styles from "./testimonial-div.css"

export default (props) => (
    <div className="testimonial">
        <h5>{props.name}</h5>
        <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores natus, sunt excepturi placeat maxime autem voluptatibus necessitatibus exercitationem."
        </p>
    </div>
)
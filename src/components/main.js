import React from "react"
// eslint-disable-next-line
import mainStyles from "./main.css"
import Feature from "./feature"
import Blog from "./blog"
import Testimonial from "./testimonial"

export default ({children}) => (
    <main id="hello">
        <div id="mainA" className="content1">
            <Feature></Feature>
            <Feature></Feature>
            <Feature></Feature>
            <Feature></Feature>
        </div>

        <div id="mainB" className="title2"></div>

        <div id="mainC">
            <div className="content2">
                <Blog></Blog>
                <Blog></Blog>
                <Blog></Blog>
            </div>

            <div className="title3"></div>

            <div className="content3">
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
            </div>

            <div className="title4"></div>
            <div className="content4"></div>
        </div>
    </main>
)
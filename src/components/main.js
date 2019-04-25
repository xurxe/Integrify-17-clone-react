import React from "react"
// eslint-disable-next-line
import Styles from "./main.css"

import FeatureDiv from "./feature-div"
import BlogDiv from "./blog-div"
import TestimonialDiv from "./testimonial-div"
import TitleDiv from "./title-div"

export default ({children}) => (
    <main>
        <div id="mainA" className="content1">
            <FeatureDiv></FeatureDiv>
            <FeatureDiv></FeatureDiv>
            <FeatureDiv></FeatureDiv>
            <FeatureDiv></FeatureDiv>
        </div>

        <div id="mainB" className="title2">
            <TitleDiv></TitleDiv>
        </div>

        <div id="mainC">
            <div className="content2">
                <BlogDiv></BlogDiv>
                <BlogDiv></BlogDiv>
                <BlogDiv></BlogDiv>
            </div>

            <div className="title3">
                <TitleDiv></TitleDiv>
            </div>

            <div className="content3">
                <TestimonialDiv></TestimonialDiv>
                <TestimonialDiv></TestimonialDiv>
                <TestimonialDiv></TestimonialDiv>
                <TestimonialDiv></TestimonialDiv>
            </div>

            <div className="title4">
                <TitleDiv></TitleDiv>
            </div>
            
            <div className="content4"></div>
        </div>
    </main>
)
import React from "react"
// eslint-disable-next-line
import Styles from "./main.css"

import FeatureDiv from "./feature-div"
import BlogDiv from "./blog-div"
import TestimonialDiv from "./testimonial-div"
import TitleDiv from "./title-div"

export default () => (
    <main>
        <div id="mainA" className="content1">
            <FeatureDiv title1="Superbly" title2="responsive"></FeatureDiv>
            <FeatureDiv title1="Squeeky" title2="clean"></FeatureDiv>
            <FeatureDiv title1="Multi" title2="purpose"></FeatureDiv>
            <FeatureDiv title1="Highly" title2="flexible"></FeatureDiv>
        </div>

        <div id="mainB" className="title2">
            <TitleDiv title="Recent work"></TitleDiv>
        </div>

        <div id="mainC">
            <div className="content2">
                <BlogDiv title="Blogitty"></BlogDiv>
                <BlogDiv title="Blogus"></BlogDiv>
                <BlogDiv title="Blogarino"></BlogDiv>
            </div>

            <div className="title3">
                <TitleDiv title="Testimonials"></TitleDiv>
            </div>

            <div className="content3">
                <TestimonialDiv name="Jane Doe"></TestimonialDiv>
                <TestimonialDiv name="Fulano de Tal"></TestimonialDiv>
                <TestimonialDiv name="Maija Meikäläinen"></TestimonialDiv>
                <TestimonialDiv name="Nisse i Hökarängen"></TestimonialDiv>
            </div>

            <div className="title4">
                <TitleDiv title="Development"></TitleDiv>
            </div>
            
            <div className="content4"></div>
        </div>
    </main>
)
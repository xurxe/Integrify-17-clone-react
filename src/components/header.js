import React from "react"
// eslint-disable-next-line
import Styles from "./header.css"
import headerImg from "../assets/header-img.png"
import BlueButton from "./blue-button"

export default () => (
    <header>
        <div className="header-image-div">
            <img src={headerImg} alt="" />
        </div>
        <div className="header-text-div">
            <h1>
                <em>Powerfully simple</em>&#8196;with a <br />
                <em>squeeky clean</em>&#8196;design.
            </h1>

            <p>
                Find out how you can offer quick and powerful <br />
                solutions to your customers now!
            </p>

            <BlueButton text="Learn more"></BlueButton>
        </div>
    </header>
)
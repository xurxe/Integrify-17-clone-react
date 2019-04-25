import React from "react"
// eslint-disable-next-line
import mainStyles from "./main.css"

export default ({children}) => (
    <main id="hello">
        <div id="mainA" className="content1"></div>
        <div id="mainB" className="title2"></div>
        <div id="mainC">
            <div class="content2"></div>
            <div class="title3"></div>
            <div class="content3"></div>
            <div class="title4"></div>
            <div class="content4"></div>
        </div>
    </main>
)
import React from "react"
// eslint-disable-next-line
import layoutStyles from "./layout.css"
import Main from "./main"

export default ({children}) => (
    <div id="layout">
        <div className="grey-gradient-background"></div>
        <div className="grey-dark-background"></div>
        <div className="grey-darker-background"></div>

        <header></header>
        <div id="top"></div>
        <div className="stripe-background"></div>

        <Main></Main>

        <div id="bottom"></div>
        <div id="info"></div>
        <footer></footer>
    </div>
)
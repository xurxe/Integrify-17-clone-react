import React from "react"
// eslint-disable-next-line
import Styles from "./layout-div.css"
import TopDiv from "./top-div"
import Main from "./main"

export default () => (
    <div id="layout">
        <div className="grey-gradient-background"></div>
        <div className="grey-dark-background"></div>
        <div className="grey-darker-background"></div>

        <header></header>
        <TopDiv></TopDiv>
        <div className="stripe-background"></div>

        <Main></Main>

        <div id="bottom"></div>
        <div id="info"></div>
        <footer></footer>
    </div>
)
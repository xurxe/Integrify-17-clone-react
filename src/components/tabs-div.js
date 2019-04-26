import React from "react"
// eslint-disable-next-line
import Styles from "./tabs-div.css"
import TabDiv from "./tab-div"


export default (props) => (
    <div className="tabs">
        <TabDiv id="checkbox1" title="Design" h5="The Design">
        </TabDiv>

        <TabDiv id="checkbox2" title="Production" h5="The Production">
        </TabDiv>
    </div>

)
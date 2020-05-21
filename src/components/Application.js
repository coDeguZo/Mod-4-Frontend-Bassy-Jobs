import React from "react"
import ApplicationContainer from "../containers/ApplicationContainer"

const Application = (props) => {
    // console.log(props.a)
    return (
        <div> 
            {props.a.name}
        </div>
    )
}

export default Application
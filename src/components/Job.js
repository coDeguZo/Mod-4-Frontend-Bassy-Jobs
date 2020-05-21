import React from "react"
import { Grid, Image } from 'semantic-ui-react'

// class Job extends React.Component{

const Jobs = (props) => {
    // render(){
    // console.log(props)
    return (
        <div> 
            <h1>{props.j.name}</h1>
            <h3>Experience Level: {props.j.experience_level}</h3>
            {/* <h3>Education Required: {props.j.education_level}</h3> */}
            <h3>${props.j.salary}</h3>
            {/* <h3>{props.j.details}</h3> */}
            {/* <h3>Status: {props.j.status}</h3> */}
            <button onClick={() => (props.fetchJob(props.j.id))}>Click Here For Details</button>
        </div>
    )
}
// }
// }

export default Jobs
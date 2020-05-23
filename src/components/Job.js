import React from "react"
import { Grid, Image, Card } from 'semantic-ui-react'

// class Job extends React.Component{

const Jobs = (props) => {
    // render(){
    // console.log(props)
    return (
        <div> 
            <Card fluid className="job-card">
                <Card.Content>
                    <h1>{props.j.company.name}</h1>
                    <h2>{props.j.name}</h2>
                    <h3>Experience Level: {props.j.experience_level}</h3>
                    {/* <h3>Education Required: {props.j.education_level}</h3> */}
                    <h3>${props.j.salary}</h3>
                    {/* <h3>{props.j.details}</h3> */}
                    {/* <h3>Status: {props.j.status}</h3> */}
                </Card.Content>
                    <button onClick={() => (props.fetchJob(props.j.id))}>Click Here For Details</button>
            </Card>
        </div>
    )
}
// }
// }

export default Jobs
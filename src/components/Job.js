import React from "react"
import { Grid, Image, Card } from 'semantic-ui-react'
import { Link } from "react-router-dom"

const Jobs = (props) => {

    return (
        <div> 
            <Card fluid className="job-card">
                <Link>
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
                </Link>
            </Card>
        </div>
    )
}

{/* <Link to={`/jobs/${props.selectedJob.id}/application-form`}>
    <Button renderas="button">
        <span>Apply</span>
    </Button>
</Link> */}


export default Jobs
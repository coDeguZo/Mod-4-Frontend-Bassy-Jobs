import React from "react"

const JobDetails = (props) => {
    return (
        <div> 
            {props.selectJob.name}
            <h1>{props.selectJob.name}</h1>
            <h3>Experience Level: {props.selectJob.experience_level}</h3>
            <h3>Education Required: {props.selectJob.education_level}</h3>
            <h3>${props.selectJob.salary}</h3>
            <h3>{props.selectJob.details}</h3>
            <h3>Status: {props.selectJob.status}</h3>
        </div>
    )
}

export default JobDetails
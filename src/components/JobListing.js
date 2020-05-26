//child of ProfileContainer
import React from "react"
import { Grid, Image, Card } from 'semantic-ui-react'
// import greyBox from `../images/grey_box.jpg`

const jobListing = (props) => {
    console.log(props)
    // let greyBox = require(`../images/grey_box.jpg`)
    // let greyBox2 = require("/grey_box.jpg")
    return(
        // <div  styles={{ backgroundImage:`url(${greyBox})` }}>
        <div className="grey-box">
        <Card.Group>
            <Card fluid className="application-box"  onClick={() => (props.jobListingApps(props.j.id))}>
                <Card.Content>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust</p> */}
                    <h3>Position: {props.j.name}</h3>
                    <h3>Education level: {props.j.education_level}</h3>
                    <h3>Experience required: {props.j.experience_level}</h3>
                    <h3>Salary: {props.j.salary}</h3>
                    <h3>Status: {props.j.status}</h3>
                    <button onClick={() => props.deleteJobListing(props.j.id)}>Delete your application</button>
                </Card.Content>
            </Card>
        </Card.Group>
        <br />
        </div>
    )
}

export default jobListing
              
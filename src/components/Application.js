//child of ProfileContainer
import React from "react"
import { Grid, Image, Card } from 'semantic-ui-react'
// import greyBox from `../images/grey_box.jpg`

const Application = (props) => {
    // console.log(props)
    // let greyBox = require(`../images/grey_box.jpg`)
    // let greyBox2 = require("/grey_box.jpg")

    // fetch('http://localhost:3000/companies')
    //     .then(resp => resp.json())
    //     .then(data => {
    //         data.filter(company => {
    //             company.id === 
    //         })
    //     })

    console.log("props", props)
    return(
        <div className="grey-box">
        <Card.Group>
            <Card fluid className="application-box">
                <Card.Content>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust</p> */}
                    <h3>Position: {props.a.job_listing.name}</h3>
                    <h3>Salary: {props.a.job_listing.salary}</h3>
                    {/* <h3>Status: {props.a.status}</h3> */}
                    {/* <h3>Company Name: {props.a.job_listing.company.name}</h3> */}
                    {/* <h3>Company Name: {props.a.job_listing.company}</h3> */}
                    <button onClick={() => props.deleteApplication(props.a.id)}>Delete your application</button>
                </Card.Content>
            </Card>
        </Card.Group>
        <br />
        </div>
    )
}

export default Application;

// export default Application;
              
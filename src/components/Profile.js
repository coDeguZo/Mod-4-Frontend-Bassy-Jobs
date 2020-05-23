import React from "react"
import { Form } from "semantic-ui-react"

const Profile = (props) => {
    return(
        <div>
            <h1>Profile Information</h1>
            <div className="profile-text-info">
                <h3>Name: {props.user.name}</h3>
                <h3>Address: {props.user.address}</h3>
                <h3>Phone: {props.user.phone_number}</h3>
                <h3>Email: {props.user.email}</h3>
                <button onClick={props.edit}> Edit Information </button>
            </div>
            {/* <Form>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Full Name' placeholder='Full Name' />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid label='Address' placeholder='Address' />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid label='Phone Number' placeholder='Phone Number' />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid label='Email' placeholder='Email' />
                </Form.Group>
            </Form> */}
            {/* <h1>{props.applications.job_listing.name}</h1> */}
            {/* {
                props.applications.map(app => {
                    if (app.user.id=== props.user.id){
                        return (
                            <div>
                                <h3>{app.job_listing.name}</h3>
                            </div>)
                    } else {
                        return null
                    }
                })
            } */}
        </div>
    )
}

export default Profile
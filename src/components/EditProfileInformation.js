import React from "react"
import { Form, Button } from "semantic-ui-react"

const EditProfileInformation = (props) => {

    return(
        <div className="edit-profile-info-div">
            <Form>
                <Form.Group widths='equal'>
                <Form.Input fluid id="name" label='Full Name' placeholder='Full Name' value={props.name} onChange={props.onChangeInformation}/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid id="address" label='Address' placeholder='Address' value={props.address} onChange={props.onChangeInformation}/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid id="phone" label='Phone Number' placeholder='Phone Number' value={props.phone} onChange={props.onChangeInformation}/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid id="email" label='Email' placeholder='Email' value={props.email} onChange={props.onChangeInformation}/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid id="resume" label='Resume' placeholder='Resume' value={props.resume} onChange={props.onChangeInformation}/>
                </Form.Group>
                <Form.Field onClick={props.edit} control={Button}>Submit</Form.Field>
            </Form>
        </div>
    )
}

export default EditProfileInformation;
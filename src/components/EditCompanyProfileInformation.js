import React from "react"
import { Form, Button } from "semantic-ui-react"

const EditCompanyProfileInformation = (props) => {

    return(
        <div className="edit-profile-info-div">
            <Form>
                <Form.Group widths='equal'>
                <Form.Input fluid id="name" label='Name' placeholder='Name' value={props.name} onChange={props.onChangeInformation}/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid id="email" label='Email' placeholder='Email' value={props.email} onChange={props.onChangeInformation}/>
                </Form.Group>
                {/* <Form.Group widths="equal">
                    <Form.Input fluid id="password" label='Password' placeholder='Password' value={props.password} onChange={props.onChangeInformation}/>
                </Form.Group> */}
                <Form.Field onClick={props.edit} control={Button}>Submit</Form.Field>
            </Form>
        </div>
    )
}

export default EditCompanyProfileInformation;
import React from "react"
import { Form, Button } from "semantic-ui-react"

const NewCompanyJobListingForm = (props) => {

    return(
        <div className="edit-profile-info-div">
            <Form onSubmit={props.createJobListing}>
                <Form.Group widths='equal'>
                <Form.Input fluid id="name" label='Name of Position' placeholder='Name of Position' value={props.name} onChange={props.changeJobDetails}/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid id="job_details" label='Job Details' placeholder='Job Details' value={props.job_details} onChange={props.changeJobDetails}/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid id="salary" label='Salary' placeholder='Salary' value={props.salary} onChange={props.changeJobDetails}/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid id="education_level" label='Education Level' placeholder='Education Level' value={props.education_level} onChange={props.changeJobDetails}/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input fluid id="experience_level" label='Experience Level' placeholder='Experience Level' value={props.experience_level} onChange={props.changeJobDetails}/>
                </Form.Group>
                <Form.Field onClick={props.edit} control={Button}>Submit</Form.Field>
            </Form>
        </div>
    )
}

export default NewCompanyJobListingForm
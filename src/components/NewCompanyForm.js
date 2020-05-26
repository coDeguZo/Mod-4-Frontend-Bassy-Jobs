import React from "react"
import {Form, Input, Checkbox, Button} from "semantic-ui-react"
import {Link} from "react-router-dom"

class NewCompanyForm extends React.Component {

    render() {
        return (
            <div> 
            <br/>
            <h1> Sign Up Company </h1>
            <Form onSubmit={() => console.log("submitting")}>
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                label='Name'
                placeholder='Name'
                id="name"
                onChange={this.props.signUpCompany}
              />
            </Form.Group>
            <Form.Group widths='equal'>
               <Form.Field
                control={Input}
                label='Email'
                placeholder='Email'
                id="email"
                onChange={this.props.signUpCompany}
              />
            </Form.Group>
            <Form.Group widths='equal'>
               <Form.Field
                control={Input}
                label='Password'
                placeholder='Password'
                id="password"
                onChange={this.props.signUpCompany}
              />
            </Form.Group>
    
            <Form.Field
              control={Checkbox}
              label='I agree to the Terms and Conditions'
            />
            <Link to ={"/employer-profile"}>
              <Button type="submit" onClick={this.props.createCompany}>Login</Button>
            </Link>
            </Form>
            </div>
        )
    }
}

export default NewCompanyForm
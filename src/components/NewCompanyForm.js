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
                label='Full Name'
                placeholder='Full Name'
                id="name"
                onChange={null}
              />
            </Form.Group>
            <Form.Group widths='equal'>
               <Form.Field
                control={Input}
                label='Email'
                placeholder='Email'
                id="email"
                onChange={null}
              />
            </Form.Group>
            <Form.Group widths='equal'>
               <Form.Field
                control={Input}
                label='Password'
                placeholder='Password'
                id="password"
                onChange={null}
              />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                control={Input}
                label='Address'
                placeholder='Address'
                id="address"
                onChange={null}
              />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                control={Input}
                label='Phone Number'
                placeholder='Phone Number'
                id="phone_number"
                onChange={null}
              />
            </Form.Group>
    
            <Form.Field
              control={Checkbox}
              label='I agree to the Terms and Conditions'
            />
            <Link to ={"/profile"}>
              <Button type="submit" onClick={null}>Login</Button>
            </Link>
            </Form>
            </div>
        )
    }
}

export default NewCompanyForm
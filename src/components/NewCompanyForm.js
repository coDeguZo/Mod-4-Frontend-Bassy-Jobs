import React from "react"
import {Form, Input, Checkbox, Button, Grid, Header, Image, Message, Segment} from "semantic-ui-react"
import {Link} from "react-router-dom"

class NewCompanyForm extends React.Component {

    render() {
        return (
        <div className="company-sign-up"> 
        <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle' >
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='https://react.semantic-ui.com/logo.png' /> Sign Up Your Company!
        </Header>
            {/* <h1> Sign Up Company </h1> */}
            <Form onSubmit={() => console.log("submitting")}>
            <Segment stacked>
              <Form.Field
                control={Input}
                label='Name'
                placeholder='Name'
                id="name"
                onChange={this.props.signUpCompany}
              />
               <Form.Field
                control={Input}
                label='Email'
                placeholder='Email'
                id="email"
                onChange={this.props.signUpCompany}
              />
               <Form.Field
                control={Input}
                label='Password'
                placeholder='Password'
                id="password"
                onChange={this.props.signUpCompany}
              />
              <Form.Field
              control={Checkbox}
              label='I agree to the Terms and Conditions'
            />
            <Link to ={"/employer-profile"}>
              <Button type="submit" onClick={this.props.createCompany}>Login</Button>
            </Link>
            </Segment>
            </Form>
          </Grid.Column>
        </Grid>
        </div>
        )
    }
}

export default NewCompanyForm
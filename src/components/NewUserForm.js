import React from "react"
import { Link } from "react-router-dom"

// import ApplicationFormContainer from "../containers/ApplicationFormContainer"
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    Segment,
    Grid,
    Header,
    Image
  } from 'semantic-ui-react'

class NewUserForm extends React.Component {
    // constructor(){
    //   super()
    //   this.state = {
    //     name: "",
    //     email: "",
    //     address: "",
    //     phone_number: ""
    //   }
    // }

    // handleChange = (e, { name, value }) => {
    //   this.setState({ [name]: value });
    //   console.log(this.state)
    // };
  
    render(){
    return (
        <div className="user-signup"> 
        <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle' >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='https://react.semantic-ui.com/logo.png' /> Sign Up Your As New User!
        </Header>
        <Form onSubmit={() => console.log("submitting")}>
          <Segment stacked>
          <Form.Field
            control={Input}
            label='Full Name'
            placeholder='Full Name'
            id="name"
            onChange={this.props.signUpUser}
          />
           <Form.Field
            control={Input}
            label='Email'
            placeholder='Email'
            id="email"
            onChange={this.props.signUpUser}
          />
           <Form.Field
            control={Input}
            label='Password'
            placeholder='Password'
            id="password"
            onChange={this.props.signUpUser}
          />
            <Form.Field
            control={Input}
            label='Address'
            placeholder='Address'
            id="address"
            onChange={this.props.signUpUser}
          />
            <Form.Field
            control={Input}
            label='Phone Number'
            placeholder='Phone Number'
            id="phone_number"
            onChange={this.props.signUpUser}
          />

        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Link to ={"/profile"}>
          <Button type="submit" onClick={this.props.createNewUser}>Login</Button>
        </Link>
        </Segment>
        </Form>
        </Grid.Column>
        </Grid>
        </div>
    )
  }
}

export default NewUserForm
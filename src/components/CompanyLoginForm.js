import React from "react";
import { withRouter } from "react-router";
import { Button, Form, Segment, Message } from "semantic-ui-react";
import { Link } from "react-router-dom"


class CompanyLoginForm extends React.Component {
    state = {
      email: "",
      password: ""
    };
  
    // handleChange = (e, { name, value }) => {
    //   this.setState({ [name]: value });
    //   console.log(this.state)
    // };
  
    // //When form is submitted, make a fetch to "log in the user"
    // handleLoginSubmit = () => {
    //   console.log("attempting to log in")
    //   fetch("http://localhost:3000/employer-login", {
    //     method:"POST",
    //     headers: {
    //       "Content-Type" : "application/json",
    //       "Accept" : "application/json"
    //     },
    //     body: JSON.stringify({
    //       email: this.state.email,
    //       password: this.state.password
    //     })
    //   }).then(res => res.json())
    //   .then(companyData => {
    //     console.log("response from the server", companyData)
    //     if(companyData.error_message){
    //       alert(companyData.error_message)
    //     }else{
    //       this.props.updateCurrentUser(companyData)
    //     }
    //   })
    // };
  
    render() {
      return (
        <div>
        <br/>
        <h1> Company Login Form </h1>
        <Segment>
          <Form
            // onSubmit={this.handleLoginSubmit}
            size="mini"
            key="mini"
            loading={this.props.authenticatingUser}
            error={this.props.failedLogin}
          >
            <Message
              error
              header={this.props.failedLogin ? this.props.error : null}
            />
            <Form.Group widths="equal">
              <Form.Input
                label="email"
                placeholder="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <Form.Input
                type="password"
                label="password"
                placeholder="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </Form.Group>
            <Link to ={"/employer-profile"}>
              {/* <Button type="submit" onClick={this.handleLoginSubmit}>Login</Button> */}
              <Button type="submit" onClick={null}>Login</Button>
            </Link>
          </Form>
          <p>Don't have an account? 
              <Link to="/sign-up"> Sign Your Company Up Here</Link>
          </p>
        </Segment>
        </div>
      );
    }
  }
  
  export default withRouter(CompanyLoginForm);
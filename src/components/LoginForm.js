import React from "react";
import { withRouter } from "react-router";
import { Button, Form, Segment, Message } from "semantic-ui-react";
import { Link } from "react-router-dom"


class LoginForm extends React.Component {
    state = {
      email: "",
      password: "",
      error: true
    };
  
    handleChange = (e, { name, value }) => {
      this.setState({ [name]: value });
      console.log(this.state)
    };
  
    //When form is submitted, make a fetch to "log in the user"
    handleLoginSubmit = () => {
      console.log("attempting to log in")
      // fetch("http://localhost:3000/api/v1/login", {
      fetch("http://localhost:3000/login", {
        method:"POST",
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      }).then(res => res.json())
      .then(userData => {
        console.log("response from the server", userData)
        if(userData.error_message){
          this.setState({ error: true })
          alert(userData.error_message)
        }else{
          this.setState({ error: false })
          this.props.updateCurrentUser(userData)
          alert("Welcome To Bassy Jobs!")
        }
      })
    };
  
    render() {
      return (
        <div>
        <Segment>
          <br/>
          <h1> User Login Form </h1>
          <Form
            size="mini"
            key="mini"
            // loading={this.props.authenticatingUser}
            // error={this.props.failedLogin}
          >
            <Message
              // error
              // header={this.props.failedLogin ? this.props.error : null}
            />
            <Form.Group widths="equal">
              <Form.Input
                label="email"
                placeholder="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                onSubmit={this.handleLoginSubmit}
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
            {/* <Link to="/profile">
              <Button type="submit" onClick={this.handleLoginSubmit} >Login</Button>
            </Link> */}
            <Link to="/">
              <Button type="redirect" onClick={this.handleLoginSubmit} >Login</Button>
            </Link>
          </Form>
          <p>Don't have an account? 
              <Link to="/sign-up"> Sign up here</Link>
          </p>
        </Segment>
        </div>
      );
    }
  }
  
  export default withRouter(LoginForm);
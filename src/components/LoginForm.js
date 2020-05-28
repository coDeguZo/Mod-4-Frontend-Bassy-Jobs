import React from "react";
import { Button, Form, Segment, Message, Card, Grid, Header, Image } from "semantic-ui-react";
import { Link, useHistory, Route, Switch, withRouter } from "react-router-dom"
import Redir from './Redir'


class LoginForm extends React.Component {
  constructor(){
    super()
    this.state = {
      email: "",
      password: "",
      error: localStorage.error
    };
  }
  
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
          this.setState({ error: "true" })
          alert(userData.error_message)
        }else{
          this.setState({ error: "false" })
          this.props.updateCurrentUser(userData)
          // alert("Welcome To Bassy Jobs!")
        }
      })
    };
  
    render() {
      return (
        <div >
          {this.state.error === "true" || this.state.error === undefined ?
          <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle' className="user-login">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='https://react.semantic-ui.com/logo.png' /> Log-in to your User Profile
            </Header>
          <br/>
            {/* <h1> User Login Form </h1> */}
            <Form
              size="mini"
              key="mini"
              onSubmit={this.handleLoginSubmit}
            >
              {/* <Form.Group widths="equal"> */}
              <Segment stacked>
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
              {/* </Form.Group> */}
                <Button type="submit">Login</Button>
              </Segment>
            </Form>
            <p style={{color: "white"}}>Don't have an account?</p>
            <Message>
            <Link to="/sign-up"> Sign up here</Link>
          </Message>
        </Grid.Column>
      </Grid>
        : 
        <div> 
          {/* fake home page. P.S. I'm perfectly happy to remove the below h1 tags at this point. Or we can style this page. */}
          <h1>You have successfully logged in</h1> 
            <img className="image-home" alt="home picture" src="https://cdn.tourcms.com/a/11676/848/1/large.jpg"></img>
            <h1> How Bassy Jobs Works</h1>
            <div className="ui three column grid">
                <div className="column">
                    <div className="ui segment">
                        <h3> Find The Right Job </h3>
                        <img className="card-image"src="https://www.turningpointboston.com/wp-content/uploads/2014/07/careerexploration.jpg" />
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        <h3> Apply To Jobs </h3>
                        <img className="card-image" src="https://media.istockphoto.com/vectors/application-form-man-with-clipboard-in-his-hand-fills-in-the-form-of-vector-id1016116752?k=6&m=1016116752&s=612x612&w=0&h=MSnpfy_mxw4eVukvo1wVTObcYS0HQ3t2vLWsZX9s9UA=" />
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        <h3> Research Companies </h3>
                         <img className="card-image" src="https://www.electrochem.org/wp-content/uploads/2017/05/RESEARCH.jpg" />
                    </div>
                </div>
            </div>
            <h1> Explore Bassy Jobs </h1>
            <h2>Millions of people are searching for jobs, salary information, company reviews, and interview questions.</h2>
            <h2>See what others are looking for on Bassy Jobs today.</h2>
            <br />
        </div>
        }
        </div>
      );
    }
  }
  
export default withRouter(LoginForm);
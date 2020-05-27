import React from "react";
import { Button, Form, Segment, Message } from "semantic-ui-react";
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
        <div>
          {this.state.error === "true" || this.state.error === undefined ?
        <Segment>
          <br/>
          <h1> User Login Form </h1>
          <Form
            size="mini"
            key="mini"
            // loading={this.props.authenticatingUser}
            // error={this.props.failedLogin}
            onSubmit={this.handleLoginSubmit}
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
            {/* <Link to="/profile"> */}
              {/* <Button type="submit" onClick={this.handleLoginSubmit} >Login</Button> */}
            {/* </Link> */}

            {/* {this.state.error === false ? <Link to="/profile">
              <Button type="redirect" onClick={this.handleLoginSubmit} >Login</Button>
            </Link> : 
            <Link to="/login">
              <Button type="submit" onClick={this.handleLoginSubmit}>Login</Button>
            </Link>} */}

              <Button type="submit">Login</Button>
            {/* <Link to="/profile"> */}
              {/* <Button type="submit">Login</Button> */}
            {/* </Link> */}
          </Form>
          <p>Don't have an account? 
              <Link to="/sign-up"> Sign up here</Link>
          </p>
          <br /><br /> <br /><br /><br /><br /><br /><br /><br/><br /><br /><br /><br/>
        </Segment>
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










// import React from "react";
// import { Button, Form, Segment, Message } from "semantic-ui-react";
// import { Link, useHistory, Route, Switch, withRouter } from "react-router-dom"
// import Redir from './Redir'


// class LoginForm extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       email: "",
//       password: "",
//       error: true
//     };
//   }
  
//     handleChange = (e, { name, value }) => {
//       this.setState({ [name]: value });
//       console.log(this.state)
//     };
  
//     //When form is submitted, make a fetch to "log in the user"
//     handleLoginSubmit = () => {
//       console.log("attempting to log in")
//       // fetch("http://localhost:3000/api/v1/login", {
//       fetch("http://localhost:3000/login", {
//         method:"POST",
//         headers: {
//           "Content-Type" : "application/json",
//           "Accept" : "application/json"
//         },
//         body: JSON.stringify({
//           email: this.state.email,
//           password: this.state.password
//         })
//       }).then(res => res.json())
//       .then(userData => {
//         console.log("response from the server", userData)
//         if(userData.error_message){
//           this.setState({ error: true })
//           alert(userData.error_message)
//         }else{
//           this.setState({ error: false })
//           this.props.updateCurrentUser(userData)
//           // alert("Welcome To Bassy Jobs!")
//         }
//       })
//     };
  
//     render() {
//       return (
//         <div>
//         <Segment>
//           <br/>
//           <h1> User Login Form </h1>
//           <Form
//             size="mini"
//             key="mini"
//             // loading={this.props.authenticatingUser}
//             // error={this.props.failedLogin}
//             onSubmit={this.handleLoginSubmit}
//           >
//             <Message
//               // error
//               // header={this.props.failedLogin ? this.props.error : null}
//             />
//             <Form.Group widths="equal">
//               <Form.Input
//                 label="email"
//                 placeholder="email"
//                 name="email"
//                 onChange={this.handleChange}
//                 value={this.state.email}
//               />
//               <Form.Input
//                 type="password"
//                 label="password"
//                 placeholder="password"
//                 name="password"
//                 onChange={this.handleChange}
//                 value={this.state.password}
//               />
//             </Form.Group>
//             {/* <Link to="/profile"> */}
//               {/* <Button type="submit" onClick={this.handleLoginSubmit} >Login</Button> */}
//             {/* </Link> */}

//             {/* {this.state.error === false ? <Link to="/profile">
//               <Button type="redirect" onClick={this.handleLoginSubmit} >Login</Button>
//             </Link> : 
//             <Link to="/login">
//               <Button type="submit" onClick={this.handleLoginSubmit}>Login</Button>
//             </Link>} */}

//             {this.state.error ? 
//               <Button type="submit">Login</Button>
//             : <h1>You have successfully logged in</h1>
//             }
//             {/* <Link to="/profile"> */}
//               {/* <Button type="submit">Login</Button> */}
//             {/* </Link> */}
//           </Form>
//           <p>Don't have an account? 
//               <Link to="/sign-up"> Sign up here</Link>
//           </p>
//         </Segment>
//         </div>
//       );
//     }
//   }
  
//   export default withRouter(LoginForm);
import React from "react";
import { withRouter } from "react-router";
import { Button, Form, Segment, Message } from "semantic-ui-react";
import { Link, Route, Switch, Redirect} from 'react-router-dom'

// const Redir = (props) => {
class Redir extends React.Component{

    func = (num) => {
        return 1 + num
    }

    render(){
    return(
        <div>
            Redirecting...
            <Link to="/profile">
              <button onClick={this.func(1)}>button</button>
            </Link>
        </div>
    )
    }
}

export default Redir;
import React from "react";
import { withRouter } from "react-router";
import { Button, Form, Segment, Message } from "semantic-ui-react";
import { Link } from "react-router-dom"

const Redir = (props) => {

    const func = () => {
        let sum = 1 + 1
    }

    return(
        <div>
            Redirecting...
            <Link to="/profile">
              <button onClick={func()}>Login</button>
            </Link>
        </div>
    )
}

export default Redir;
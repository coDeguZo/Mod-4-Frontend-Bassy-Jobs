import React from "react"
import { Header } from 'semantic-ui-react'

class Nav extends React.Component {

    render(){
    return (
        <div> 
            <Header as='h3' block>
                Block Header
            </Header>
        </div>
    )
    }
}

export default Nav
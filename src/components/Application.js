//child of ProfileContainer
import React from "react"
import { Grid, Image, Card } from 'semantic-ui-react'
// import greyBox from `../images/grey_box.jpg`

class Application extends React.Component{
    constructor(){
        super()
        this.state = {
            appCompanyName: ""
        }
    }

    componentWillMount() {
    fetch('http://localhost:3000/companies')
        .then(resp => resp.json())
        .then(data => {
            // debugger
            // before crash:
            // object that includes company_id: 1
            // cause of crash:
            // this.props.a.job_listing === {id: 2, name: "TelePrompter", salary: 100000}
            // let company = data.filter(c => c.id === this.props.j.company_id)

            let company = data.filter(c => c.id === this.props.companyId)
            
            this.setState({ appCompanyName: company[0].name })
            console.log(this.state.appCompanyName)
        })
    }

    render(){
        // this.companyFinder()
        // debugger
    return(
        <div className="grey-box">
        <Card.Group>
            <Card fluid className="application-box">
                <Card.Content>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust</p> */}
                    <h3>Position: {this.props.j.name}</h3>
                    <h3>Salary: {this.props.j.salary}</h3>
                    {/* <h3>Status: {props.a.status}</h3> */}
                    <h3>Company Name: {this.state.appCompanyName}</h3>
                    <button onClick={() => this.props.deleteApplication(this.props.a.id)}>Delete your application</button>
                </Card.Content>
            </Card>
        </Card.Group>
        <br />
        </div>
    )}
}

export default Application;

// export default Application;
              
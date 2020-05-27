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
            let company = data.filter(c => c.id === this.props.a.job_listing.company_id)
            this.setState({ appCompanyName: company[0].name })
            console.log(this.state.appCompanyName)
        })
    }
        // companyFinder = () => {
        //     fetch('http://localhost:3000/companies')
        //         .then(resp => resp.json())
        //         .then(data => {
        //             let cId = data.filter(company => company.id === this.props.a.job_listing.id)
        //             this.setState({ appCompanyId: cId })
        //         })
        //     }
        
        
    // console.log("props", props)
    render(){
        // this.companyFinder()
    return(
        <div className="grey-box">
        <Card.Group>
            <Card fluid className="application-box">
                <Card.Content>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust</p> */}
                    <h3>Position: {this.props.a.job_listing.name}</h3>
                    <h3>Salary: {this.props.a.job_listing.salary}</h3>
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
              
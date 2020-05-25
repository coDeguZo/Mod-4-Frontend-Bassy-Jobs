import React from "react"

class CompanyContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            edit: false,
            name: "",
            email: ""
            // password: ""
        }
    }

    render() {
        return (
            <div> 
                CompanyContainer
            </div>
        )
    }
}

export default CompanyContainer
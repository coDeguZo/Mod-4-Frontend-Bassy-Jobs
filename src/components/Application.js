import React from "react"

const Application = (props) => {
    // console.log(props.apps)
    // debugger
    // console.log(props.a.job_listing)
    return(
        <div>
            <br></br>
            <h3>Position: {props.a.job_listing.name}</h3>
            <h3>Salary: {props.a.job_listing.salary}</h3>
            <h3>Status: {props.a.status}</h3>
        </div>
    )
}

export default Application
                        // <div>
                        //     {/* <h3>{props.applications.job_listing.name}</h3> */}
                        //     {/* {props.applications.map(app => {
                        //         return (
                        //         <h3>{app.id}</h3>
                        //         )
                        //     })} */}
                        // </div>
                        // {/* <h1>{props.applications.job_listing.name}</h1> */}
                        // {/* {
                        //     props.applications.map(app => {
                        //         if (applications.user.id=== props.user.id){
                        //             return (
                        //                 <div>
                        //                     <h3>{applications.job_listing.name}</h3>
                        //                 </div>)
                        //         } else {
                        //             return null
                        //         }
                        //     })
                        // } */}
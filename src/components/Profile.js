import React from "react"

const Profile = (props) => {
    return(
        <div>
            <h3>Name: {props.user.name}</h3>
            <h3>Address: {props.user.address}</h3>
            <h3>Phone: {props.user.phone_number}</h3>
            <h3>Email: {props.user.email}</h3>
            {/* <h1>{props.applications.job_listing.name}</h1> */}
            {/* {
                props.applications.map(app => {
                    if (app.user.id=== props.user.id){
                        return (
                            <div>
                                <h3>{app.job_listing.name}</h3>
                            </div>)
                    } else {
                        return null
                    }
                })
            } */}
        </div>
    )
}

export default Profile
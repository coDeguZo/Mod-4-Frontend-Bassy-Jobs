import React from "react"

const Home = (props) => {
    return (
        <div> 
            {/* HOME */}
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
                        <h3> Research Companies </h3>
                         <img className="card-image" src="https://www.electrochem.org/wp-content/uploads/2017/05/RESEARCH.jpg" />
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        <h3> Apply To Jobs </h3>
                        <img className="card-image" src="https://media.istockphoto.com/vectors/application-form-man-with-clipboard-in-his-hand-fills-in-the-form-of-vector-id1016116752?k=6&m=1016116752&s=612x612&w=0&h=MSnpfy_mxw4eVukvo1wVTObcYS0HQ3t2vLWsZX9s9UA=" />
                    </div>
                </div>
            </div>
            <h1> Explore Bassy Jobs </h1>
            <h2>Millions of people are searching for jobs, salary information, company reviews, and interview questions.</h2>
            <h2>See what others are looking for on Bassy Jobs today.</h2>
            <br />
        </div>
    )
}

export default Home
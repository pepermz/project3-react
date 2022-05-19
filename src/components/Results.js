import React from "react";
import { Link } from "react-router-dom";
import '../App.css'


const Results =(props) => {

    const showData = props.results.map((image, idx) => {
            return(
             <div className="container-results" key={idx}>  
            <Link  className="results-card" to={`/${image.id}`} >{ ` ${image.attributes.name} ` }</Link>
            </div>
            )

        }
    )
    return(
        <>
            {showData}
        </>
    )
}

export default Results
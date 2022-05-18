import React from "react";
import { Link } from "react-router-dom";
import '../App.css'


const Results =(props) => {
    console.log(props.results)

    const showData = props.results.map((image, idx) => {
        console.log(image)
        // console.log(`this is the console log we need !!! ${JSON.stringify(image.relationships.featured_photo.data.id)}`)
            return(
             <div className="container-results">  
            <Link  className="results-card" to={`/${image.id}`} key={idx}>{ ` ${image.attributes.name} ` }</Link>
            </div>
            // {/* {image.relationships.featured_photo.data ? <img src={(image.relationships.featured_photo)} alt={`name`} key={idx}/> : null }  */}
            
            )

        }
    )
    // console.log(showData)

    return(
        <>
            {showData}
        </>
    )
}

export default Results
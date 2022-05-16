import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Results =(props) => {
    console.log(props.results)

    const showData = props.results.map((image, idx) => {
        // console.log(`this is the console log we need !!! ${JSON.stringify(image.relationships.featured_photo.data.id)}`)
            return(
            <Link className="results" to={'/results/:id'} key={idx}>{ ` ${image.attributes.name} ` }</Link>
            //  <img src={(image.relationships.featured_photo.data.id)} alt={`name`} key={idx}/>
             
            )

        }
    )
    console.log(showData)

    return(
        <>
            {showData}
        </>
    )
}

export default Results
import { useParams } from "react-router-dom"
import { useState, useEffect} from "react"
import Banner from "./Banner";

const SearchedItem = (props) => {
    const [image, setLocation] = useState({})
    const  auth_key = btoa('4f96b20b94d0c2e382d8d516663744f0:3418c931bd19226ace3c0dea40b7b54c').toString('base64');
    const { id }= useParams();
    const URL = `https://api.roadgoat.com/api/v2/destinations/${id}`
    var options = {
        'method': 'GET',
        'headers': {
          'Authorization': `Basic ${auth_key}`
        },
      };
    const fetchDetails = () => {
        fetch(URL, options)
        .then(res => res.json())
        .then(data => setLocation(data.data))
    }
    console.log(image)
    useEffect(() => {
        fetchDetails()
    }, [])
   
        // console.log(`this is the console log we need !!! ${JSON.stringify(image.relationships.featured_photo.data.id)}`)
        return(
          <div>
            <Banner />
           <h1>{image.attributes && image.attributes.name}</h1>
           <a href={image.attributes && image.attributes.airbnb_url}>Click here for Airbnb</a>
           {/* <div>{image.attributes && image.relationships.photos.data[0].id} </div> */}
           {/* <div> {image.relationships.photos.data.id ? <img src={(image.relationships.photos.data.id)} alt={`name`} /> : null } </div> */}
          </div>
        )
} 

export default SearchedItem
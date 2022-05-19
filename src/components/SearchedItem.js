import { useParams } from "react-router-dom"
import { useState, useEffect} from "react"
import Banner from "./Banner";
import airbnb from "../assets/airbnb.png"
import getyourguide from "../assets/getyourguide.png"
import google from "../assets/googlelogo.png"
import kayak from "../assets/kayak.png"
import Footer from "./Footer";

const SearchedItem = (props) => {
    const [image, setLocation] = useState({})
    const apikey = process.env.REACT_APP_ACCESS_KEY;
    const  auth_key = btoa(apikey).toString('base64');
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
    useEffect(() => {
        fetchDetails()
    }, [])

        return(
          <div>
            <Banner />
           <h1>{image.attributes && image.attributes.name}</h1>
           <p>Population: {image.attributes && image.attributes.population}</p>
           <div className="grid">
           <a className="card1"  href={image.attributes && image.attributes.airbnb_url}>
           <img className="card-img"  alt="airbnb"src={airbnb}/>
           </a>

           <a className="card1" href={image.attributes && image.attributes.google_events_url}>
           <img className="card-img"  alt="google"src={google}/>
           </a>
           <a className="card1" href={image.attributes && image.attributes.kayak_car_rental_url}>
           <img className="card-img"  alt="kayak"src={kayak}/>
           </a>
           <a className="card1" href={image.attributes && image.attributes.getyourguide_url}>
           <img className="card-img"  alt="getyourguide"src={getyourguide}/>
           </a>
           </div>
           < Footer />
          </div>
        )
} 

export default SearchedItem
import React from 'react'

function Banner() {
  return (
    <div className='banner'>
    <img className="profile-photo2" src={require("../assets/logo.png")} alt={"banner"}/>
    <img className="profile-photo" src={require("../assets/travelfy1.png")} alt={"banner"}/>
    <img className="profile-photo1" src={require("../assets/flying.png")} alt={"banner"}/>
    </div>
  )
}

export default Banner
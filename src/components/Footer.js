import React from 'react'
import FooterImg from "../assets/GitHub-Mark-Light-32px.png"

function Footer() {
  return (
    <div>
    <div className='footer1'>Developed By Jose Ramirez 
    <a className="github" href='https://github.com/pepermz'>
        <img className="github1"  alt="github"src={FooterImg}/>
    </a>
    </div>
    </div>
  )
}

export default Footer
import React from 'react'
import FooterImg from "../assets/GitHub-Mark-Light-32px.png"

function Footer() {
  return (
    <div>
    <div className='footer1'>Developed By Jose Ramirez</div>
    <a className="github" href=''>
        <img className="github1"  alt="github"src={FooterImg}/>
    </a>
    </div>
  )
}

export default Footer
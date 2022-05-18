import React from "react"
import { Link } from "react-router-dom"
import 'bootstrap'
import { Navbar, NavItem, NavLink} from "react-bootstrap"
import logoname from "../assets/logoname.png"

const Nav = (props) => {
	return (
		<div className="menu">
			<Navbar bg='myRed' variant="dark">
				<Navbar.Brand>
				<img className="logo-name"  alt="logoname"src={logoname}/>
				</Navbar.Brand>
			<Link to="/">
				<div className="home-nav">Home</div>
			</Link>
			<img className="footer-photo" src={require("../assets/footer.png")} alt={"banner"}/>
			<NavItem>
        </NavItem>
			</Navbar>
		
		</div>
		
	)
}

export default Nav
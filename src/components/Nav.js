import React from "react"
import { Link } from "react-router-dom"
import 'bootstrap'
import { Navbar, NavItem, NavLink} from "react-bootstrap"
import AboutMe from "./AboutMe"

const Nav = (props) => {
	return (
		<div className="menu">
			<Navbar bg='dark' variant="dark">
				<Navbar.Brand>
					Logo
				</Navbar.Brand>
			<Link to="/">
				<div>Home</div>
			</Link>
			<NavItem>
        </NavItem>
			</Navbar>
		
		</div>
		
	)
}

export default Nav
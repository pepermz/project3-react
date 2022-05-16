import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
	return (
		<div className="nav">
			<Link to="/">
				<div>Home</div>
			</Link>
			<Link to="/:id">
				<div>Results</div>
			</Link>
		</div>
	)
}

export default Nav
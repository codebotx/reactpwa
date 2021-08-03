import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap/'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
export default function Header() {
	return (
		<div>
			<Router>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="#home">Blog</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link><Link>Home</Link></Nav.Link>
							<Nav.Link><Link>About</Link></Nav.Link>
							<Nav.Link><Link>Users</Link></Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</Router>

		</div>
	)
}

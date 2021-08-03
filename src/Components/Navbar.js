import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap/'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Users from './Users'
export default function Header() {
	return (
		<div>
			<Router>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="#home">Blog</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link><Link to="/">Home</Link></Nav.Link>
							<Nav.Link><Link to="/About">About</Link></Nav.Link>
							<Nav.Link><Link to="/Users">Users</Link></Nav.Link>
						</Nav>
					</Container>
				</Navbar>
				<Switch>
					<Route path='/About' component={About } ></Route>
					<Route path='/Users' component={Users } ></Route>
					<Route path='/Home' component={Home } ></Route>
				</Switch>
			</Router>
		</div>
	)
}
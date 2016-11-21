import React from 'react';
import { Link } from 'react-router';
import {Navbar, Nav, NavItem, Button, Grid } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import './App.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import {RouteTransition} from 'react-router-transition'

/*http://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem*/

/*
This is the layout component. It's displayed by the top-level Route
this.props.children will correspond to the current URL's component.

If the URL is only / then the IndexRoute's component will be the child (Search component)
If the URL is /user/:username then the User component will be displayed.
*/

class App extends React.Component {
	
	componentWillMount() {
		console.log(this.props.route.auth)
	}
	render(){
		
        return (
            <div>
                <Navbar>
                    
                        <Navbar.Header>
							<Navbar.Brand href="#">FRONT.IO</Navbar.Brand>
						</Navbar.Header>
                        <Navbar.Collapse id="bs-example-navbar-collapse-1">
                            <Nav>
                                <IndexLinkContainer to="/">
									<NavItem eventKey={1}>Home</NavItem>
								</IndexLinkContainer>
								<LinkContainer to="/list">
									<NavItem eventKey={2}>Tasks</NavItem>
								</LinkContainer>
								<LinkContainer to="/about">
									<NavItem eventKey={3}>About</NavItem>
								</LinkContainer>
								
								<NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
									<MenuItem eventKey={4.1}>Action</MenuItem>
									<MenuItem eventKey={4.2}>Another action</MenuItem>
									<MenuItem eventKey={4.3}>Something else here</MenuItem>
									<MenuItem divider />
									<MenuItem eventKey={4.3}>Separated link</MenuItem>
								</NavDropdown>

                            </Nav>
                        </Navbar.Collapse>
						                    
                </Navbar>
                <Grid>
                	{/*<!-- Mount child routes -->*/}
                	 <ReactCSSTransitionGroup
						component="div"
						transitionName="example"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}
					>
						 {React.cloneElement(this.props.children, {
							auth: this.props.route.auth, //sends auth instance to children
							key: location.pathname
	  					})}
					</ReactCSSTransitionGroup>
					
					
                </Grid>
            </div>
        );
    }    
}


export default App;

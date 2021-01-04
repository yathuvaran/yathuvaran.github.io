import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

class Navigation extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={NavLink} exact to="/">Welcome</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/skills">Skills</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/projects">Projects</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='font_awesome_link' target="_blank" active={false} href="assets/YathuvaranResume.pdf">
                            <FontAwesomeIcon className='nav_icon' icon={faFile} />
                        </Nav.Link>
                        <Nav.Link className='font_awesome_link' target="_blank" active={false} href="https://github.com/yathuvaran">
                            <FontAwesomeIcon className='nav_icon' icon={faGithub} />
                        </Nav.Link>
                        <Nav.Link className='font_awesome_link' target="_blank" active={false} href="https://www.linkedin.com/in/anandarajahyathuvaran/">
                            <FontAwesomeIcon className='nav_icon' icon={faLinkedin} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;
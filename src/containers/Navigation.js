import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

class Navigation extends Component {

    changeHandler(event) {
        this.setState({ active: event.target.value });
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Welcome</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" defaultActiveKey={window.location.pathname}>
                        <Nav.Link as={Link} to="/" eventKey="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" eventKey="/about" >About</Nav.Link>
                        <Nav.Link as={Link} to="/skills" eventKey="/skills" >Skills</Nav.Link>
                        <Nav.Link as={Link} to="/projects" eventKey="/projects" >Projects</Nav.Link>
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
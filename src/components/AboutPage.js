import React, { Component } from 'react';
import { Col, Row, Button} from 'react-bootstrap';
import Scramble from 'react-scramble';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = { isDesktop: false };
        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 992 });
    }
    render() {
        var particlesOptions = {
            particles: {
                color: {
                    value: "#d27409"
                },
                line_linked: {
                    color: '#d27409',
                  }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    }
                }
            }
        }
        return (
            <div>
                <Row className='about_row'>
                    <Col>
                        <div className='about_scrambled'>
                            <Scramble
                                autoStart
                                text="About Me"
                                steps={[
                                    {
                                        roll: 10,
                                        action: '+',
                                        type: 'all',
                                    },
                                    {
                                        action: '-',
                                        type: 'forward',
                                    },
                                ]}
                            />
                        </div>
                    </Col>

                </Row>
                <Row className='about_row'>
                    <Col>
                        <p className='about_paragraph'>I’m a Software Engineering student studying my third year at Carleton University. I’ve developed my skills and experience through my work experience and the various academic courses, and projects that I have completed throughout my career. I have an endless passion for engineering and analyze every problem comprehensively through an engineering perspective to find the most efficient and effective solution. I enjoy working in teams as it allows me to view solutions to problems from different perspectives, however, I am also capable of working independently.</p>
                        <p className='about_paragraph'>As a Developer, I have full stack experience including:  React and Angular on the frontend, Java and python on the backend, and CI/CD with Jenkins for devops. While complex engineering problems are often intrinsically satisfying to solve, I’m most attracted to solving real customer problems with a business justification. I am currently looking for new graduate full-time positions starting May 2022.</p>
                        <Button as={Link} to='/skills' className='flow_btn flow_btn_about_row' variant="outline-light">My Skills</Button>
                    </Col>
                    {this.state.isDesktop && <Col className='particles_col'><Particles params={particlesOptions} /></Col>}
                </Row>
                
            </div>
        )
    }
}

export default AboutPage

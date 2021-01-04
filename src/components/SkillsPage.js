import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Scramble from 'react-scramble';
import { Link } from 'react-router-dom';
import Experience from './Experience';

class SkillsPage extends Component {

    createRatings(name, val) {
        return (
            <Row className='rating_row'>
                <Col className='rating light_text'>
                    {name}
                </Col>
            </Row>)
    }

    render() {
        var ratings1 = [
            { name: 'Java'},
            { name: 'Javascript'},
            { name: 'React'},
            { name: 'Python'},
            { name: 'C'},
            { name: 'HTML'},
            { name: 'CSS'},
            { name: 'C#'},
        ]
        var ratings2 = [
            { name: 'PHP'},
            { name: 'ElasticSearch'},
            { name: 'Unit Testing'},
            { name: 'Git'},
            { name: 'Bash'},
            { name: 'Bootstrap Framework'},
            { name: 'Spring Boot'},
            { name: 'Hibernate'},
        ]
        var ratings3 = [
            { name: 'Scrum'},
            { name: 'SEO'},
            { name: 'SASS / SCSS'},
            { name: 'Object Orientated Programming'},
            { name: 'Functional Programming'},
            { name: 'CI/CD'},
            { name: 'Jenkins'},
            { name: 'UX/UI Design'},
        ]
        return (
            <div>
                <Row className='about_row'>
                    <Col>
                        <div className='about_scrambled'>
                            <Scramble
                                autoStart
                                text="Skills & Experience"
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
                <Experience />
                <Row className='skills_line_row'>
                    <Col className='skills_line'>
                        <h2>Skills</h2>
                    </Col>
                </Row>
                <Container>
                    <Row className='ratings_main_row'>
                        <Col sm={6} md={4}>
                            {ratings1.map((rating) => this.createRatings(rating.name))}
                        </Col>
                        <Col sm={6} md={4} className='skills_center_col'>
                            {ratings2.map((rating) => this.createRatings(rating.name))}
                        </Col>
                        <Col sm={6} md={4}>
                            {ratings3.map((rating) => this.createRatings(rating.name))}
                        </Col>
                    </Row>
                </Container>
                <Row className='about_row'>
                    <Col className='flow_btn_col'>
                        <Button as={Link} to="/projects" className='flow_btn flow_btn_skills_row' variant="outline-light">My Projects</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SkillsPage;




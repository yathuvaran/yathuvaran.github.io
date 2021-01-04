import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Scramble from 'react-scramble';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

class ProjectsPage extends Component {

    renderImages(name, src, desc, status, link) {
        return (
            <Col className='projects'>
                <div className='image_cont'>
                    <a href={link} target='_blank' rel="noreferrer">
                        <img alt={name} src={`assets/${src}.png`}></img>
                        <div className='img_overlay'>
                            <div className='ext_icon'><FontAwesomeIcon icon={faExternalLinkAlt} /></div>
                            <div className='project_status'>{status}</div>
                            <div className='project_desc'>{desc}</div>
                        </div>
                    </a>
                </div>
                <h3 className='orange_text project_name'>{name}</h3>
            </Col>
        )
    }


    render() {
        var images = [
            {
                name: 'TicTacToe',
                src: '250TicTacToe',
                desc: 'The goal of this project was to develop a software version of the Tic-tac-toe game',
                status: 'Completed',
                link: 'https://github.com/yathuvaran/Tic-tac-toe'
            }, {
                name: 'Magic-Square',
                src: '250MagicSquare',
                desc: 'The goal of this project was to develop a software version of the Magic-square game.',
                status: 'Completed',
                link: 'https://github.com/yathuvaran/Magic-square'
            }, {
                name: 'Zelda-like Game',
                src: '250Zelda',
                desc: 'Experimenting with game development on the unity engine using the C# language',
                status: 'In Progress',
                link: 'https://github.com/yathuvaran/Zelda-like-game'
            }];
        return (
            <div>
                <Row className='about_row'>
                    <Col>
                        <div className='about_scrambled'>
                            <Scramble
                                autoStart
                                text="Projects"
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
                    {images.map((image) => this.renderImages(image.name, image.src, image.desc, image.status, image.link))}
                </Row>
            </div>
        )
    }
}

export default ProjectsPage
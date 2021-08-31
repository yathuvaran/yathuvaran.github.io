import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Scramble from 'react-scramble';

class HomePage extends Component {
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
        return (
            <div className='transparent_home'>
                <Container className='typewriter_cont'>
                    <div className='typewriter'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Hello World!')
                                    .pauseFor(250)
                                    .deleteAll()
                                typewriter.typeString("I'm Yathu,")
                                    .pauseFor(250)
                                    .deleteAll()
                                    .start();
                            }}>
                        </Typewriter>
                    </div>
                </Container>
                <Container className='scrambled_container'>
                    <div className='scrambled'>
                        {this.state.isDesktop ?
                            <Scramble
                                autoStart={true}
                                preScramble={true}
                                speed={'medium'}
                                noBreakSpace={true}
                                text="I'm a final year Software Engineering student at Carleton University"
                                steps={[
                                    {
                                        action: '-',
                                        type: 'forward',
                                    },
                                ]}
                            /> : `I'm a final year Software Engineering student at Carleton University`}
                    </div>
                </Container>
                <Container className='btn_cont'>
                    <Button as={Link} to='/about' className='flow_btn' variant="outline-light">About Me</Button>
                </Container>
            </div>
        );
    }
}

export default HomePage;
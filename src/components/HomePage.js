import React from 'react';
import { Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Scramble from 'react-scramble';

function HomePage() {

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
                    <Scramble
                        autoStart={true}
                        preScramble={true}
                        speed={'medium'}
                        noBreakSpace={true}
                        text="I'm a third year Software Engineering student at Carleton University"
                        steps={[
                            {
                                action: '-',
                                type: 'forward',
                            },
                        ]}
                    />
                </div>
            </Container>
            <Container className='btn_cont'>
                <Button as={Link} to='/about' className='flow_btn' variant="outline-light">About Me</Button>
            </Container>
        </div>
    );
}

export default HomePage;
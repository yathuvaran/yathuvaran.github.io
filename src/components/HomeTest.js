import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

function Test() {
    return (
        <div class="site-wrapper">
            <div class="site-wrapper-inner">
                <div class="container">

                    <div class="masthead clearfix">
                        <div class="container inner">
                            <h3 class="masthead-brand">Welcome</h3>
                            <nav>
                                <ul class="nav masthead-nav">
                                    <li class="active"><a href="#">Home</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="inner cover">
                        <h1 class="cover-heading"><Typewriter
                          options={{
                            loop: true}}
                            onInit={(typewriter) => {
                                typewriter.typeString('Hello World!')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .callFunction(() => {
                                        console.log('All strings were deleted');
                                    })
                                    .start();
                            }}
                        /></h1>
                        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                        <p class="lead">
                            <a href="#" class="btn btn-lg btn-default">Learn more</a>
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Test;
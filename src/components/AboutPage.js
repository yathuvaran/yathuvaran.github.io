import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Scramble from "react-scramble";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

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
          value: "#d27409",
        },
        line_linked: {
          color: "#d27409",
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
    };
    return (
      <div>
        <Row className="about_row">
          <Col>
            <div className="about_scrambled">
              <Scramble
                autoStart
                text="About Me"
                steps={[
                  {
                    roll: 10,
                    action: "+",
                    type: "all",
                  },
                  {
                    action: "-",
                    type: "forward",
                  },
                ]}
              />
            </div>
          </Col>
        </Row>
        <Row className="about_row">
          <Col>
            <p className="about_paragraph">
              Hello! I'm a passionate Software Engineer with a degree from
              Carleton University and a diverse background in technical
              consulting, full stack development, and digital marketing.
              Throughout my career, I've collaborated with industry leaders such
              as IBM, RBC, Nokia, and Eaton, gaining valuable experience and
              insights.
            </p>
            <p className="about_paragraph">
              My expertise spans technical consulting and software development,
              focusing on solving complex problems and enhancing efficiency in
              every project. At IBM, I deliver tailored solutions that meet
              clients' unique needs, while my roles at RBC, Nokia, and Eaton
              have strengthened my ability to innovate, automate processes, and
              create intuitive user interfaces.
            </p>
            <p className="about_paragraph">
              I am driven by a commitment to excellence and continuously seek
              new challenges to further my skills and knowledge. Let's connect
              and discuss how I can contribute to your team with dedication,
              experience, and a passion for technology.
            </p>
            <Button
              as={Link}
              to="/skills"
              className="flow_btn flow_btn_about_row"
              variant="outline-light"
            >
              My Skills
            </Button>
          </Col>
          {this.state.isDesktop && (
            <Col className="particles_col">
              <Particles params={particlesOptions} />
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default AboutPage;

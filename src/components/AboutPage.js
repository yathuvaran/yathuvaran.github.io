import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Scramble from "react-scramble";
import { Link } from "react-router-dom";

class AboutPage extends Component {
  render() {
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
              to="/experience"
              className="flow_btn flow_btn_about_row"
              variant="outline-light"
            >
              My Experience
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutPage;

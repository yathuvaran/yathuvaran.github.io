import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Experience extends Component {
  renderExperience(place, title, date, desc) {
    return (
      <Container className="experience_desc">
        <Row className="experience_first_row">
          <Col className="orange_text" md="4">
            <h5>{place}</h5>
          </Col>
          <Col className="orange_text" md="8">
            <h5>{title}</h5>
          </Col>
        </Row>
        <Row>
          <Col className="light_text" md="4">
            <h5>{date}</h5>
          </Col>
          <Col className="light_text" md="8">
            <p>{desc}</p>
          </Col>
        </Row>
      </Container>
    );
  }

  render() {
    var exp = [
      {
        place: "Carleton University",
        title: "Bachelor - Software Engineering",
        date: "Sept 2017 - Current",
        desc: "I’m currently in my fourth year of the Software Engineering program at Carleton. It has provided me with comprehensive knowledge regarding fundamental computing theory and practice, processes, methods and tools for developing software systems, and regulatory and social issues. Emphasis is placed on developing expertise in object-oriented programming (using C++ and Java) and real-time computer systems.",
      },
    ];
    var exp2 = [
      {
        place: "Nokia",
        title: "IT Developer",
        date: "May 2021 - August 2021",
        desc: "For my last Co-op term, I worked at Nokia as an IT Developer with the Cloud Networking team. I developed multiple scripts to automate the manual verification of network firewall and load balancer configuration settings. Whilst developing these scripts, I was greatly exposed to the Google Cloud Platform, utilizing the Google Cloud Client Libraries for Python in many of my scripts. I was also able to apply my concurrent programming skills, by developing multithreaded scripts. Additionally, I gained experience in using tools such as Terraform, and using various Python packages such as pandas, NumPy, and Tkinter to name a few.",
      },
      {
        place: "Royal Bank of Canada",
        title: "Full Stack Developer",
        date: "May 2020 - October 2020",
        desc: "After my first Co-op term ended, I had gotten my work term extended with the EA team to work exclusively on TechScape. During this term I was able to strengthen the new skills I had learnt in my previous term. I had also gained experience in full stack development by developing client and server software for the TechScape application. For example, I have used React and Bootstrap for frontend dev, and Spring, JPA, and Hibernate for backend dev. Additionally I gained experience with RESTful Web Services and modeling entity-relationships to design database structures with Liquibase.",
      },
      {
        place: "Royal Bank of Canada",
        title: "Technical Systems Analyst",
        date: "Jan 2020 - April 2020",
        desc: "My first Co-op term at RBC had me work under the Digital Accessibility (DA) and Enterprise Architecture (EA) teams. With the DA team, I designed, developed and refactored web apps (using HTML, CSS, and JavaScript) to conform with the RBC Digital Accessibility Guidelines. For the EA team I worked on developing their TechScape web application; designed to provide users with a visual representation of all the technologies used at RBC. Whilst developing Techscape, I learnt many new libraries and frameworks such as Spring, React, ElasticSearch and Bootstrap to name a few.",
      },
      {
        place: "Eaton Corporation",
        title: "Marketing Intern",
        date: "May 2019 - August 2019",
        desc: "My first internship at Eaton as a marketing intern taught me how to make prioritization decisions based on the business value of a project. Which I find allows me to make economic decisions throughout the software development lifecycle. Eaton is a multinational power management company, with two business sectors; Electrical and Industrial.",
      },
    ];
    return (
      <div>
        <Row className="skills_line_row">
          <Col className="skills_line">
            <h2>Experience</h2>
          </Col>
        </Row>
        <Container className="experience_cont">
          <Row className="skills_line_row_title">
            <Col className="light_text experience_title" md="6">
              <h3>Education</h3>
            </Col>
          </Row>
        </Container>
        {exp.map((exp) =>
          this.renderExperience(exp.place, exp.title, exp.date, exp.desc)
        )}
        <Container className="experience_cont">
          <Row className="skills_line_row_title">
            <Col className="light_text experience_title" md="6">
              <h3>Experience</h3>
            </Col>
          </Row>
        </Container>
        {exp2.map((exp) =>
          this.renderExperience(exp.place, exp.title, exp.date, exp.desc)
        )}
      </div>
    );
  }
}

export default Experience;

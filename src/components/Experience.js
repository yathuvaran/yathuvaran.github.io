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
            {desc.map((txt) => (
              <p>{txt}</p>
            ))}
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
        date: "Sept 2017 - April 2022",
        desc: ["GPA: 3.4/4.0"],
      },
    ];
    var exp2 = [
      {
        place: "IBM",
        title: "Technical Consultant",
        date: "May 2021 - Present",
        desc: [
          "Led the data migration effort from AX09 to Microsoft Dynamics 365 (D365) for a large International Manufacturing Client, including creating the data migration strategy and preforming the data load into D365",
          "Managed the the development, testing, and successful integration of several modules into D365, ensuring alignment with client requirements through close collaboration with cross-functional teams",
          "Led testing efforts as Test Lead, creating test cases in Azure DevOps, training clients on testing procedures, and performing rigorous Unit and System Integration Testing (SIT)",
          "Developed and executed a comprehensive performance testing plan for BMO's advanced AI fraud detection software. Collaborating with IBM and BMO teams to optimize system performance through fine-tuning configuration settings, achieving a 45\% increase in processing efficiency",
          "Oversaw IBM's role in the BMO Fraud Modernization Program by leading scrum meetings, tracking progress, and designing and presenting system enhancements incorporating advanced AI capabilities to executives",
          "Led support efforts by managing IBM and BMO technical teams for system configuration and defect resolution, especially during production cutovers, ensuring smooth operation and successful transitions to live environments"
        ],
      },
      {
        place: "Nokia",
        title: "IT Developer",
        date: "May 2021 - August 2021",
        desc: [
          "Automated the verification of network firewall and load balancer configurations using Google Cloud Client Libraries for Python, saving the cloud networking team 2 hours daily",
          "Created a multithreaded Python program to monitor latency and packet loss by verifying interconnectivity between multiple network firewall VMs across various regions",
          "Enhanced efficiency of network firewall change deployments by creating a script to filter and merge duplicate change requests before application via Terraform, resulting in a 95% improvement in deployment process efficiency",
          "Developed an application using Python (utilizing pandas, NumPy, and Tkinter) to map Nokia’s server IP addresses to subnetworks across different locations, reducing data generation time from over 8 hours to 3 minutes"
        ],
      },
      {
        place: "Royal Bank of Canada",
        title: "Full Stack Developer",
        date: "January 2020 - October 2020",
        desc: [
          "Developed the TechScape web application using Java Spring Boot, JPA, Hibernate, and RESTful web services, enhancing development efficiency across RBC by 35%",
          "Designed and implemented intuitive, responsive user interfaces with React, Redux, and Bootstrap, ensuring alignment with RBC design standards",
          "Implemented Elasticsearch for enhanced search functionality in TechScape, increasing user engagement by 40%",
          "Created and maintained RESTful API architecture with Spring MVC, Spring IOC, and Spring Transactions for seamless integration and functionality",
          "Developed and maintained automated test cases using Selenium WebDriver (JUnit) for functional and regression testing, improving code quality and reducing bugs by 25%"
        ],
      },
      {
        place: "Eaton Corporation",
        title: "Marketing Intern",
        date: "May 2019 - August 2019",
        desc: [
          "Created interactive dashboards with Microsoft Power BI to visualize key trends and goals, aiding in improved operations and profit planning",
          "Programmed VBA algorithms to maintain and support pricing systems in Microsoft Excel, improving pricing accuracy and efficiency",
          "Created digital marketing content and sales materials using Adobe software, enhancing communication effectiveness"
        ],
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

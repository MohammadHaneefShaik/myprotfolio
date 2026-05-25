import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="scroll-reveal" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">I Am</strong> — Unfolding My
              Journey
            </h1>
            <div className="scroll-reveal scroll-reveal-delay-1">
              <Aboutcard />
            </div>
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img scroll-reveal scroll-reveal-delay-2"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <div className="scroll-reveal">
          <Techstack />
        </div>

        <h1 className="project-heading scroll-reveal">
          My Everyday <strong className="purple">Development Tools</strong>
        </h1>
        <p className="scroll-reveal" style={{ textAlign: "center", color: "lightgray" }}>
          Tools that help me write, test, and collaborate efficiently.
        </p>
        <div className="scroll-reveal">
          <Toolstack />
        </div>


        {/* --- Certifications Section --- */}
        <h1 className="project-heading scroll-reveal" style={{ marginTop: "40px" }}>
          Certifications & <strong className="purple">Achievements</strong>
        </h1>
        <p className="scroll-reveal" style={{ textAlign: "center", color: "#aaa", fontSize: "16px", marginBottom: "20px" }}>
          Recognitions and participations that helped me grow outside the classroom.
        </p>
        <ul className="scroll-reveal" style={{ listStyle: "none", paddingLeft: "0", color: "#ddd", fontSize: "20px", lineHeight: "1.8" }}>
          <li>📜 <strong>AWS Cloud Practitioner</strong> – Certificate with 82%</li>
          <li>🧠 <strong>Flipkart Grid 6.0</strong> – Problem-Solving Participation</li>
          <li>🚀 Participated in multiple challenges on <strong>Unstop</strong></li>
        </ul>

        <br />

      </Container>
    </Container>
  );
}

export default About;

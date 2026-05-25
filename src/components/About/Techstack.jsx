import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiPython } from "react-icons/di";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";

function Techstack() {
  return (
    <div>

      {/* --- Tech Stack --- */}
      <h1 className="project-heading">
        My <strong className="purple">Tech Stack</strong>
      </h1>
      <p style={{ textAlign: "center", color: "lightgray" }}>
        Technologies I work with regularly and have good hands-on experience in.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons"><SiMongodb /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiExpress /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      </Row>

      {/* --- Exploring / Learning --- */}
      <h1 className="project-heading">
        Technologies I'm <strong className="purple">Exploring</strong>
      </h1>
      <p style={{ textAlign: "center", color: "lightgray" }}>
        Currently learning or improving upon these technologies.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons faded-skill"><DiReact /></Col>
        <Col xs={4} md={2} className="tech-icons faded-skill"><FaJava /></Col>
        <Col xs={4} md={2} className="tech-icons faded-skill"><DiPython /></Col>
      </Row>

      {/* --- Academic Tools --- */}
    </div>
  );
}

export default Techstack;

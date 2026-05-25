import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="4" className="footer-copywright">
          <h3>Designed & Developed by Mohammad Haneef</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Mohammad Haneef</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/MohammadHaneefShaik"
                style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.2em", transition: "color 0.3s" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shaneef7570@gmail.com"
                style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.2em", transition: "color 0.3s" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shaik-mohammad-haneef-6b3686309/"
                style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.2em", transition: "color 0.3s" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

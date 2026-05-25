import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pfp me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description scroll-reveal">

            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">Welcome</span> to my digital space!
            </h1>

            <p className="home-about-body">
              I'm <b className="purple">Mohammad Haneef</b>, an enthusiastic developer who loves to build, learn, and innovate.
              <br />
              <br />
              While still on my learning journey, I enjoy exploring different technologies and working on meaningful projects.
              <br />
              <br />
              This space showcases my
              <i>
                <b className="purple"> projects, skills, and developer journey. </b>
              </i>
              I'm always looking for ways to collaborate, grow, and make a difference through tech.
              <br />
              <br />
              Feel free to check out my work and
              <b className="purple"> let's connect</b> to build something amazing —
              <i>
                <b className="purple"> together!</b>
              </i>
            </p>

          </Col>
          <Col md={4} className="myAvtar scroll-reveal scroll-reveal-delay-1">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>



        <Row>
          <Col md={12} className="home-about-social scroll-reveal">
            <h1>Let's Connect</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MohammadHaneefShaik"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shaneef7570@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="Send Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shaik-mohammad-haneef-6b3686309"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

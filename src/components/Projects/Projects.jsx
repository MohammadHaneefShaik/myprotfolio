import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import restauraunt from "../../Assets/restauraunt.jpg";
import ecommm from "../../Assets/ecommimage.jpeg";
import aibuudy from "../../Assets/chatt.png";
import blockpay from "../../Assets/blockpay.png";
import trackify from "../../Assets/trackify.png";
import digitaldoctor from "../../Assets/digitaldoctor.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading scroll-reveal">
          What I've Been <strong className="purple">Building </strong>
        </h1>
        <p className="scroll-reveal scroll-reveal-delay-1" style={{ color: "white" }}>
          Take a look at some of my recent and most meaningful development work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>



          {/* BlockPay */}
          <Col md={4} className="project-card scroll-reveal">
            <ProjectCard
              imgPath={blockpay}
              title={
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#c770f0",
                    padding: "4px 8px",
                    borderRadius: "6px",
                  }}
                >
                  ⛓️ BlockPay
                </span>
              }
              description="BlockPay 💳 is a blockchain-based payment platform built using React, Node.js, MongoDB, Solidity, and FastAPI. It features secure crypto transactions, wallet integration, JWT authentication, and smart contract powered payment verification."
              ghLink="https://github.com/MohammadHaneefShaik"
              demoLink="https://blockpay-web.vercel.app"
            />
          </Col>

          {/* Trackify */}
          <Col md={4} className="project-card scroll-reveal scroll-reveal-delay-1">
            <ProjectCard
              imgPath={trackify}
              title={
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#c770f0",
                    padding: "4px 8px",
                    borderRadius: "6px",
                  }}
                >
                  🚌 Trackify
                </span>
              }
              description="Trackify 🚍 is a real-time college bus tracking system inspired by live transit apps. It provides live bus movement updates, stop-based tracking, estimated arrival timings, and a smooth responsive UI for students and administrators."
              ghLink="https://github.com/MohammadHaneefShaik/Trackify"
              demoLink="https://trackify-app.azurewebsites.net"

            />
          </Col>


          <Col md={4} className="project-card scroll-reveal">
            <ProjectCard
              imgPath={aibuudy}

              title={
                <span style={{
                  fontWeight: 'bold',
                  color: '#c770f0',
                  padding: '4px 8px',
                  borderRadius: '6px'
                }}>
                  🤖 AI-Buddy
                </span>
              }

              description="AI-Buddy 🤖 – A secure, modern MERN stack chatbot using Google Gemini API, with JWT-based authentication,
               chat history in MongoDB, and a responsive React + Vite + Material UI interface."
              ghLink="https://github.com/MohammadHaneefShaik/Ai-Buddy"
              demoLink="https://aibuddychat.vercel.app/"
            />
          </Col>
          {/*
          <Col md={4} className="project-card scroll-reveal scroll-reveal-delay-1">
            <ProjectCard
              imgPath={ecommm}

              title={
                <span style={{
                  fontWeight: 'bold',
                  color: '#c770f0',
                  padding: '4px 8px',
                  borderRadius: '6px'
                }}>
                  🛒 Ecommerce Site
                </span>
              }
              description=" A robust e-commerce backend built with Node.js, Express.js, and MongoDB. 
              Features include user authentication, 
              product and order management, secure API endpoints, error handling, and email notifications."
              ghLink="https://github.com/ayushkhandelwal18/Backend-ecommerce"
            />
          </Col>
*/}

          {/* Digital Doctor */}
          <Col md={4} className="project-card scroll-reveal scroll-reveal-delay-2">
            <ProjectCard
              imgPath={digitaldoctor}
              title={
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#c770f0",
                    padding: "4px 8px",
                    borderRadius: "6px",
                  }}
                >
                  🩺 Digital Doctor
                </span>
              }
              description="Digital Doctor 🏥 is an AI-powered healthcare assistance platform that helps users with symptom analysis, health guidance, appointment management, and medical support through a modern responsive web interface. Built using the MERN stack with secure authentication and intelligent chatbot integration."
              ghLink="https://github.com/MohammadHaneefShaik/Digital-Doctor"
              demoLink="https://digital-doctor-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card scroll-reveal scroll-reveal-delay-2">
            <ProjectCard
              imgPath={restauraunt}

              title={
                <span style={{
                  fontWeight: 'bold',
                  color: '#c770f0',
                  padding: '4px 8px',
                  borderRadius: '6px'
                }}>
                  🍽️ Food Ordering Site
                </span>
              }
              description=" Food Ordering System is a web/mobile application that allows users to browse restaurants, select food items, and place orders online. The system simplifies the ordering process, providing a fast and convenient way for customers while helping restaurants manage orders efficiently."
              ghLink="https://github.com/MohammadHaneefShaik/FoodOrderingwebsite"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

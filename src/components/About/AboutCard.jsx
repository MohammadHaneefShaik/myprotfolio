import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I’m <span className="purple">Mohammad Haneef</span>, a
            <span className="purple"> B.Tech student (Batch 2024–2027)</span> at
            the
            <span className="purple">
              {" "}
              Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal
            </span>
            , pursuing my degree in{" "}
            <span className="purple">
              Computer Science and  Engineering
            </span>
            .
            <br />
            <br />
            I’m a passionate{" "}
            <span className="purple">MERN Stack Developer</span>, always looking
            to create meaningful and innovative projects. <br />I constantly
            seek <span className="purple">opportunities</span> to apply my
            skills and gain real-world experience in the tech space.
            <br />
            <br />
            I'm also sharpening my problem-solving abilities by actively
            learning
            <span className="purple"> Data Structures and Algorithms</span>.
            <br />
            <br />
            Beyond coding, I’m deeply interested in{" "}
            <span className="purple">startups</span> and
            <span className="purple"> entrepreneurship</span>, driven by a
            mindset focused on innovation and building impactful solutions.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Together, let's build something meaningful and make an impact!"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

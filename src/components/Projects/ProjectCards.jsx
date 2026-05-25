import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ overflow: "hidden" }}>
        <Card.Img variant="top" src={props.imgPath} alt={`${props.title} screenshot`} />
      </div>

      <Card.Body className="d-flex flex-column" style={{ padding: "1.2rem 1.5rem" }}>
        <Card.Title style={{ marginBottom: "0.8rem" }}>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "left", fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", lineHeight: "1.6" }}>
          {props.description}
        </Card.Text>

        <div className="mt-auto" style={{ paddingTop: "0.8rem" }}>
          <Button variant="primary" href={props.ghLink} target="_blank" rel="noopener noreferrer">
            <BsGithub /> &nbsp; GitHub
          </Button>

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
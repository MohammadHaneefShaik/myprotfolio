import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Container style={{ paddingTop: "80px", paddingBottom: "50px", minHeight: "80vh" }}>
      {/* Heading */}
      <h1
        style={{
          marginTop: "20px",
          textAlign: "center",
          marginBottom: "10px",
          color: "#c770f0",
          fontWeight: "bold",
        }}
      >
        My Resume
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#aaa",
          fontSize: "16px",
          marginBottom: "30px",
        }}
      >
        Explore my professional journey below.
      </p>

      {/* Responsive iframe container */}
      <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            aspectRatio: "8.5 / 11",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            overflow: "hidden",
            marginTop: "10px",
            position: "relative",
            backgroundColor: "#f5f5f5",
          }}
        >
          {!loaded && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                zIndex: 10,
                color: "#aaa",
                fontSize: "16px",
              }}
            >
              Loading Resume...
            </div>
          )}
          <iframe
            src="https://drive.google.com/file/d/1PuwY5C2_dHrkwKFAUCcHRZis0k3_pObv/preview?rm=minimal"
            title="Resume Preview"
            onLoad={() => setLoaded(true)}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              objectFit: "contain",
            }}
          ></iframe>
        </div>
      </Row>

      {/* Download Button */}
      <Row style={{ justifyContent: "center", marginTop: "20px" }}>
        <Button
          variant="primary"
          href="https://drive.google.com/file/d/1PuwY5C2_dHrkwKFAUCcHRZis0k3_pObv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "220px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Row>
    </Container>
  );
}

export default Resume;

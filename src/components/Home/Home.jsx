import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Home2 from "./Home2";
import Type from "./Type";
import HeroVisual from "./HeroVisual";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">

        <Container className="home-content">
          <Row className="align-items-center">

            <Col md={7} className="home-header">

              <h1 style={{ paddingBottom: 15 }} className="heading scroll-reveal">
                Hey there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name scroll-reveal scroll-reveal-delay-1">
                I'M
                <strong className="main-name"> Mohammad Haneef</strong>
              </h1>

              <div className="typewriter-wrap scroll-reveal scroll-reveal-delay-2">
                <Type />
              </div>
            </Col>

            <Col md={5} className="scroll-reveal scroll-reveal-delay-2" style={{ paddingBottom: 20 }}>
              <HeroVisual />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

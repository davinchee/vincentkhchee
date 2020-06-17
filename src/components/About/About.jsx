import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const About = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename="profile.jpg" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  i love enjoying life, trying and learning new things. i am a dev with full-stack skills and three years of experience at a high-paced start-up and a boutique consultancy company.
                </p>
                <p className="about-wrapper__info-text">
                  i strive to eliminate efficiency problems, both trivial and complex through the use of technology and from a ground up, first-principles approach, whenever suitable. this approach allows for exponential results rather than linear ones.
                </p>
                <p className="about-wrapper__info-text">
                  my other interests: food and travel, cooking, basketball, blockchain, finance, geopolitics and history, reading, music
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="https://drive.google.com/file/d/1y94jxQE1ExAbBj-4dssYi_kGmoNAVDgg/view?usp=sharing">
                    résumé
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

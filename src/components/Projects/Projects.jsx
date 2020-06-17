import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

export const projects = [
  {
    img: 'meid-eprac-screenshot.png',
    title: 'meid eprac',
    info: 'a simple browser extension which aims to help the user use their time in the best way they can through reminder of death.',
    info2: 'it also includes a habit tracker and a little weather widget.',
    url: '',
    repo: '',
  },
  {
    img: 'work-in-progress.jpg',
    title: 'sellit (wip)',
    info: 'i was unable to get a h1b working visa to continue remaining in the US so i need to sell my large possessions so i can recoup some of the costs.',
    info2: 'my apartment uses buildinglink and the UX is not the greatest, so the goal here is to create this so i can sell my stuff.',
    url: 'https://www.github.com/davinchee',
    repo: '',
  },
  {
    img: 'work-in-progress.jpg',
    title: 'network-donations (wip)',
    info: 'the inspiration for this idea came to me during the protests that spread throughout america in june after the killing of George Floyd.',
    info2: 'the idea is you will be able to make a donation which will generate a link which can be shared on social media and the ultimate goal is to increase the amount of donations by illustrating the power of networks through showing how much money your particular network has donated due to your link (and donation) or prior links.',
    url: '',
    repo: '',
  },
];

const Projects = () => {

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map(x => {
            const { title, info, info2, url, repo, img } = x;

            return (
              <Row key={x.title}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;

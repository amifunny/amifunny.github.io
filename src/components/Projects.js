import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import ProjImage1 from '../assets/project/save-my-head.jpg'

export const Projects = () => {


  const projectsData = [
    {
      title: "Save Your Head",
      description: "A Two-Player game with a fight to save their heads."+
        "Players are two cute box animals. Each Player attempt to sit on the other player's head."+
        " They are helped by powerups like 2X Boosters and Bullet shots. Laser and Bombs are also threats to our players.",
      imgUrl: ProjImage1,
      tags: ['Python','PyGame'],
      liveLink: 'https://github.com/amifunny/Save-Your-Head',
      codeLink: 'https://github.com/amifunny/Save-Your-Head'
    },
    {
      title: "Save Your Head",
      description: "A Two-Player game with a fight to save their heads."+
        "Players are two cute box animals. Each Player attempt to sit on the other player's head."+
        " They are helped by powerups like 2X Boosters and Bullet shots. Laser and Bombs are also threats to our players.",
      imgUrl: ProjImage1,
      tags: ['Python','PyGame'],
      codeLink: 'https://github.com/amifunny/Save-Your-Head' 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Row className="proj-row">
                  <Col md={8}>

                    {projectsData.map( (project, i) => {
                        return (
                          <Row key={i} className="proj-card">
                            <Col md={4}>
                              <img className="proj-card-img" src={project.imgUrl} />
                            </Col>
                            <Col md={8}>
                              <h5>{project.title}</h5>
                              <p>
                                {project.tags.map( tag => (
                                  <span className="project-tag">{tag}</span>
                                ))}
                              </p>
                              <p>{project.description}</p>
                              <div>
                                {project.liveLink && <a href={project.liveLink}>
                                  <button className="white-theme-button"><span>Live</span></button>
                                </a>}
                                <a href={project.codeLink}>
                                  <button className="white-theme-button"><span>Code</span></button>
                                </a>
                              </div>
                            </Col>
                          </Row>
                        )
                    })}

                  </Col>
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

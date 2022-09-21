import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import calendar from "../assets/img/calendar4-week.svg";


export const Education = () => {

  const educations = [
    {
      'degree': 'B.E. - Electronics and Communication Engineering',
      'school': 'MBM College of Engineering, Jodhpur',
      'calendar': '2018 – 2022',
      'description': 'CGPA - 8.53'
    },
    {
      'degree': 'Class 12th',
      'school': 'Delhi Public School, Jodhpur',
      'calendar': '2017 – 2018',
      'description': 'Score - 95.2%, Given "Pride Student of City" award'
    },
    {
      'degree': 'Class 10th',
      'school': 'Vidhyashram School, Jodhpur',
      'calendar': '2015 – 2016',
      'description': 'CGPA - 10.0'
    }
  ]
    
  return (

    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Education</h2>

                <Row>
                <Col md={12} className="qualification-box-center" >
                    <Row>
                    <Col auto>
                    {educations.map(education => (
                      
                        <div className="qualification-data my-5">
                          <div>
                              <h3 className="qualification-title">{education.degree}</h3>
                              <span className="qualification-subtitle">{education.school}</span>

                              <div className="qualification-calendar">
                                  <img className="qualification-calendar-img" src={calendar} />
                                  {education.calendar}
                              </div>
                              <div className="qualification-desc">
                                  {education.description}
                              </div>
                          </div>
                        </div>
                      
                    ))}
                    </Col>
                    </Row>

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

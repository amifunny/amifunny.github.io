import { useState, useEffect } from "react";
import { Container, Col, Row, Alert } from "react-bootstrap";
import Exp3 from "../assets/work/work_gamersback.jpg";
import Exp2 from "../assets/work/work_spacenos.jpg";
import Exp1 from "../assets/work/work_zhiffy.jpg";

export const Experience = ({ status, message, onValidated }) => {
  
  const experiences=[
    {
      'image': Exp3,
      'company': 'Gamersback',
      'title': 'Backend Developer Intern',
      'calendar': 'May 2021 to Jul 2021',
      'description':[
        "Built Django backend application with 5 member team that supported the E-sports website and set up AWS CodeDeploy Pipeline for it",
        "Conducted technical interviews and recruited new interns to the team",
        "Implemented Postman test cases to validate Restful APIs",
        "Created modules for creating users, tournaments, following users, gaming news and posts, using Django's model, serializer, and views",
        "Utilized MySQL to host database and implemented CRUD operations, pagination, and authentication features"
      ]
    },
    {
      'image': Exp2,
      'company': 'SPACENOS',
      'title': 'Full Stack Developer Intern',
      'calendar': 'Feb 2021 to May 2021',
      'description':[
        "Led a 4 member team of software developer interns to create a web application that allows to share and purchase of documents in cloud storage",
        "Assigned tasks to team members, conducted daily video meetings, kept track of progress and reported to the CEO of the company",
        "Conducted hiring interviews for new interns that applied directly and also campus recruitment from an engineering college",
        "Built a job portal website with front-end made using React, Ant Design, and back-end with Flask, Firebase",
        "Created call interface using Twilio and managed hosting and database on Firebase",
        "Redesigned UI components using Ant Design for 2 websites and implemented Google's OAuth."
      ]
    },
    {
      'image': Exp1,
      'company': 'Zhiffy',
      'title': 'Software Developer Intern',
      'calendar': 'Dec 2020 to Jan 2021',
      'description':[
        "Created front-end for chrome extension using React",
        "Designed UI layout for bottom navigation bar using Figma",
        "Implemented quick page search and price negotiation using Javascript",
        "Created notification popup for new items and recommended similar products",
        "Synced extension with the main website using Flask's Restful APIs",
        "Completed extension in 3 weeks for launch and packaged using Snowpack"
      ]
    }

  ]

  return (
  <section className="experience" id="experience">
      <Container fluid>
        <Row>
          
          <Col><h2>Experience</h2></Col>
          <Col lg={12}>
              <Row className="exp-row">
                <Col xs={12} sm={8} md={8}>
                  
                {experiences.map( exp => ( 

                  <Row className="exp-card my-5">
                    <Col xs={12} sm={4} md={2} className="exp-card-img-col" >
                      <img className="exp-card-img" src={exp.image} />
                    </Col>
                    <Col className="exp-card-body" xs={12} sm={8} md={10}>
                      <h5>{exp.company}</h5>
                      <h6>{exp.title}</h6>
                      <h6>{exp.calendar}</h6>
                      <p>
                        <ul>
                        {
                          exp.description.map( desc => (
                            <><li>{desc}</li></>
                          ))
                        }
                        </ul>
                      </p>
                    </Col>
                  </Row>

                ))}

                </Col>
              </Row>
          </Col>

        </Row>
      </Container>
  </section>
  )
}

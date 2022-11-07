import { Container, Row, Col, Tab, Nav, Button, Carousel, Image, Modal } from "react-bootstrap";
import { useState } from 'react';

import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import piano1 from '../assets/project/piano/1.png'
import piano2 from '../assets/project/piano/2.png'
import piano3 from '../assets/project/piano/3.png'

import horcruxz1 from '../assets/project/horcruxz/1.png'
import horcruxz2 from '../assets/project/horcruxz/2.png'
import horcruxz3 from '../assets/project/horcruxz/3.png'
import horcruxz4 from '../assets/project/horcruxz/4.png'
import horcruxz5 from '../assets/project/horcruxz/5.png'

import likely1 from '../assets/project/likely/1.png'
import likely2 from '../assets/project/likely/2.png'
import likely3 from '../assets/project/likely/3.png'

export const Projects = () => {


  const projectsData = [
    {
      title: "PetSpot",
      description: "Social Network application for Pet Owners to share photos of their adorable pets."+
        " This platform provide features like - Posting photos, Saving good posts, Allow comments,"+
        " Give likes, Follow & Unfollow pet owners, Search for pet owners, View gallery of images"+
        " inspired from Pinterest and Option to update your profile.",
      viewType: "video",
      viewUrls: "https://www.youtube.com/embed/4QMF8BOGYMk",
      tags: ["MongoDB", "Express", "React", "Bootstrap",
             "Redux", "Cloudinary", "Gravatar"],
      liveLink: 'https://pet-spot.herokuapp.com/',
      codeLink: 'https://github.com/amifunny/PetSpot'
    },
    {
      title: "Trend Store",
      description: "An e-commerce platform for latest trending products."+
      " It allows users to View product details, Add to cart, Checkout using PayPal payment,"+
      " View order history, Give review and rating, and Allow option to update profile."+
      " This application also have admin features to Edit product details, Upload images"+
      " and full screen banners, Alter user roles and order status.",
      viewType: "video",
      viewUrls: "https://www.youtube.com/embed/Nl4RQwKG8iA",      
      tags: ["Django", "PostgreSQL", "React", "Redux",
            "PayPal Payments", "AWS S3", "JWT"],
      liveLink: 'https://trendstore-hks.herokuapp.com/',
      codeLink: 'https://github.com/amifunny/trend-store' 
    },
    {
      title: "Pro-Manage",
      description: "An online Kanban Board for managing projects, events"+
      " and product development cycle."+
      " This app allow to Pick icon for board, Select favorites, Edit titles and description,"+
      " Add task titles and description, Drag tasks to different section as work progresses.",
      viewType: "video",
      viewUrls: "https://www.youtube.com/embed/RiR--oqUXSQ",
      tags: ["MongoDB", "Express", "React", "Redux",
             "Material UI", "CKEditor"],
      liveLink: 'https://pro-manage-hks.herokuapp.com/',
      codeLink: 'https://github.com/amifunny/pro-manage' 
    },
    {
      title: "Save Your Head",
      description: "Players are two cute box animals who attempt to sit on other player's head."+
      " They are helped by powerups like 2X Boosters and Bullet shots."+
      " Laser and Bombs are also threats to our players."+
      " Also avoid the thorn at top and hostile speed of platforms increase after every 30 second.",
      viewType: "video",
      viewUrls: "https://www.youtube.com/embed/yIXx_XNTbdA",
      tags: ["PyGame", "Python"],
      codeLink: 'https://github.com/amifunny/Save-Your-Head' 
    },
    {
      title: "CommentX",
      description: "A Chrome extension to read and write comments on any web url."+
      " It is a complete discussion platform in form of extension."+
      " It allows mentions and notifications as well.",
      viewType: "video",
      viewUrls: "https://www.youtube.com/embed/HslU22cjUX8",
      tags: ["React", "Flask", "MySQL", "REST API"],
      codeLink: 'https://github.com/amifunny/CommentX',
    },


    {
      title: "Piano Synth",
      description: "A Bubbly-Virtual Piano with auto-generated key assist using deep learning.",
      viewType: "image",
      viewUrls: [piano1, piano2, piano3],
      tags: ["React", "TensorFlow", "Flask", "HTML", "CSS"],
      codeLink: 'https://github.com/amifunny/Piano-Synth',
    },
    {
      title: "HorcruxZ",
      description: "It's an FPS Zombie Shooting game in a valley surrounded by small hills, waterfalls, and beautiful terrain."+
      " It has guns and random ammo drops to protect the main character and his horcruxes which are big crystals."+
      " Game has a high score system, with scores earned by killing most zombies.",
      viewType: "image",
      viewUrls: [horcruxz1, horcruxz2, horcruxz3, horcruxz4, horcruxz5],
      tags: ["Unity3D", "C#"],
      codeLink: 'https://github.com/amifunny/HorcruxZ'
    },
    {
      title: "Likely",
      description: "Likely is a python application that implements various recommendation methods like"+
      " KNN, Bandit and SVD in plug and play style."+
      " It allow you to like or dislike movie cards and based on feedback give better recommendation on every reload.",
      viewType: "image",
      viewUrls: [likely1, likely2, likely3],
      tags: [ "Flask", "Bootstrap", "Pandas", "NumPy"],
      codeLink: 'https://github.com/amifunny/likely'
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

                    <Row className="proj-card">
                      <Col md={12}  className="text-center">
                      <h6>
                      Note - Live website of projects may take some time to load because of shared instances. Kindly wait for 30 to 60 seconds.
                      </h6>
                      </Col>
                    </Row>

                    {
                      projectsData.map( (project, i) => {
                        return <ProjectCard key={i} project={project} />
                      })
                    }

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

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import {
  SiPython, SiJavascript,
  SiCplusplus, SiJava,
  SiReact, SiJquery, SiBootstrap, SiHtml5, SiCss3,
  SiFlask, SiDjango, SiExpress, SiMongodb, SiMysql, SiFirebase, SiAmazonaws,
  SiTensorflow, SiNumpy, SiPandas, SiScikitlearn,
  SiGooglechrome,
  SiSelenium, SiTwilio, SiPostman, SiDocker, SiGit, SiUnity
} from 'react-icons/si'

import {FaGamepad} from 'react-icons/fa'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = {
    'Programming Languages' : [
      ['Python', <SiPython/>],
      ['JavaScript', <SiJavascript />]
    ],
    'Previously worked with' : [
      ['C++', <SiCplusplus/>],
      ['Java', <SiJava/>]
    ],
    'Front End' : [
      ['React', <SiReact/>],
      ['Jquery', <SiJquery/>],
      ['React', <SiReact/>],
      ['Bootstrap', <SiBootstrap/>],
      ['HTML', <SiHtml5/>],
      ['CSS', <SiCss3/>]
    ],
    'Back End' : [
      ['Flask', <SiFlask/>],
      ['Django', <SiDjango/>],
      ['Express', <SiExpress/>],
      ['MongoDB', <SiMongodb/>],
      ['MySQL', <SiMysql/>], 
      ['Firebase', <SiFirebase/>],
      ['AWS Services', <SiAmazonaws/>]
    ], 
    'Machine Learning' : [
      ['Tensorflow', <SiTensorflow/>],
      ['Numpy', <SiNumpy/>],
      ['Pandas', <SiPandas/>],
      ['Scikit-learn', <SiScikitlearn/>]
    ],
    'Chrome Extension Development' : [
      ['Chrome API', <SiGooglechrome/>]
    ],
    'Other Tools' : [
      ['Selenium', <SiSelenium/>],
      ['Twilio', <SiTwilio/>],
      ['Postman', <SiPostman/>],
      ['Docker', <SiDocker/>],
      ['Git', <SiGit/>],
      ['Pygame', <FaGamepad/>],
      ['Unity3D', <SiUnity/>]
    ]
   
  }


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <div>
                          
                          {Object.entries(skills).map( ([skillHead, skillSection]) => {
                            
                            return (
                              <div className='my-3'>
                                <h4 className="skill-section-head my-3">{skillHead}</h4>
                                {skillSection.map( (skill) => (
                                  <span className="skill-card my-2">
                                    <div>
                                      <span className="skill-card-img">
                                        {skill[1]}
                                      </span>
                                    </div>
                                    <div className="skill-card-title mt-1">
                                      {skill[0]}
                                    </div>
                                  </span>
                                ))}
                              </div>
                            )

                          })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const About = () => {
  
  const aboutLine1 = 'I have passion for coding and creating software. I have been building software for 7 years now. '+
    'Also, I have professional experience in working with 3 emerging startups.'
  const aboutLine2 =  'I love solving problems, brainstroming ideas and coverting them into innovative products. '+
    'Having a sharp eye for product development process helps me prioritize tasks, iterate fast and deliver faster.'

  const resumeLink = 'https://drive.google.com/file/d/1K40E0R3F-cspoegemOoXa4Jrl7LBTXN3/view'

  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <div>
                          <h2>About</h2>
                          <p>{aboutLine1}<br></br><br></br>{aboutLine2}</p>
                        </div>
                        <div>
                          <a href={resumeLink} target="_blank">
                            <button className="download-resume" type="submit">View Resume</button>
                          </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

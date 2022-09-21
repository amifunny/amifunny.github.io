import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {SiGithub, SiAngellist} from 'react-icons/si'

export const Footer = () => {

  const githubLink = 'https://github.com/amifunny/'
  const angelLink = 'https://angel.co/u/hemant-kumar-singh-21'

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*<MailchimpForm />*/}
          <Col size={12} sm={6}>
            <span className='hks-brand-footer'>HKS</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={githubLink}><SiGithub className='social-icon-svg' /></a>
              <a href={angelLink}><SiAngellist className='social-icon-svg' /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

import { Container, Row, Col, Tab, Nav, Button, Carousel, Image, Modal } from "react-bootstrap";
import { useState } from 'react';

export const ImageModal = ({images}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

  <>
  <Carousel indicators={false}>
    {
      images.map( image => (

        <Carousel.Item>
          <Image onClick={handleShow} style={{maxWidth:"500px", maxHeight:"250px"}}
          className="proj-card-img" src={image} />

          <Modal
            size="lg"
            centered
            show={show} 
            onHide={handleClose} 
            animation={false}
            style={{zIndex:99999}}
          >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <Image style={{width:"100%"}} onClick={handleShow} 
              src={image} />
            </Modal.Body>
          </Modal>
        </Carousel.Item>

      ))
    }
  </Carousel>
  </>

  )
}

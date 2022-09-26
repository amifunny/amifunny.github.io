import { Row, Col } from "react-bootstrap";
import { ImageModal } from "./ImageModal";

export const ProjectCard = ({project, key}) => {
  return (

    <Row key={key} className="proj-card">
      <Col md={12}  className="text-center">
      
      {/*--------------------------------------*/}
      {
        (project.viewType=="video")?(
            <iframe width="500" height="250" src={project.viewUrls}
            title={project.title} frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen;" allowfullscreen>
            </iframe>
        ):(
          <ImageModal images={project.viewUrls}/>
        )
      }
      {/*--------------------------------------*/}

      </Col>
      <Col md={12}>
        <h3 className="text-center py-2">{project.title}</h3>
        <p className="text-center">
          {project.tags.map( tag => (
            <span className="project-tag">{tag}</span>
          ))}
        </p>
        <p  className="text-center">{project.description}</p>
        <div className="text-center">
          {project.liveLink && <a href={project.liveLink}>
            <button className="mx-3 white-theme-button"><span>Live</span></button>
          </a>}
          <a href={project.codeLink}>
            <button className="mx-3 white-theme-button"><span>Code</span></button>
          </a>
        </div>
      </Col>
    </Row>

  )
}

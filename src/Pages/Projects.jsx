import { Row, Col, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CardProj from '../Components/Card';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/Projects.json')
        .then(response => response.json())
        .then(data => {
            setProjects(Object.values(data.Projects));
        });
    }, []);
    
    
    
    return (
        <>
            <Container fluid className="text-light">
                <Row className="m-5">
                    <Col className="text-center"><h1 className="display-4 fw-semibold">Projects</h1></Col>
                </Row>
                <Row className="m-5">
                    <Col className="border-bottom"></Col>
                </Row>
                <Row className='m-5'>
                    {
                        (projects && projects.length > 0) ? (
                            projects.map((project, i) => (
                            <CardProj key={i} name={project.name} date={project.date} desc={project.desc} 
                            link={project.link} />
                        ))
                        ) : 
                        (
                            <Col className="text-center"><h1>NO PROJECTS</h1></Col>
                        )
                    }
                </Row>
            </Container>
        </>
    )
};

export default Projects;

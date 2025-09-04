import { Row, Col, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Projects = () => {
    const [names, setNames] = useState([]);
    const [dates, setDates] = useState([]);
    const [descs, setDescs] = useState([]);


    useEffect(() => {
        fetch('/Projects.json')
        .then(response => response.json())
        .then(data => {
            const projects = Object.values(data.Projects);
            setNames(projects.map(project => project.name));
            setDates(projects.map(project => project.date));
            setDescs(projects.map(project => project.desc)); 
        });
    }, []);
    
    
    
    return (
        <>
            <Container fluid className="text-light">
                <Row>
                    <Col><h1>{names[0] || "Loading..."}</h1></Col>
                </Row>
            </Container>
        </>
    )
};

export default Projects;

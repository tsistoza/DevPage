import { Row, Col, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CardProj from '../Components/Card';

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
                <Row className="m-5">
                    <Col className="text-center"><h1 className="display-4 fw-semibold">Projects</h1></Col>
                </Row>
                <Row className="m-5">
                    <Col className="border-bottom"></Col>
                </Row>
                <Row className='m-5'>
                    {
                        names.map((name, i) => (
                            <CardProj key={i} name={name} date={dates[i]} desc={descs[i]} link={"/"} />
                        ))
                    }
                </Row>
            </Container>
        </>
    )
};

export default Projects;

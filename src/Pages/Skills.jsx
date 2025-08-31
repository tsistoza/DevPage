import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ListGroup } from 'react-bootstrap';
import { GearFill, PlusSquareDotted } from 'react-bootstrap-icons';

const Skills = () => {
    return (
        <>
            <Container fluid className="text-light" style={ {height: '100%'} }>
                <Row className="d-flex p-5 m-0">
                    <Col className="d-flex justify-content-center">
                        <Col className="d-flex col-auto align-items-center pe-1"><GearFill size={30} /></Col>
                        <Col className="d-flex col-auto">
                            <h1>Skills</h1>
                        </Col>
                    </Col>
                </Row>
                
                <Row className="d-flex pb-2 ps-5 pe-5 m-0">
                    <hr style={ {height: '5px', border: 'none', backgroundColor: '#fff' } }/>
                </Row>

                <Row className="d-flex p-5 m-0">
                    <Col>
                        <h3 className="fw-semibold">Programming Languages</h3>
                    </Col>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>C++</ListGroup.Item>
                            <ListGroup.Item>C</ListGroup.Item>
                            <ListGroup.Item>Python</ListGroup.Item>
                            <ListGroup.Item>Assembly x86/MIPS</ListGroup.Item>
                            <ListGroup.Item>C#</ListGroup.Item>
                            <ListGroup.Item>Javascript</ListGroup.Item>
                            <ListGroup.Item>SQL</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Skills;

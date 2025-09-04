import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Landing = () => {
    return (
        <>
            <Container fluid className="text-light">
                <Row className="w-100 m-0">
                    <Col className="text-center"><h1 className="display-1 fw-semibold">Welcome</h1></Col>
                </Row>
                <Row className="w-100 m-0">
                    <Col className="text-center">
                        <p>This is my homepage. It contains my experiences, and journeys throughout my whole career.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Landing;

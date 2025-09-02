import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Landing = () => {
    return (
        <>
            <Container fluid className="d-flex align-items-center text-light" style={ {height: '100%'} }>
                <Row className="m-0 w-100">
                    <Col className="text-center"><h1>Welcome</h1></Col>
                </Row>
            </Container>
        </>
    )
};

export default Landing;

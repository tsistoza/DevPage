import { Row, Col } from 'react-bootstrap';
import { EmojiFrownFill } from 'react-bootstrap-icons';

const NotFound = () => {
    return (
        <>
            <Row>
                <Col className="d-flex justify-content-center text-light">
                    <EmojiFrownFill size={100} />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center text-light">
                    <h1 className="display-1 text-light">404</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center text-light">
                    <h6 className="text-white">The page requested could not be found.</h6>
                </Col>
            </Row>
        </>
    )
};

export default NotFound;

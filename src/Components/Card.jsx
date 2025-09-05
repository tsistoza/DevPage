import { Row, Col, Container, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const CardProj = ({ name, date, desc, link }) => {
    return (
        <>
            <Col className="col-4 p-5">
                <Card bg="dark" text='light' border='info'>
                    <Card.Header>
                        <Card.Title><h3 className="fw-semibold">{name}</h3></Card.Title>
                        <Card.Subtitle>
                            <small>Started: {date}</small>
                        </Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text><small>{desc}</small></Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href={link}>Link</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}

export default CardProj;

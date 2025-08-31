import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { ListGroup } from 'react-bootstrap';
import { GearFill, Plus, PlusSquareDotted } from 'react-bootstrap-icons';

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

                    <Col className="d-flex border-end pe-5 align-items-center justify-content-end">
                        <h3 className="fw-semibold text-end">Programming Languages</h3>
                    </Col>

                    <Col className="ps-5">
                        <Table striped variant='dark'>
                            <thead>
                                <tr>
                                    <th>Favorite</th>
                                    <th>Language</th>
                                    <th>Started</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 (tied)</td>
                                    <td>C++</td>
                                    <td>2020</td>
                                </tr>
                                <tr>
                                    <td>1 (tied)</td>
                                    <td>C#</td>
                                    <td>2023</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>C</td>
                                    <td>2019</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Javascript</td>
                                    <td>2023</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Python</td>
                                    <td>2020</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>SQL</td>
                                    <td>2024</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Assembly x86/MIPS</td>
                                    <td>2021</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Skills;

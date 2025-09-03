import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { GearFill, PlusSquareDotted, DashSquareDotted } from 'react-bootstrap-icons';

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

                <Row className="d-flex ps-5 pe-5 pt-5 m-0">

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

                <Row>
                    <Col className="border-end"></Col>
                    <Col className="invisible"><p>EMPTY</p></Col>
                </Row>

                <Row className="d-flex ps-5 pe-5 m-0">
                    <Col className="d-flex border-end pe-5 align-items-center justify-content-end">
                        <h3 className="fw-semibold text-end">Web Devolopment</h3>
                    </Col>
                    <Col className="ps-5">
                        <Row className='m-0'>
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">FrontEnd</h5>
                            </Col>
                        </Row>
                        <Row className='m-0 ps-4'>
                            <Col className="d-flex col-auto align-items-center"><DashSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5>HTML, CSS, React Library, Bootstrap, React-Bootstrap</h5>
                            </Col>
                        </Row>

                        <Row className="m-0">
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">BackEnd</h5>
                            </Col>
                        </Row>
                        <Row className='m-0 ps-4'>
                            <Col className="d-flex col-auto align-items-center"><DashSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5>MeteorJS, APIs</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col className="border-end"></Col>
                    <Col className="invisible"><p>EMPTY</p></Col>
                </Row>

                <Row className="d-flex ps-5 pe-5 m-0">
                    <Col className="d-flex border-end pe-5 align-items-center justify-content-end">
                        <h3 className="fw-semibold text-end">Game Development</h3>
                    </Col>
                    <Col className="ps-5">
                        <Row className="m-0">
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">Game Engines:</h5>
                            </Col>
                        </Row>
                        <Row className='m-0 ps-4'>
                            <Col className="d-flex col-auto align-items-center"><DashSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5>Unity, UnrealEngine (willing to learn if needed)</h5>
                            </Col>
                        </Row>
                        <Row className="m-0">
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">Shaders HLSL</h5>
                            </Col>
                        </Row>
                        <Row className="m-0">
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">Blender:</h5>
                            </Col>
                        </Row>
                        <Row className='m-0 ps-4'>
                            <Col className="d-flex col-auto align-items-center"><DashSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5>Modeling, Shading, Animation</h5>
                            </Col>
                        </Row>
                        <Row className="m-0">
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">GIMP Image Editor</h5>
                            </Col>
                        </Row>
                        <Row className="m-0">
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">Krita</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col className="border-end"></Col>
                    <Col className="invisible"><p>EMPTY</p></Col>
                </Row>

                <Row className="d-flex ps-5 pe-5 m-0">
                    <Col className="d-flex border-end pe-5 align-items-center justify-content-end">
                        <h3 className="fw-semibold text-end">Other</h3>
                    </Col>
                    <Col className="ps-5">
                        <Row className="m-0">
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">Reverse Engineering - Ghidra</h5>
                            </Col>
                        </Row>
                        <Row className="m-0">
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">HDL - System Verilog/Verilog - FPGA</h5>
                            </Col>
                        </Row>
                        <Row className="m-0">
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">AI/ML - Pytorch</h5>
                            </Col>
                        </Row>
                        <Row className="m-0">
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">Hacking - Hex Editor/GDB Debugger</h5>
                            </Col>
                        </Row>
                        <Row className="m-0">
                            <Col className="d-flex col-auto align-items-center"><PlusSquareDotted /></Col>
                            <Col className="d-flex col-auto">
                                <h5 className="fw-semibold">Bash Shell/Powershell</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Skills;

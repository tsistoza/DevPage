import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CCircle, PhoneFill, Link, Linkedin, Github, EnvelopeAtFill, Controller } from 'react-bootstrap-icons'
import './Footer.css'

const FooterComp = () => {
    return (
        <>
            <Container fluid className="m-0 p-0 bg-info" style={{ height: '70px' }}>

                <Row className="d-flex flex-row m-0 justify-content-start align-content-center" style={ {height: '40%'}}>
                    <Col className="d-flex col-2 align-items-center">
                        <Col className="d-flex col-auto align-items-center pe-1"><PhoneFill size={14}/></Col>
                        <Col className="d-flex col-auto align-items-center">
                            <p className="mb-0 fs-6 fw-semibold">Contacts</p>
                       </Col>
                    </Col>
                    <Col className="d-flex col-3 align-items-center">
                        <Col className="d-flex col-auto align-items-center pe-1"><Link size={14}/></Col>
                        <Col className="d-flex col-auto align-items-center pe-1">
                            <p className="mb-0 fs-6 fw-semibold">Links</p>
                        </Col>
                    </Col>
                </Row>

                <Row className="d-flex flex-row m-0">
                    <Col className="d-flex col-2 align-items-center">
                        <Col className="d-flex col-auto align-items-center pe-2"><EnvelopeAtFill size={14} /></Col>
                        <Col classname="d-flex col-auto align-items-center">
                            <p className="mb-0" style={ {fontSize: '12px'} }>vinton.dev@gmail.com</p>
                        </Col>
                    </Col>
                    <Col className="d-flex col-2 align-items-center">
                        <Col className="d-flex col-auto align-items-center pe-2">
                            <a id="anchor-override" href="https://github.com/tsistoza"><Github size={20}/></a>
                        </Col>
                        <Col className="d-flex col-auto align-items-center pe-2">
                            <a id="anchor-override" href="https://www.linkedin.com/in/vinton-sistoza-1174a2228/"><Linkedin size={20}/></a>
                        </Col>
                        <Col className="d-flex col-auto align-items-center pe-2">
                            <a id="anchor-override" href="https://silenceisdev.itch.io/"><Controller size={20}/></a>
                        </Col>
                    </Col>
                </Row>

                <Row className="d-flex flex-row m-0 justify-content-end">
                    <Col className="d-flex col-auto align-items-center pe-1"><CCircle size={12}/></Col>
                    <Col className="d-flex col-auto align-items-center ps-0">
                        <p className="mb-0" style={ {fontSize: '12px'} }>SilenceIsDev</p>
                    </Col>
                </Row>

            </Container>
        </>
    )
};

export default FooterComp

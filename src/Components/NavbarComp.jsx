import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { House } from 'react-bootstrap-icons';

const NavbarComponent = () => {
    return (
        <>
            <Container fluid style={ { height: '10%' } }>
                <Navbar className="center" bg="info" data-bs-theme="info" sticky="top" style={{ borderRadius: '20px',   width: '100%' }}>
                    <Container fluid>
                        <Nav className="me-auto p-1">
                            <Nav.Link href="/" className="pe-4"><House size={30}/></Nav.Link>
                            <Nav.Link href="/about" className="fw-semibold pe-4">About</Nav.Link>
                            <Nav.Link href="/skills" className="fw-semibold pe-4">Skills</Nav.Link>
                            <Nav.Link href="/" className="fw-semibold pe-4">Projects</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
};

export default NavbarComponent;

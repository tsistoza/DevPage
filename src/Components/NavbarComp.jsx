import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import { House } from 'react-bootstrap-icons';

const NavbarComponent = () => {
    return (
        <>
            <Container fluid style={ { height: '10%' } }>
                <Navbar className="center" bg="info" data-bs-theme="info" sticky="top" style={{ borderRadius: '20px',   width: '100%' }}>
                    <Container fluid>
                        <Nav className="me-auto p-1">
                            <Nav.Link as={Link} to="/" className="pe-4"><House size={30}/></Nav.Link>
                            <Nav.Link as={Link} to="/about" className="fw-semibold pe-4">About</Nav.Link>
                            <Nav.Link as={Link} to="/skills" className="fw-semibold pe-4">Skills</Nav.Link>
                            <Nav.Link as={Link} to="/projects" className="fw-semibold pe-4">Projects</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
};

export default NavbarComponent;

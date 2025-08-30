import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavbarComponent = () => {
    return (
        <>
            <Container fluid style={ { height: '20%' } }>
                <Navbar className="center" bg="info" data-bs-theme="info" sticky="top" style={{ borderRadius: '20px',   width: '100%' }}>
                    <Container fluid>
                        <Nav className="me-auto p-1">
                            <Nav.Link href="/">About</Nav.Link>
                            <Nav.Link href="/skills">CV</Nav.Link>
                            <Nav.Link href="#home">Projects</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
};

export default NavbarComponent;

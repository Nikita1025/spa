import style from './Header.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {

    return (
        <>
            {[false].map((expand) => (
                <Navbar expand={expand} className={style.container}>
                    <Container fluid>
                        <Navbar.Brand>Navbar Offcanvas</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/">Post list</Nav.Link>
                                    <Nav.Link href="/about">About me</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Header;

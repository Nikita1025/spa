import { ReactElement } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import style from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = (): ReactElement => {
  const navigate = useNavigate();
  const onClickPost = (): void => {
    navigate('/');
  };
  const onClickAbout = (): void => {
    navigate('/about');
  };
  return (
    <>
      {[false].map((expand, index) => (
        <Navbar key={index} expand={expand} className={style.container}>
          <Container fluid>
            <Navbar.Brand>Appendix posts</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={onClickPost}>Post list</Nav.Link>
                  <Nav.Link onClick={onClickAbout}>About me</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./App.css"
function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Real Marketing</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About us">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/SEO">
              SEO
            </Nav.Link>
            <Nav.Link as={Link} to="/SMM">
              SMM
            </Nav.Link>
            <Nav.Link as={Link} to="/DM">
              DM
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact-Us">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;

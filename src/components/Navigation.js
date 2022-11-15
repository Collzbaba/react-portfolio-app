import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../style/Navigation.css';

function Navigation({ setCurrentPage }) {
  return (
    <Navbar variant='dark' collapseOnSelect expand="lg" className="bg-dark text-white">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="color-white"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
            className="text-white"
              onClick={() => {
                setCurrentPage("About");
              }}
              href="#about"
            >
              About
            </Nav.Link>
            <Nav.Link
            className="text-white"
              onClick={() => {
                setCurrentPage("Project");
              }}
              href="#portfolio"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
            className="text-white"
              onClick={() => {
                setCurrentPage("Contact");
              }}
              href="#contact"
            >
              Contact
            </Nav.Link>
            <Nav.Link
            className="text-white"
              onClick={() => {
                setCurrentPage("Resume");
              }}
              href="#resume"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

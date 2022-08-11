import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../img/logo.svg";
import styles from "../navbar/navbar.module.css";
function NavScrollExample() {
  return (
    <Navbar bg="light" className={styles.navbar_container} expand="lg">
      <Container className={styles.navbar_container2}>
        <Navbar.Brand href="#">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>
            <Nav.Link className={`p-3 ${styles.navbar_navlink}`} href="#action1">Home</Nav.Link>
            <Nav.Link className={`p-3 ${styles.navbar_navlink}`} href="#action2">Explore</Nav.Link>
            <Nav.Link className={`p-3 ${styles.navbar_navlink}`} href="#action2">Jobs</Nav.Link>
            <Nav.Link className={`p-3 ${styles.navbar_navlink}`} href="#action2">About</Nav.Link>
            <Nav.Link className={`p-3 ${styles.navbar_navlink}`} href="#action2">Help</Nav.Link>
            <button variant="" className={`${styles.navbar_button} rounded`}>Search</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

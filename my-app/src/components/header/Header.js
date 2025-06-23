import logo from "../../images/IMG_20250527_174328_473_1.png"
import "./Header.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';


function HeaderBar() {
    return (
    <Navbar expand="lg" className="bg-dark px-5" variant="dark">
      <Container>
        <Navbar.Brand href="/">
            <img className="img-logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><i class="bi bi-search"></i></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default HeaderBar
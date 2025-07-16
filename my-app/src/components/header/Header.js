import logo from "../../images/IMG_20250527_174328_473_1.png"
import "./Header.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';


function HeaderBar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [query, setQuery] = useState("")
  const navigate = useNavigate();

  function handleOnSearch(e) {
    if (e.key === "Enter") {
      e.preventDefault()
      navigate(`/products?search=${encodeURIComponent(query)}`)
    }
  }

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
          <Nav.Link onClick={handleShow}>Categories</Nav.Link>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleOnSearch}
          />
          <Button variant="outline-success"><i className="bi bi-search"></i></Button> 
        </Form>
        <Link to="/cart" className="mx-5" variant="outline-success"><i class="bi bi-cart"></i></Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default HeaderBar
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
import CartModal from "../cart/Cart";

function HeaderBar() {

  const [modalShow, setModalShow] = useState(false);

  const [show, setShow] = useState(false);

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
      <Link to="/">
      <Navbar.Brand href="/">
          <img className="img-logo" src={logo} alt="" />
      </Navbar.Brand>
      </Link>
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link className="link-dec" to="/"><Nav.Link href="/">Home</Nav.Link></Link>
          <Link className="link-dec" to="/products"><Nav.Link href="/products">Products</Nav.Link></Link>
          <Nav.Link onClick={() => setShow(true)}>Categories</Nav.Link>

          <Offcanvas show={show} onHide={() => setShow(false)}>
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
        {/* <Link to="/cart" className="mx-3" variant="outline-success"><Button variant="outline-success"><i class="bi bi-cart"></i></Button></Link> */}
        <Button variant="outline-success mx-3" onClick={() => setModalShow(true)}><i class="bi bi-cart"></i></Button>

        <CartModal
          show={modalShow}
          onHide={() => setModalShow(false)} 
        />
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default HeaderBar
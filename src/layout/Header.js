import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CiUser } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import "../App.css";

function Header() {
  return (
    <div className="">
      <Navbar expand="lg" className="bg-body-dark navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="container">
              <div className="row">
                <div className="col-10 d-flex justify-content-center align-items-center">
                  <Nav
                    className=" my-2 my-lg-0 d-flex  gap-4"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    {/* <div className="d-flex gap-4">
                      <Nav.Link href="#action1">
                        <span className="navbar-text">Home</span>
                      </Nav.Link>
                      <Nav.Link href="#action2">
                        <span className="navbar-text">Link</span>
                      </Nav.Link>
                    </div> */}
                    <div className="d-flex flex-row search-bar">
                      <Form className="d-flex">
                        <Form.Control
                          type="search"
                          placeholder="Search..."
                          className="me-2 custom-search-bar"
                          aria-label="Search"
                        />
                      </Form>
                    </div>
                  </Nav>
                </div>
                <div className="col-2  d-flex user-container">
                  <div className=" row d-flex ">
                    <CiUser className="user-icon" />
                    <div className=" row-2 d-flex ">
                      <p className="d-block text-white p-0">Login</p>
                    </div>
                  </div>
                  <div className=" center  col-6 d-flex ">
                    <MdAddShoppingCart className="shopping-cart" />
                  </div>
                </div>
              </div>
              <div className="row pt-3 align-item-center"></div>
              <div className="d-flex gap-4">
                <Nav.Link href="#action1">
                  <span className="navbar-text text-white">Home</span>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <span className="navbar-text text-white">Link</span>
                </Nav.Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

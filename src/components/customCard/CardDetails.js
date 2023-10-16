import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CustomModal from "../Customodal/CustomModal"; // Import the ProductModal component

function CardDetails() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { displayProduct, setDisplayProduct } = useState({});

  useEffect(() => {
    setDisplayProduct(product);
  }, [product, dispatch]);

  return (
    <Container>
      {product.map((product, i) => (
        <Row>
          <Col>
            <img src={product?.thumbnail} width={"400px"} alt={product.title} />
          </Col>
          <Col>
            <h3>Title</h3>
            <h5>Price: ${product.price}</h5>
            <p>Description: {product.description}</p>
            <h5>Quantity</h5>
            <Row>
              <Col sm={3}>
                <input type="number" size={4} />
              </Col>
              <Col sm={9}>
                <Button variant="primary">VIEW DETAILS</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default CardDetails;

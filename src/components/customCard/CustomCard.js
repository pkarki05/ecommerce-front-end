import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../../redux/product/productAction";
import { setModalShow } from "../../redux/systemState/SystemSlice";

function CustomCard() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(productList);
  }, [productList, dispatch]);

  const handleOnClick = () => {
    dispatch(setModalShow(true));
  };
  return (
    <div className="d-flex f-wrap p-5 flex-nowrap gap-5">
      {displayList.map((product, i) => (
        <Card className="p-0" key={i} style={{ width: "22rem" }}>
          <div className="image-container">
            <img src={product.thumbnail} width="200px" height="200px" />
            <div className="text p-0 align-items-center">
              <Button onClick={() => handleOnClick()}>VIEW DETAILS</Button>
            </div>
          </div>

          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <p>Price:${product.price}</p>
            </Card.Text>
            <Button variant="primary">Add To cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CustomCard;

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModalShow } from "../../redux/systemState/SystemSlice";

function CustomModal({ children }) {
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => state.system);
  return (
    // <Modal
    //   show={modalShow}
    //   onHide={() => dispatch(setModalShow(false))}
    //   size="lg"
    // >
    //   <Modal.Header closeButton></Modal.Header>
    //   <Modal.Title>Hello</Modal.Title>

    //   <Modal.Body>{children}</Modal.Body>
    // </Modal>

    <Modal
      show={modalShow}
      onHide={() => dispatch(setModalShow(false))}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

export default CustomModal;

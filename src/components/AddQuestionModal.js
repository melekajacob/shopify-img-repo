import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./AddQuestonModal.module.css";
function AddQuestionModal(props) {
  const handleAddQuestion = (event) => {
    event.preventDefault();
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      className={styles.modal}
      size="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title>Adding Question</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Row>
            <Col className="text-center">
              <h4>Question</h4>
              <button className={styles.imgInput}>
                <FaPlusCircle />
              </button>
            </Col>
            <Col className="text-center">
              <h4>Solution</h4>
              <button className={styles.imgInput}>
                <FaPlusCircle />
              </button>
            </Col>
          </Row>

          <div className="mt-2">
            <h4>Question Metadata</h4>
            <Form.Control placeholder="Name" className={styles.roundedInput} />

            <Form.Control placeholder="Class" className={styles.roundedInput} />

            <Form.Control
              placeholder="Instructor"
              className={styles.roundedInput}
            />

            <Form.Control placeholder="Unit" className={styles.roundedInput} />
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="danger" onClick={props.handleClose}>
            Discard
          </Button>
          <Button variant="success" onClick={handleAddQuestion}>
            Add Question
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddQuestionModal;

import ClosableModal from "../../ClosableModal";
import { Button, Modal, Form } from "react-bootstrap";

import styles from "./QuestionMetadataForm.module.css";

export default function QuestionMetadataForm(props) {
  return (
    <ClosableModal
      show={props.show}
      handleClose={props.handleClose}
      includeAnimation={false}
    >
      <Modal.Header>
        <Modal.Title className="d-flex align-items-center">
          <img
            style={{ objectFit: "cover" }}
            src={process.env.PUBLIC_URL + "/number-2.png"}
            alt="logo"
          />
          Add Question Info
        </Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <div className="mt-2">
            <Form.Control
              onChange={props.inputChange("name")}
              placeholder="Name"
              className={styles.roundedInput}
            />

            <Form.Control
              onChange={props.inputChange("class")}
              placeholder="Class"
              className={styles.roundedInput}
            />

            <Form.Control
              onChange={props.inputChange("instructor")}
              placeholder="Instructor"
              className={styles.roundedInput}
            />

            <Form.Control
              onChange={props.inputChange("unit")}
              placeholder="Unit"
              className={styles.roundedInput}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="warning" onClick={props.prevStep}>
            Back
          </Button>
          <Button variant="success" onClick={props.handleAddQuestion}>
            Add Question
          </Button>
        </Modal.Footer>
      </Form>
    </ClosableModal>
  );
}

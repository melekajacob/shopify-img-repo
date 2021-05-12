import ClosableModal from "../../utils/ClosableModal";
import { Button, Modal, Form } from "react-bootstrap";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaDownload,
} from "react-icons/fa";

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
              className="roundedInput"
            />

            <Form.Control
              onChange={props.inputChange("course")}
              placeholder="Course"
              className="roundedInput"
            />

            <Form.Control
              onChange={props.inputChange("instructor")}
              placeholder="Instructor"
              className="roundedInput"
            />

            <Form.Control
              onChange={props.inputChange("unit")}
              placeholder="Unit"
              className="roundedInput"
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="outline-dark" size="lg" onClick={props.prevStep}>
            <FaArrowAltCircleLeft className="mb-1" /> &nbsp;Back
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={props.handleAddQuestion}
          >
            <FaDownload className="mb-1" />
            &nbsp;Add Question
          </Button>
        </Modal.Footer>
      </Form>
    </ClosableModal>
  );
}

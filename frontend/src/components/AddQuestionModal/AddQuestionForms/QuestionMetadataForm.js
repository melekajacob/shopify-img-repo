import ClosableModal from "../../ClosableModal";
import { Button, Modal, Form } from "react-bootstrap";

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
              onChange={props.inputChange("class")}
              placeholder="Class"
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

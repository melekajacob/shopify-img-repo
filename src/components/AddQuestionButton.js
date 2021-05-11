import { Button } from "react-bootstrap";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import AddQuestionModal from "./AddQuestionModal/AddQuestionModal";

export default function AddQuestionButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="px-5"
        variant="outline-success"
        size="lg"
        block
      >
        <FaPlusCircle /> Add Question
      </Button>

      <AddQuestionModal show={show} handleClose={handleClose} />
    </div>
  );
}

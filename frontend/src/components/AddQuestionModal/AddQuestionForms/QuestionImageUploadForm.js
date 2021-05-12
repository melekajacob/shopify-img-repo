import ClosableModal from "../../utils/ClosableModal";
import { FaPlusCircle } from "react-icons/fa";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import styles from "./QuestionImageUploadForm.module.css";
import { useState, useRef, useEffect } from "react";
import { Toast } from "../../utils/notifications";
import { FaArrowAltCircleRight, FaTrashAlt } from "react-icons/fa";

// TODO: Figure out animation
export default function QuestionImageUploadForm(props) {
  const [questionImage, setQuestionImage] = useState(props.questionImage);
  const [questionPreview, setQuestionPreview] = useState(null);
  const [solutionImage, setSolutionImage] = useState(props.solutionImage);
  const [solutionPreview, setSolutionPreview] = useState(null);

  const questionInputRef = useRef();
  const solutionInputRef = useRef();

  const handleNext = (e) => {
    e.preventDefault();

    if (questionImage != null) {
      props.nextStep();
    } else {
      Toast(
        "Error!",
        "Need to include atleast an image of a question",
        "danger"
      );
    }
  };

  // TODO: Add better error checking
  const addImage = (type) => (e) => {
    const file = e.target.files[0];

    if (file) {
      props.addImageData(type, file);

      if (type === "question") {
        setQuestionImage(file);
      } else if (type === "solution") {
        setSolutionImage(file);
      }
    }
  };

  const discard = (e) => {
    setQuestionPreview(null);
    setSolutionPreview(null);
    props.discardData(e);
  };

  useEffect(() => {
    if (questionImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setQuestionPreview(reader.result);
      };
      reader.readAsDataURL(questionImage);
    } else {
      setQuestionPreview(null);
    }
  }, [questionImage]);

  useEffect(() => {
    if (solutionImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSolutionPreview(reader.result);
      };
      reader.readAsDataURL(solutionImage);
    } else {
      setSolutionPreview(null);
    }
  }, [solutionImage]);

  const handleImageClick = (type) => (e) => {
    e.preventDefault();
    if (type === "question") {
      questionInputRef.current.click();
    } else if (type === "solution") {
      solutionInputRef.current.click();
    }
  };

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
            src={process.env.PUBLIC_URL + "/number-1.png"}
            alt="logo"
          />
          Add Question
        </Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Row>
            <Col className="text-center">
              <h4>Question</h4>
              {questionPreview ? (
                <img
                  src={questionPreview}
                  onClick={handleImageClick("question")}
                  className={styles.preview}
                  alt="Uploaded Question"
                ></img>
              ) : (
                <button
                  className={styles.imgInput}
                  onClick={handleImageClick("question")}
                >
                  <FaPlusCircle />
                </button>
              )}

              <input
                accept="image/png,image/jpeg"
                type="file"
                style={{ display: "none" }}
                ref={questionInputRef}
                onChange={addImage("question")}
              />
            </Col>

            <Col className="text-center">
              <h4>Solution</h4>
              {solutionPreview ? (
                <img
                  src={solutionPreview}
                  onClick={handleImageClick("solution")}
                  className={styles.preview}
                  alt="Uploaded Solution"
                ></img>
              ) : (
                <button
                  className={styles.imgInput}
                  onClick={handleImageClick("solution")}
                >
                  <FaPlusCircle />
                </button>
              )}

              <input
                accept="image/png,image/jpeg"
                type="file"
                style={{ display: "none" }}
                ref={solutionInputRef}
                onChange={addImage("solution")}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="outline-danger" size="lg" onClick={discard}>
            <FaTrashAlt />
            &nbsp;Discard
          </Button>
          <Button variant="outline-success" size="lg" onClick={handleNext}>
            Next &nbsp;
            <FaArrowAltCircleRight className="mb-1" />
          </Button>
        </Modal.Footer>
      </Form>
    </ClosableModal>
  );
}

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import QuestionMetadataForm from "./AddQuestionForms/QuestionMetadataForm";
import QuestionImageUploadForm from "./AddQuestionForms/QuestionImageUploadForm";

// TODO: Improve the setting of question and solution images (really inefficient rn)
export default function AddQuestionModal(props) {
  const defaultFormData = {
    step: 0,
    question: null,
    solution: null,
    name: null,
    class: null,
    instructor: null,
    unit: null,
  };

  const [formData, setFormData] = useState(defaultFormData);

  const addImageData = (input, data) => {
    setFormData({ ...formData, [input]: data });
  };

  // Change component data when any form
  const inputChange = (input) => (event) => {
    setFormData({ ...formData, [input]: event.target.value });
  };

  // Discard all
  const discardData = (event) => {
    event.preventDefault();
    setFormData(defaultFormData);
    props.handleClose();
  };

  const handleAddQuestion = (event) => {
    event.preventDefault();

    // Send form data to server, just log for now
    console.log(formData);
  };

  const nextStep = () => {
    setFormData({ ...formData, step: formData.step + 1 });
  };

  const prevStep = () => {
    setFormData({ ...formData, step: formData.step - 1 });
  };

  switch (formData.step) {
    case 0:
      return (
        <QuestionImageUploadForm
          show={props.show}
          inputChange={inputChange}
          handleClose={props.handleClose}
          discardData={discardData}
          nextStep={nextStep}
          addImageData={addImageData}
          questionImage={formData.question}
          solutionImage={formData.solution}
        />
      );
    case 1:
      return (
        <QuestionMetadataForm
          show={props.show}
          inputChange={inputChange}
          handleClose={props.handleClose}
          prevStep={prevStep}
          handleAddQuestion={handleAddQuestion}
        />
      );
    default:
      return <div>Error occurred</div>;
  }
}

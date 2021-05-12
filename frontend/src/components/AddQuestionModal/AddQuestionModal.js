import { useState } from "react";
import { API_HOST, API_URL, ROUTES } from "../../configs/aws";
import { fileToBase64, replacePathParams } from "../../utils";
import * as aws4 from "aws4";
import * as axios from "axios";
import { Auth } from "aws-amplify";
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
    course: null,
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

  const handleAddQuestion = async (event) => {
    event.preventDefault();

    console.log(formData);
    const user = await Auth.currentAuthenticatedUser();
    const path = replacePathParams(ROUTES.ADD_QUESTION, {
      user_id: user.username,
    });

    console.log(JSON.stringify(user, null, 2));

    let payload = {
      question: {
        file: await fileToBase64(formData.question),
        fileType: formData.question?.type ?? null,
      },
      solution: {
        file: await fileToBase64(formData.solution),
        fileType: formData.solution?.type ?? null,
      },
      name: formData.name,
      course: formData.course,
      instrutctor: formData.instructor,
      unit: formData.unit,
    };

    let config = {
      headers: {
        Authorization: user.signInUserSession.idToken.jwtToken,
        "content-type": "application/json",
      },
    };

    await axios.post(API_URL + path, payload, config);
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

import { FaEye, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { replacePathParams } from "../utils";
import ImageViewer from "react-simple-image-viewer";
import { Toast } from "./utils/notifications";
import { ROUTES } from "../configs/aws";
import styles from "./QuestionCard.module.css";

function QuestionCard(props) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = () => {
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  const handleDelete = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const path = replacePathParams(ROUTES.DELETE_QUESTION, {
      user_id: user.username,
      question_id: props.questionId,
    });

    const config = {
      headers: {
        Authorization: user.signInUserSession.idToken.jwtToken,
        "content-type": "application/json",
      },
    };

    console.log(path);
    try {
      await axios.delete(path, config);
    } catch (e) {
      Toast("Error!", "Failed to Delete Question/Solution", "danger");
    }

    props.getQuestionData();
  };

  return (
    <div className={styles.card + " w-100 card shadow-sm text-center mb-3"}>
      <div className="overflow">
        <img className="card-img-top" src={props.questionThumbnailUrl}></img>
      </div>

      <div className="card-body text-dark">
        <h4 className="card-title">{props.questionName}</h4>

        <a
          href="#"
          className="btn btn-outline-success m-1"
          onClick={openImageViewer}
        >
          <FaEye />
          &nbsp;View Question
        </a>

        <a
          href="#"
          className="btn btn-outline-danger m-1"
          onClick={handleDelete}
        >
          <FaTrashAlt />
          &nbsp;Delete Question
        </a>
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={[props.questionUrl, props.solutionUrl]}
          currentIndex={0}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}

export default QuestionCard;

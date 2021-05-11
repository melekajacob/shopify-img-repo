import { FaEye, FaTrashAlt } from "react-icons/fa";
import cx from "classnames";
import { useState } from "react";

import ImageViewer from "react-simple-image-viewer";
import styles from "./QuestionCard.module.css";

function QuestionCard(props) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = () => {
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <div className={styles.card + " card shadow-sm text-center mb-3"}>
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

        <a href="#" className="btn btn-outline-danger m-1">
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

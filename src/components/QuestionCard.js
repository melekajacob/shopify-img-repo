import { FaEye, FaTrashAlt } from "react-icons/fa";

export default function QuestionCard(props) {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img className="card-img-top" src={props.questionThumbnailUrl}></img>
      </div>

      <div className="card-body text-dark">
        <h4 className="card-title">{props.questionName}</h4>

        <a href="#" className="btn btn-outline-success mb-1">
          <FaEye />
          &nbsp;View Question
        </a>

        <a href="#" className="btn btn-outline-danger">
          <FaTrashAlt />
          &nbsp;Delete Question
        </a>
      </div>
    </div>
  );
}

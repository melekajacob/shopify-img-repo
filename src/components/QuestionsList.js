import QuestionCard from "./QuestionCard";

const DATA = [
  {
    questionName: "Q1 H1",
    course: "Math 239",
    Unit: "1",
    instructor: "Saknini",
    questionUrl: "https://wallpaperaccess.com/full/271965.jpg",
    questionThumbnailUrl: "https://wallpaperaccess.com/full/271965.jpg",
    solutionUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    questionName: "Q1 H1",
    course: "Math 239",
    Unit: "1",
    instructor: "Saknini",
    questionUrl: "https://wallpaperaccess.com/full/271965.jpg",
    questionThumbnailUrl: "https://wallpaperaccess.com/full/271965.jpg",
    solutionUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    questionName: "Q1 H1",
    course: "Math 239",
    Unit: "1",
    instructor: "Saknini",
    questionUrl: "https://wallpaperaccess.com/full/271965.jpg",
    questionThumbnailUrl: "https://wallpaperaccess.com/full/271965.jpg",
    solutionUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    questionName: "Q1 H1",
    course: "Math 239",
    Unit: "1",
    instructor: "Saknini",
    questionUrl: "https://wallpaperaccess.com/full/271965.jpg",
    questionThumbnailUrl: "https://wallpaperaccess.com/full/271965.jpg",
    solutionUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
];

export default function QuestionsList() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        {DATA.map((item) => {
          return (
            <div className="col-md-4">
              <QuestionCard
                questionThumbnailUrl={item.questionThumbnailUrl}
                questionName={item.questionName}
                questionUrl={item.questionUrl}
                solutionUrl={item.solutionUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

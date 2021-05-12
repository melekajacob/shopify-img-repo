import axios from "axios";
import QuestionCard from "./QuestionCard";
import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { replacePathParams } from "../utils";
import { Toast } from "./utils/notifications";
import { ROUTES } from "../configs/aws";

export default function QuestionsList() {
  const [questionData, setQuestionData] = useState([]);

  const getQuestionData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const path = replacePathParams(ROUTES.GET_QUESTIONS, {
      user_id: user.username,
    });

    const config = {
      headers: {
        Authorization: user.signInUserSession.idToken.jwtToken,
        "content-type": "application/json",
      },
    };

    let response = [];
    console.log(path);
    try {
      response = await (await axios.get(path, config)).data.Items;
      console.log(response);
    } catch (e) {
      console.log(e);
      Toast("Error!", "Could not get your images", "danger");
      response = [];
    }

    setQuestionData(response);
  };

  useEffect(() => {
    getQuestionData();
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row w-100">
        {questionData.map((item) => {
          return (
            <div className="col-md-3">
              <QuestionCard
                key={item.question_id}
                questionId={item.question_id}
                questionThumbnailUrl={item.questionUrl}
                questionName={item.questionName}
                questionUrl={item.questionUrl}
                solutionUrl={item.solutionUrl}
                getQuestionData={getQuestionData}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

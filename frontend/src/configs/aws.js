export const COGNITO = {
  REGION: "us-east-2",
  USER_POOL_ID: "us-east-2_KPYS4fr0s",
  APP_CLIENT_ID: "24u9e10e9pl23mlct3057l9voa",
};

export const API_HOST = "5nzpq9iplj.execute-api.us-east-2.amazonaws.com/dev";
export const API_URL = `https://${API_HOST}`;

export const ROUTES = {
  GET_QUESTIONS: `/dev/users/{user_id}/questions`,
  ADD_QUESTION: `/dev/users/{user_id}/questions`,
  DELETE_QUESTION: `/dev/users/{user_id}/questions/{question_id}`,
};

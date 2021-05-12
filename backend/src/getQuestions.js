const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const docClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.QUESTIONS_TABLE_NAME;

module.exports.handler = async (event) => {
  console.log(event);

  let response;
  try {
    const user_id = event.pathParameters.user_id;

    const questionData = await docClient
      .query({
        TableName: TABLE_NAME,
        KeyConditionExpression: "user_id = :uid",
        ExpressionAttributeValues: {
          ":uid": user_id,
        },
      })
      .promise();

    response = {
      statusCode: 200,
      body: JSON.stringify(questionData),
    };
  } catch (e) {
    console.log(e);
    response = {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to get questions", error: e }),
    };
  }

  return response;
};

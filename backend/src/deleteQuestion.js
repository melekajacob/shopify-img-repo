const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const docClient = new AWS.DynamoDB.DocumentClient();
const BUCKET_NAME = process.env.QUESTIONS_BUCKET_NAME;
const TABLE_NAME = process.env.QUESTIONS_TABLE_NAME;

module.exports.handler = async (event) => {
  console.log(event);

  let response;
  try {
    const user_id = event.pathParameters.user_id;
    const question_id = event.pathParameters.question_id;

    const { s3QuestionKey = null, s3SolutionKey = null } = await docClient
      .get({
        TableName: TABLE_NAME,
        Key: {
          user_id,
          question_id,
        },
      })
      .promise();

    // If s3 delete fails, not so big of a deal
    try {
      const promises = [s3QuestionKey, s3SolutionKey]
        .filter((key) => key)
        .map((key) => {
          return s3.deleteObject({ Bucket: BUCKET_NAME, Key: key }).promise();
        });

      await Promise.all(promises);
    } catch (e) {
      console.log("Failed to delete, we will keep going though", e);
    }

    // If this fails, its a big deal
    await docClient
      .delete({
        TableName: TABLE_NAME,
        Key: {
          user_id,
          question_id,
        },
      })
      .promise();

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Successful delete",
      }),
    };
  } catch (e) {
    console.log(e);
    response = {
      statusCode: 500,
      body: JSON.stringify({ message: "Question failed to delete", error: e }),
    };
  }

  return response;
};

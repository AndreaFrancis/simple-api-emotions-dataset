const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    if(event.queryStringParameters && event.queryStringParameters.text) {
      let textValue = event.queryStringParameters.text;
      body = await dynamo.scan({ 
                  TableName: "emotionsTable", 
                  FilterExpression: "contains(#text, :text)",
                  ExpressionAttributeValues: {
                              ":text" : textValue
                  },
                  ExpressionAttributeNames: { "#text": "text" }
            }).promise();
    } else {
      body = await dynamo.scan({ TableName: "emotionsTable"}).promise();
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };
};

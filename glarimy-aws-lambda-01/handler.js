'use strict';

exports.hello = (event, context, callback) => {
  let a = 20;
  console.log("value: " + 20);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};

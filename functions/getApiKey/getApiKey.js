exports.handler = async function (event, context) {
  const apiKey = process.env.GPT_Key; 

  return {
    statusCode: 200,
    body: JSON.stringify({ apiKey })
  };
};

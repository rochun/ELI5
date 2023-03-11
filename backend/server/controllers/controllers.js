const openai = require('../openai');
const {readResponses, putResponses} = require('../models/model');

const callToOpenAi = async (message) => {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: 'Explain the following like I am five years old: ' + message,
      }]
    });

    return completion.data;
  } catch (err) {
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);
    }
    return err.response;
  }
}

exports.chatgpt = (req, res) => {
  const { message } = req.query;

  callToOpenAi(message)
    .then((result) => {
      // console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err.status);
      console.log(err.data);
      res.status(400).send(err.data);
    })
}

// get all query responses
exports.getResponses = (req, res) => {
  readResponses()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    })
}

exports.postResponse = (req, res) => {
  let { query, response } = req.body;

  /* HERE: add input server-side input validation later */

  let data = {
    query,
    response,
  };

  console.log(req.body);
  putResponses(data)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    })
}
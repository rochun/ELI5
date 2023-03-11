const mongoose = require("mongoose");
require("dotenv").config();

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to Atlas');
  })
  .catch((err) => {
    console.log('Error connecting to Atlas');
  });

const gptResponseSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  }
}, { timestamps: true});

module.exports = mongoose.model('gptResponses', gptResponseSchema);
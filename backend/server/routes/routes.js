const express = require('express');
const controller = require('../controllers/controllers');

const router = express.Router();

router.get('/chatgpt', controller.chatgpt);

router.get('/responses', controller.getResponses);

router.post('/responses', controller.postResponse);

module.exports = router;
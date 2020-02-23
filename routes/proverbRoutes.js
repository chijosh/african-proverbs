const express = require('express');
const proverbController = require('../controllers/proverbController');

const router = express.Router();

router
  .route('/')
  .get(proverbController.getAllProverb)
  .post(proverbController.createProverb);

module.exports = router;

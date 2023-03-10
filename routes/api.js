const express = require('express');
const router = express.Router();
const tf = require('@tensorflow/tfjs');
const tmImage = require('@teachablemachine/image');
require('dotenv').config();
const model_id = process.env.MODEL_ID;

// Load Teachable Machine model
const modelURL = `https://teachablemachine.withgoogle.com/models/${model_id}/`;
const model = new tmImage.Classification(modelURL + 'model.json', modelURL + 'metadata.json');

// Define predict route
router.post('/predict', async (req, res) => {
  const image = req.body.image; // Base64-encoded image

  // Make prediction
  const img = new Image();
  img.src = 'data:image/jpeg;base64,' + image;
  await img.decode();
  const prediction = await model.predict(img);

  // Return prediction
  res.json(prediction);
});

module.exports = router;

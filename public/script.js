const form = document.getElementById('predict-form');
const imageInput = document.getElementById('image-input');
const predictionDiv = document.getElementById('prediction');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Convert image to base64-encoded string
  const reader = new FileReader();
  reader.onloadend = () => {
    const image = reader.result.replace(/^data:image\/(png|jpeg);base64,/, '');
    makePrediction(image);
  };
  reader.readAsDataURL(imageInput.files[0]);
});

async function makePrediction(image) {
  // Send image to server to make prediction
  const response = await fetch('/api/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image }),
  });
  const prediction = await response.json();

  // Display prediction
  predictionDiv.textContent = `Predicted class: ${prediction.label}`;
}

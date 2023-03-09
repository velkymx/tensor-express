# tensor-express
This is an example of using tensorflow.js and a teachable machine model in an expressjs project

To run this TensorFlow.js app with a Teachable Machine model in an Express.js project, you can follow these steps:

1. Make sure you have Node.js and npm installed on your computer.
1. Clone the project's repository to your local machine.
1. Navigate to the project directory in your terminal or command prompt.
2. Copy your [Teachable Machine](https://teachablemachine.withgoogle.com/) model information to the `public/models` folder
3. Run `npm install` to install the project dependencies.
4. Copy `.env.sample` to `.env` and to configure the port and model id
5. Run `npm start` to start the Express server.
6. Open a web browser and navigate to `http://localhost:3000` to view the app.

Note: Make sure you have a Teachable Machine model saved in the `public/models` directory and update the model name and labels in the `public/index.html` file accordingly.

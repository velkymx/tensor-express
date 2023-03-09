const express = require('express');
const app = express();
// dotenv
require('dotenv').config();

// Set up static file serving
app.use(express.static('public'));

// Set up view engine
app.set('view engine', 'ejs');

// Set up routes
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

// Set up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

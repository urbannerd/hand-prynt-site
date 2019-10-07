const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// Port Number
const port = 3000;

// CORS MIddleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

// Body Parser Middleware
app.use(bodyParser.json());

// Index Route
app.get('/', (req, res) => {
  res.status(200).send('ok');
});


//redirects any other routes that we have not specified
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});

module.exports = app;
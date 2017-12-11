const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const dbConfig = require('./config/db');

dbConfig();

app.use(express.static('frontend'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(__dirname);
    console.log('Running on port 8000...');
  }
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
});

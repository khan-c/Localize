import express from 'express';
// const express = require('express');
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
const PORT = process.env.PORT || 8000;
import dbConfig from './config/db';

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

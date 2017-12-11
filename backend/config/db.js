const mongoose = require('mongoose');

const database = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/localize', { useMongoClient: true });
  const db = mongoose.connection
  .once('open', () => console.log('MongoDB open'))
  .once('error', error => console.log(error)
);
};

module.exports = database;

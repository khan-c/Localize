import mongoose from 'mongoose';
import { mongoConfig } from './keys';

let config;
if (process.env !== 'production') {
  config = require('../api/auth');
}

const username = mongoConfig.username || config.mongoConfig.username;
const password = mongoConfig.password || config.mongoConfig.password;

const URI = `mongodb://${username}:${password}@ds059207.mlab.com:59207/localize`;

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(URI, { useMongoClient: true });
  const db = mongoose.connection
    .once('open', () => console.log('MongoDB open'))
    .once('error', error => console.log(error));
};

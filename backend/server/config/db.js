import mongoose from 'mongoose';
import { mongoConfig } from './keys';
import { mongoConfig as mongoConfig2 } from '../api/auth';

const username = mongoConfig.username || mongoConfig2.username;
const password = mongoConfig.password || mongoConfig2.password;

const URI = `mongodb://${username}:${password}@ds059207.mlab.com:59207/localize`;

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(URI, { useMongoClient: true });
  const db = mongoose.connection
    .once('open', () => console.log('MongoDB open'))
    .once('error', error => console.log(error));
};

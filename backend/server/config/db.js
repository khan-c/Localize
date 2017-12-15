import mongoose from 'mongoose';
import { mongoConfig } from '../api/auth';

const URI = `mongodb://${mongoConfig.username}:${mongoConfig.password}@ds059207.mlab.com:59207/localize`;

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(URI, { useMongoClient: true });
  const db = mongoose.connection
    .once('open', () => console.log('MongoDB open'))
    .once('error', error => console.log(error));
};

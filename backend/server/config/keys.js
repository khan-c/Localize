let config;
if (process.env.NODE_ENV !== 'production') {
  config = require('../api/auth');
}

const username = process.env.M_USER || config.mongoConfig.username;
const apikey = process.env.MAPI || config.mongoConfig.apikey;
const password = process.env.MPW || config.mongoConfig.password;

export const googleConfig = {
  clientID: process.env.G_ID,
  clientSecret: process.env.G_SECRET,
  callbackURL: '/auth/google/callback'
};

export const mongoConfig = {
  username,
  password,
  apikey
};

export const credentials = () => ({
  "access_token": process.env.Y_TOKEN,
  "expires_in": 634419460,
  "token_type": process.env.Y_TTYPE
});

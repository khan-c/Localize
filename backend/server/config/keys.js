let config;
if (process.env.NODE_ENV !== 'production') {
  config = require('../api/auth');
}

export const googleConfig = {
  clientID: process.env.G_ID,
  clientSecret: process.env.G_SECRET,
  callbackURL: '/auth/google/callback'
};

export const mongoConfig = {
  username: 'khanc',
  password: process.env.MPW,
  apikey: process.env.M_API
};

export const credentials = () => ({
  "access_token": process.env.Y_TOKEN,
  "expires_in": 634419460,
  "token_type": process.env.Y_TTYPE
});

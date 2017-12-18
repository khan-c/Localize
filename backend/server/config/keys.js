

export const googleConfig = {
  clientID: process.env.G_ID,
  clientSecret: process.env.G_SECRET,
  callbackURL: 'http://localhost:8000/auth/google/callback'
};

export const mongoConfig = {
  username: 'khanc',
  password: process.env.MPW,
  apikey: process.env.M_API
};

export const credentials = () => ({
  // "cliend_id": "vg-56b4TGcGeVwXth2eC7A",
  "access_token": process.env.Y_TOKEN,
  "expires_in": 634419460,
  "token_type": process.env.Y_TTYPE
});

import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { googleConfig } from './keys';
import User from '../modules/users/model';

let config;
if (process.env !== 'production') {
  config = require('../api/auth');
}

const findUserById = async (id, done) => {
  const user = await User.findOne({ '_id' : id });
  done(null, user);
};

export default (passport) => {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => findUserById(id, done));

  passport.use(new GoogleStrategy({
    clientID: googleConfig.clientID || config.googleConfig.clientID,
    clientSecret: googleConfig.clientSecret || config.googleConfig.clientSecret,
    callbackURL: 'http://localhost:8000/auth/google/callback'
  },
  async (token, refreshToken, profile, done) => {

    const existingUser = await User.findOne({ 'google.id' : profile.id });

    if (existingUser) {
      return done(null, existingUser);
    } else {
      const user = await new User({
        'google.id' : profile.id,
        'google.name' : profile.displayName,
        'google.email' : profile.emails[0].value
      }).save((err) => {
        if (err) {
          console.log(err);
        } else {
          return done(null, user);
        }
      });
    }

  }));
};

import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { Strategy as LocalStrategy } from 'passport-local';
import { googleConfig } from './auth.js';
import User from '../modules/users/model';


export default (passport) => {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => findUserById(id, done));

  passport.use(new GoogleStrategy({
    clientID: googleConfig.clientID,
    clientSecret: googleConfig.clientSecret,
    callbackURL: googleConfig.callbackURL
  },
  async (token, refreshToken, profile, done) => {

    const existingUser = await User.findOne({ 'google.id' : profile.id });

    if (existingUser) {
      return done(null, existingUser);
    }

    const user = await new User({
      'google.id' : profile.id,
      'google.token' : token,
      'google.name' : profile.displayName,
      'google.email' : profile.emails[0].value
    }).save((err) => {
      if (err) {
        console.log(err);
      } else {
        return done(null, user);
      }
    });
  }));
};

async function findUserById(id, done) {
  const user = await User.findById(id);
  done(user);
};

import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { googleConfig } from './keys';
import User from '../modules/users/model';

const findUserById = async (id, done) => {
  const user = await User.findOne({ '_id' : id });
  done(null, user);
};

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

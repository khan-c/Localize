import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
// import { Strategy as LocalStrategy } from 'passport-local';
import { googleConfig } from '../api/auth.js';
import User from '../modules/users/model';

const findUserById = async (id, done) => {
  console.log(id);
  const user = await User.findOne({ '_id' : id });
  console.log(user);
  done(null, user);
};

export default (passport) => {
  passport.serializeUser((user, done) => {
    console.log(user);
    return done(null, user.id)
  });
  passport.deserializeUser((id, done) => {
    console.log("deserialize");
    return findUserById(id, done)
  });

  passport.use(new GoogleStrategy({
    clientID: googleConfig.clientID,
    clientSecret: googleConfig.clientSecret,
    callbackURL: googleConfig.callbackURL
  },
  async (token, refreshToken, profile, done) => {

    const existingUser = await User.findOne({ 'google.id' : profile.id });

    if (existingUser) {
      console.log("we're in");
      return done(null, existingUser);
    } else {
      const user = await new User({
        'google.id' : profile.id,
        // 'google.token' : token,
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

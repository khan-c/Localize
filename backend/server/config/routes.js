import path from 'path';
import CircularJSON from 'circular-json';

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

export default (app, passport) => {
  // app.get('/login', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../../../frontend/login.html'));
  // });
  //
  // app.get('/signup', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../../../frontend/signup.html'));
  // });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/index.html'));
  });

  // app.get('/profile', isLoggedIn, (req, res) => {
  //   res.sendFile(path.join(__dirname, '../../../frontend/profile.html'));
  // });

  app.get('/api/current_user', (req, res) => {
    res.status(200).json({ current_user: req.user });
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/auth/google',
    passport.authenticate(
      'google', {
        scope: ['profile', 'email']
      }
    )
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate(
      'google', {
        successRedirect: '/',
        failureRedirect: '/'
      }
    )
  );
};

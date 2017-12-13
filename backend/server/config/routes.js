import path from 'path';
import CircularJSON from 'circular-json';

const isLoggedIn = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    console.log("auth");
    return next();
  }
  console.log("no auth?");
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

  app.get('/profile', isLoggedIn, (req, res) => {
    // console.log(req);
    res.sendFile(path.join(__dirname, '../../../frontend/profile.html'));
  });

  app.get('/api/current_user', (req, res) => {
    // console.log(req);
    res.status(200).json({ current_user: req.user });
    // res.status(200).json({ current_user: "placeholder" });
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
        successRedirect: '/profile',
        failureRedirect: '/'
      }
    )
  );
};

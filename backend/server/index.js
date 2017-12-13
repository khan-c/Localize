import express from 'express';
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const PORT = process.env.PORT || 8000;
import dbConfig from './config/db';
import { CompanyRoutes } from './modules';
import passport from 'passport';
import session from 'express-session';
import routes from './config/routes';
import passportConfig from './config/passport';
import flash from 'connect-flash';

dbConfig();

passportConfig(passport);

app.use(express.static('frontend'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'what what',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
routes(app, passport);

app.use('/api', [CompanyRoutes]);

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(__dirname);
    console.log('Running on port 8000...');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
});

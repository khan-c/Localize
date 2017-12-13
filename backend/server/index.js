import express from 'express';
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const PORT = process.env.PORT || 8000;
import dbConfig from './config/db';
import { BusinessRoutes } from './modules';
import passport from 'passport';
import session from 'express-session';
import routes from './config/routes';
import passportConfig from './config/passport';
import flash from 'connect-flash';
import axios from 'axios';
import { credentials, clientStuff } from './api/key';
import CircularJSON from 'circular-json';

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

app.use('/api', [BusinessRoutes]);

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(__dirname);
    console.log('Running on port 8000...');
  }
});

// route and controller to get business by ID
app.get('/business', (req, res) => {
  // import credentials from our config file
  const token = credentials();
  axios.get(`https://api.yelp.com/v3/businesses/${req.query.Id}`, {
    headers: {
      Authorization: "Bearer " + token.access_token
    }
  }).then( data =>{
    console.log(data);
    // need to flatten ciruclarJSON file
    let normalJson = CircularJSON.stringify(data);
    res.status(200).send(normalJson);
  }, error => {
    res.status(500).json({error});
  });
});

// search?term=plumbing&latitude=37.786882&longitude=-122.399972

// route and controller for search
app.get('/search', (req, res) => {
  let url = "https://api.yelp.com/v3/businesses/search?";
  const token = credentials();
  const queryArr = Object.keys(req.query);
  // console.log("queryArr", queryArr);
  // console.log("req.query.keys", req.query.keys);
  // console.log("queries", req.query);
  // to append the correct items to the search url
  queryArr.forEach( q => {
    if (!(req.query[q] === "")) {
      console.log(req.query[q]);
      url = url + `${q}` + "=" + `${req.query[q]}`;
    }
    if (!(queryArr.slice(-1)[0] === q)) {
      url = url + "&";
    }
  });

  console.log("url", url);
  axios.get(`${url}`, {
    headers: {
      Authorization: "Bearer " + token.access_token
    }
  }).then( data =>{
    // console.log(data);
    let normalJson = CircularJSON.stringify(data);
    // console.log(normalJson);
    res.status(200).send(normalJson);
  }, error => {
    res.status(500).json({error});
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
});

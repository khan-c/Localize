import express from 'express';
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const PORT = process.env.PORT || 8000;
import dbConfig from './config/db';
import { BusinessRoutes, TestimonialRoutes } from './modules';
import passport from 'passport';
import session from 'express-session';
import routes from './config/routes';
import passportConfig from './config/passport';
import flash from 'connect-flash';
import axios from 'axios';
import { credentials } from './config/keys';
import CircularJSON from 'circular-json';

let creds = () => null;
if (process.env.NODE_ENV !== 'production') {
  creds = require('./api/key');
}

dbConfig();

passportConfig(passport);

app.use(express.static('frontend'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'whatwhat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
routes(app, passport);

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(__dirname);
    console.log('Running on port 8000...');
  }
});

app.use('/api', [BusinessRoutes, TestimonialRoutes]);

// route and controller to get business by ID
app.get('/business', (req, res) => {
  // import credentials from our config file
  const token = creds() || credentials();
  axios.get(`https://api.yelp.com/v3/businesses/${req.query.Id}`, {
    headers: {
      Authorization: "Bearer " + token.access_token
    }
  }).then( data =>{
    // need to flatten ciruclarJSON file
    let normalJson1 = CircularJSON.stringify(data);
    res.status(200).send(normalJson1);
  }, error => {
    res.status(500).json({error});
  });
});

// route and controller for search
app.get('/search', (req, res) => {
  let url = "https://api.yelp.com/v3/businesses/search?";
  const token = creds() || credentials();
  const queryArr = Object.keys(req.query);
  queryArr.forEach( q => {
    if (!(req.query[q] === "")) {
      url = url + `${q}` + "=" + `${req.query[q]}`;
    }
    if (!(queryArr.slice(-1)[0] === q)) {
      url = url + "&";
    }
  });

  axios.get(`${url}`, {
    headers: {
      Authorization: "Bearer " + token.access_token
    }
  }).then( data =>{
    // need to flatten ciruclarJSON file
    let normalJson = CircularJSON.stringify(data);
    res.status(200).send(normalJson);
  }, error => {
    res.status(500).json({error});
  });
});

// Adding this here for testing
// route and controller for autocomplete
app.get('/autocomplete', (req, res) => {
  let autoUrl = "https://api.yelp.com/v3/autocomplete?";
  // console.log("autoURL", autoUrl);
  const token = creds() || credentials();
  const queryArrAuto = Object.keys(req.query);
  // console.log("req.query", queryArrAuto);
  queryArrAuto.forEach( q => {
    if (!(req.query[q] === "")) {
      autoUrl = autoUrl + `${q}` + "=" + `${req.query[q]}`;
    }
    if (!(queryArrAuto.slice(-1)[0] === q)) {
      autoUrl = autoUrl + "&";
    }
  });
  // console.log("autoUrl", autoUrl);
  axios.get(`${autoUrl}`, {
    headers: {
      Authorization: "Bearer " + token.access_token
    }
  }).then( data =>{
    // need to flatten ciruclarJSON file
    // console.log("dataaaa", data);
    let Json = CircularJSON.stringify(data);
    res.status(200).send(Json);
  }, error => {
    res.status(500).json({error});
  });
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
});

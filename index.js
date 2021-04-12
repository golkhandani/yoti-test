require('dotenv').config();

const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const controllers = require('./src/controllers');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.use(session({
  secret: 'some-secret',
  resave: false,
  saveUninitialized: true,
}));

const router = express.Router();

router.get('/', controllers.indexController);
router.get('/success', controllers.successController);
router.get('/media', controllers.mediaController);
router.get('/error', controllers.errorController);
router.get('/privacy-policy', async (req, res) => res.render('pages/privacy-policy'));

app.use('/', router);

http.createServer(app).listen(port);

console.log(`Server running on http://localhost:${port}`);

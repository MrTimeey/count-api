const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

router.use(function(req, res, next) {
     next();
});

router.get('/', function(req, res) {
     res.json({ message: 'Hooray! Welcome to the API!' });
});

router.use('/health', require('./src/routers/healthcheck'));
router.use('/user', require('./src/routers/user'));

app.use('/api', router);

module.exports = app;

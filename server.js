const http = require('http');
const unirest = require('unirest');
const tinder = require('tinder');
const express = require('express');
const app = express();
const router = require('./api');
const headersMiddleware = require('./headersMiddleware');
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(cors())
app.use(headersMiddleware);
app.use('/app', router);

app.listen(8081, ()=> console.log("entro al puerto 8081"));

const express = require('express');
const imageRoute = require('./router/image');
const cors = require('cors');
const app = express();
const path = require('path');
require('./db/mongoose');

app.use(cors());
app.use(express.json());
app.use('/image', imageRoute);

///////////////////////////////////////////////

module.exports = app;

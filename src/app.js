const express = require('express');
const imageRoute = require('./router/image');
const cors = require('cors');
const app = express();
const path = require('path');
require('./db/mongoose');

app.use(cors());
app.use(express.json());
app.use('/image', imageRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/../client/public`));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
  });
}

///////////////////////////////////////////////

module.exports = app;

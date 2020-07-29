const express = require('express');
const router = new express.Router();

router.get('/upload', (req, res) => {
  res.send('OK');
});

module.exports = router;

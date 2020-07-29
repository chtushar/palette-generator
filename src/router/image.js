const express = require('express');
const router = new express.Router();
const multer = require('multer');
const upload = multer({
  dest: 'uploads/',
});

router.post('/upload', upload.single('samp'), (req, res) => {
  res.send();
});

module.exports = router;

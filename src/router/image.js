const path = require('path');
const fs = require('fs');
const express = require('express');
const router = new express.Router();
const multer = require('multer');
const sharp = require('sharp');

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '.', 'uploads'),
  filename: function (req, file, cb) {
    cb(null, `IMG.jpg`);
  },
});

const upload = multer({
  storage,
});

router.post('/upload', upload.single('file'), async (req, res) => {
  res.json({
    message: 'File Uploaded!',
  });
});

module.exports = router;

const path = require('path');
const fs = require('fs');
const express = require('express');
const fileUpload = require('express-fileupload');
const router = new express.Router();

router.use(fileUpload());
router.post('/upload', async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  file.mv(`${__dirname}/../../client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({
      fileName: file.name,
      filePath: `/uploads/${file.name}`,
    });
  });
});

module.exports = router;

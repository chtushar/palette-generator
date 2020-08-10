import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Vibrant from 'node-vibrant';

export default function FileUpload({ setPalette }) {
  let [file, setFile] = useState({});
  let [uploadedFile, setuploadedFile] = useState({});

  const onChange = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const name = e.target.files[0].name;
    formData.append('file', e.target.files[0], `${uuid() + '-' + name}`);
    setFile(e.target.files[0]);
    try {
      const res = await axios.post(
        'http://localhost:8000/image/upload',
        formData,
      );

      const { fileName, filePath } = res.data;
      setuploadedFile({ fileName, filePath });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Vibrant.from(uploadedFile.filePath)
      .getSwatches()
      .then(function (palette) {
        let arr = [];
        for (let p in palette) {
          arr.push(palette[p].getHex());
        }

        return arr;
      })
      .then(function (arr) {
        setPalette(arr);
      })
      .catch((err) => console.error(err));
  }, [uploadedFile]);

  return (
    <Fragment>
      {uploadedFile ? (
        <div className="image-container">
          <img src={uploadedFile.filePath} />
        </div>
      ) : (
        <div></div>
      )}
      <form>
        <div className="upload-btn-wrapper">
          <button className="btn">Add an Image</button>
          <input type="file" onChange={onChange} />
        </div>
      </form>
    </Fragment>
  );
}

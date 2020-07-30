import React, { Fragment, useState } from 'react';
import axios from 'axios';

export default function FileUpload() {
  let [file, setFile] = useState({});
  let [fileName, setfileName] = useState('');
  let [uploadedFile, setuploadedFile] = useState({});

  const onChange = async (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setfileName(e.target.files[0].name);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
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

  return (
    <Fragment>
      <form>
        <div>
          <input type="file" id="file" onChange={onChange} />
        </div>
      </form>
      {uploadedFile ? (
        <div>
          <img src={uploadedFile.filePath} />
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
}

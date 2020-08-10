import React, { useState } from 'react';
import FileUpload from './FileUpload';
import Palette from './Palette';
import './styles/App.scss';

function App() {
  const [palette, setPalette] = useState([
    '#b0b0b0',
    '#c0c0c0',
    '#d0d0d0',
    '#e0e0e0',
    '#f0f0f0',
    '#ffffff',
  ]);

  return (
    <div className="App">
      <div className="title">palette generator</div>
      <FileUpload setPalette={setPalette} />
      <Palette palette={palette} />
    </div>
  );
}

export default App;

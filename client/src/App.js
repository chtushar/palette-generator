import React from 'react';
import FileUpload from './FileUpload';
import Palette from './Palette';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className="title">palette generator</div>
      <FileUpload />
      <Palette/>
    </div>
  );
}

export default App;

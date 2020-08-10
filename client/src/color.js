import React from 'react';

const Color = ({ hex }) => {
  return (
    <div className="hex" style={{ backgroundColor: hex }}>
      <button className="chip">{hex}</button>
    </div>
  );
};

export default Color;

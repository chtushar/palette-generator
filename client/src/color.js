import React from 'react';

const Color = ({ hex }) => {
  return (
    <div className="hex" style={{ backgroundColor: hex }}>
      <div className="chip">{hex}</div>
    </div>
  );
};

export default Color;

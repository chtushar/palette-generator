import React, { useState } from 'react';
import Color from './color';

export default function Palette({ palette }) {
  const colors = palette.map((c, i) => {
    return <Color hex={c} key={i} />;
  });
  return <div className="palette">{colors}</div>;
}

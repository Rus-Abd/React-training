import React from 'react';
import '../styles/toolbar.scss';
import toolState from '../store/toolState';
export const SettingBar = () => {
  return (
    <div className="setting-bar ">
      <label htmlFor="lineWidth">Line Width</label>
      <input
        onChange={(e) => toolState.setLineWidth(e.target.value)}
        style={{ margin: '0 10px' }}
        type="number"
        min={1}
        max={50}
        defaultValue={1}
        id="lineWidth"
      />
      <label htmlFor="stroke-color">stroke color</label>
      <input
        onChange={(e) => toolState.setStrokeColor(e.target.value)}
        type="color"
        name=""
        id="stroke-color"
      />
    </div>
  );
};

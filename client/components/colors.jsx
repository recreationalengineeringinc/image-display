import React from 'react';
import SingleColor from './singleColor.jsx';

const Colors = (props) => (
  <div id='colors'>
    <p>Color: {props.displayedColor}</p>
    <div id='colorButtons'>
      <form>
        {props.colors.map((color, index) => (
          <SingleColor colorLength={props.colors.length} hex={props.hex[color]} price={props.prices[color]} key={index} index={index} changeColor={props.changeColor}/>
        ))}
      </form>
    </div>
  </div>
);

export default Colors;
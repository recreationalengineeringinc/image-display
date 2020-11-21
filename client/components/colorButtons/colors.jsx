import React from 'react';
// import SingleColor from './singleColor.jsx';

const Colors = (props) => (
  <div id='colors'>
    <p>Color: {props.displayedColor}</p>
    <div id='colorButtons'>
      <form>
        {props.colors.map((color, index) => (
          // <SingleColor colorLength={props.colors.length} hex={props.hex[color]} price={props.prices[color]} key={index} index={index} changeColor={props.changeColor}/>
          <div className='colorButton' style={{float: 'left'}}>
            <label id='priceForColor' for="color">${props.prices[color].toFixed(2)}</label><br />
            <input type="button" className="color" id= "color" style={{backgroundColor: props.hex[color]}} onClick={() => { props.changeColor(index); }}/>
          </div>
        ))}
      </form>
    </div>
  </div>
);

export default Colors;
import React from 'react';
// import SingleColor from './singleColor.jsx';

const Colors = (props) => (
  <div id='colors'>
    <p id='displayingColor-img'>Color: {props.displayedColor}</p>
    <div id='colorButtons'>
      <form id='colorForm'>
        {props.colors.map((color, index) => (
          // <SingleColor colorLength={props.colors.length} hex={props.hex[color]} price={props.prices[color]} key={index} index={index} changeColor={props.changeColor}/>
          <div className='colorButton' >
            <label id='priceForColor' for="color">${props.prices[color].toFixed(2)}</label><br />
            <div id='button-background'>
              <input type="button" className="color" id= "color" style={{backgroundColor: props.hex[color]}} onClick={() => { props.changeColor(index); }}/>
            </div>
          </div>
        ))}
      </form>
    </div>
  </div>
);

export default Colors;
import React from 'react';

const SingleColor = (props) => {
  return (
    <div className='colorButton' >
      <label id='priceForColor' for="color">${props.price.toFixed(2)}</label><br />
      <div id='button-background'>
        <input type="button" className="color" id= "color" style={{backgroundColor: props.hex}} onClick={() => { props.changeColor(props.index); }}/>
      </div>
    </div>
  );
};



export default SingleColor;
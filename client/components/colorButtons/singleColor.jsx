import React from 'react';

const SingleColor = (props) => {
  return (
    <div className='colorButton' style={{float: 'left'}}>
      <label id='priceForColor' for="color">${props.price.toFixed(2)}</label><br />
      <input type="button" className="color" id= "color" style={{backgroundColor: props.hex}} onClick={() => { props.changeColor(props.index); }}/>
    </div>
  );
};



export default SingleColor;
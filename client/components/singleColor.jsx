import React from 'react';

const SingleColor = (props) => {
  if (Number(props.index) + 1 !== Number(props.colorLength)) {

    return (
      <div className='colorButton' style={{float: 'left'}}>
        <label for="color">${props.price}</label><br />
        <input type="button" className="color" id= "color" style={{backgroundColor: props.hex, height: '50px', width: '50px'}}/>
      </div>
    );
  } else {

    return (
      <div className='colorButton'>
        <label for="color">${props.price}</label><br />
        <input type="button" className="color" id= "color" style={{backgroundColor: props.hex, height: '50px', width: '50px'}}/>
      </div>
    );
  }
};



export default SingleColor;
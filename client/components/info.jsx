import React from 'react';

const Info = (props) => (
  <div>
    <h1>{props.info.name}</h1>
    <div>
      <p>Rating: ★ {props.info.rating} <span style={ {marginLeft: '100px'}} />Item #{props.info.id}</p>
    </div>

    <p>${props.price}</p>
    <p className="blue">This item ships for FREE!</p>
    <p className="red">Members save 20% on one eligible full-price item with code GEARUP2020 thru 11/23.</p>
    <br />
  </div>
);

export default Info;
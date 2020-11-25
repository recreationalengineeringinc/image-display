import React from 'react';
import Stars from './stars.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const Info = (props) => (
  <div>
    <p className='blue' id='brandName-img'>{props.info.brand}</p>
    <h1>{props.info.name}</h1>
    <div id='rating'>
      <Stars rating={props.info.rating}/>
      <p id='rating-info'>
        {props.info.rating} | (20)
      </p>
      <p id='itemID'>
        Item #{props.info.id}
      </p>
    </div>

    <p id='price'>${props.price}</p>
    <div className='blue' id='blue'>
      <FontAwesomeIcon icon={faTruck} />
      <p id='shippingText'>This item ships for FREE!</p>
    </div>
    <p className="red" id='discount-img'>Members save 20% on one eligible full-price item with code <strong>GEARUP2020</strong> thru 11/23.</p>
  </div>
);

export default Info;
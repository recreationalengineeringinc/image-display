import React from 'react';

const Checkout = (props) => (
  <form>
    <br /><br />
    <label>Quantity</label><br />
    <div id="quantityForm">
      <input type="button" id="subtract" className="quantity" value="-" />
      <input type="text" id="quantity" />
      <input type="button" id="subtract" className="quantity" value="+" />
    </div>
    <br /><input type="submit" id="addCart" value="Add to Cart" />
  </form>
);

export default Checkout;
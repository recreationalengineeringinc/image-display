import React from 'react';

const SingleClothingImage = (props) => (
  <tr>
    <td id='clothing-cells' onClick={() => (props.changeImage(props.index))}><img id="clothing-preview" src={props.image} /></td>
  </tr>
);

export default SingleClothingImage;
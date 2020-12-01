import React from 'react';

const SingleClothingImage = (props) => (
  <tr>
    <td id='clothing-cells' onClick={() => (props.changeImage(props.index))}><img id="clothing-preview" src={'https://d2j41hwrxgv80l.cloudfront.net/fit-in/150x150' + props.image.slice(46, props.image.length)} /></td>
    {/* <td id='clothing-cells' onClick={() => (props.changeImage(props.index))}><img id="clothing-preview" src={props.image} /></td> */}
  </tr>
);

export default SingleClothingImage;
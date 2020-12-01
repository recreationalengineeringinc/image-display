import React from 'react';


const SingleImage = (props) => (
  <td onClick={() => (props.changeImage(props.index))}>
    <div id='preview-display'>
      <img id="image-preview" src={'https://d2j41hwrxgv80l.cloudfront.net//fit-in/150x150' + props.image.slice(46, props.image.length)} />
      {/* <img id="image-preview" src={props.image} /> */}
    </div>
  </td>
);

export default SingleImage;
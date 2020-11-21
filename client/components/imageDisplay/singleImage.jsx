import React from 'react';

const SingleImage = (props) => (
  <td onClick={() => (props.changeImage(props.index))}><div id='preview-display'><img id="image-preview" src={props.image} /></div></td>
);

export default SingleImage;
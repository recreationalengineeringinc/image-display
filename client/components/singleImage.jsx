import React from 'react';

const SingleImage = (props) => (
  <tr>
    <td id="photo-preview" onClick={() => (props.changeImage(props.index))}><img src={props.image} /></td>
  </tr>
);

export default SingleImage;
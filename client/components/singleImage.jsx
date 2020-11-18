import React from 'react';

const SingleImage = (props) => (
  <tr>
    <td id="photo-preview" ><img src={props.image} /></td>
  </tr>
);

export default SingleImage;
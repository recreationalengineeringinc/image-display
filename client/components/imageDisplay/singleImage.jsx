import React from 'react';


const SingleImage = (props) => (
  <td onClick={() => (props.changeImage(props.index))}><div id='preview-display'><img id="image-preview" src={props.image.slice(0, 47) + 'resize' + props.image.slice(46, props.image.length)} /></div></td>
);

export default SingleImage;
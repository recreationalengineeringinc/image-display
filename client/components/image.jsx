import React from 'react';
import SingleImage from './singleImage.jsx';

const Image = (props) => (
  <div id='photo'>
    <table>
      {props.previews.map((url, index) => (
        <SingleImage key={index} image={url} index={index} changeImage={props.changeImage}/>
      ))}
    </table>
    <div className='main'>
      <img id='main' src={props.showing.url} />
      <p id='description'>Image {props.showing.key + 1} of {props.previews.length}: {props.showing.description}</p>
    </div>
  </div>
);

export default Image;
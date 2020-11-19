import React from 'react';
import SingleImage from './singleImage.jsx';

const Images = (props) => (
  <div id='photo'>
    <div className='main'>
      <img id='main' src={props.showing.url} />
    </div>
    <table id='otherCategories'>
      <tr>
        {props.previews.map((url, index) => (
          <SingleImage key={index} image={url} index={index} changeImage={props.changeImage}/>
        ))}
      </tr>
    </table>
    <p id='description'>Image {props.showing.key + 1} of {props.previews.length}: {props.showing.description}</p>
  </div>
);

export default Images;
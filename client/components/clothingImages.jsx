import React from 'react';
import SingleClothingImage from './singleClothingImage.jsx';

const ClothingImages = (props) => (
  <div id='clothing-image-module'>
    <div id='clothing-photo'>
      <table id='clothingCategory'>
        {props.previews.map((url, index) => (
          <SingleClothingImage key={index} image={url} index={index} changeImage={props.changeImage}/>
        ))}
      </table>
    </div>
    <div className='image-description'>
      <div className='mainClothing'>
        <img id='mainClothing' src={props.showing.url} />
      </div>
      <p id='description'>Image {props.showing.key + 1} of {props.previews.length}: {props.showing.description}</p>
    </div>
  </div>


);

export default ClothingImages;
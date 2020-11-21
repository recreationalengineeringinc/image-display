import React from 'react';
import SingleClothingImage from './singleClothingImage.jsx';

const ClothingImages = (props) => {

  const getRelativeDim = (event) => {
    let dim = document.getElementById('mainClothing').getBoundingClientRect();
    let relX = event.pageX - dim.x - window.pageXOffset;
    let relY = event.pageY - dim.y - window.pageYOffset;
    let deltaX = dim.width / 2;
    let deltaY = dim.height / 2;
    props.hover(relX + deltaX, relY - deltaY, dim.width, dim.height);
  };

  return (
    <div id='clothing-image-module'>
      <div id='clothing-photo'>
        {props.hoverState ? <div className='greyClothing' >
          <img id='greyClothing' src='https://rei-product.s3-us-west-1.amazonaws.com/greyOutClothing.png' style={{height: props.mousePosition.height * 2.33, width: 'auto', top: props.mousePosition.y - 460, left: props.mousePosition.x - ((0.957 * props.mousePosition.width) + 740.8)}} />
        </div> : null}
        <table id='clothingCategory'>
          {props.previews.map((url, index) => (
            <SingleClothingImage key={index} image={url} index={index} changeImage={props.changeImage}/>
          ))}
        </table>
      </div>
      <div className='image-description'>
        <div className='mainClothing'>
          <img id='mainClothing' src={props.showing.url} onMouseOver={props.hoverIn} onMouseOut={props.hoverOut} onMouseMove={getRelativeDim}/>
        </div>
        <p id='description'>Image {props.showing.key + 1} of {props.previews.length}: {props.showing.description}</p>
      </div>
    </div>
  );
};

export default ClothingImages;
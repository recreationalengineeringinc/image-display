import React from 'react';
import SingleImage from './singleImage.jsx';

const Images = (props) => {

  const getRelativeDim = (event) => {
    let dim = document.getElementById('main').getBoundingClientRect();
    let relX = event.pageX - dim.x - window.pageXOffset;
    let relY = event.pageY - dim.y - window.pageYOffset;
    let deltaX = dim.width / 2;
    let deltaY = dim.height / 2;
    console.log(dim.width, dim.height);
    console.log(relX - deltaX, relY - deltaY);
    props.hover(relX + deltaX, relY - deltaY, dim.width, dim.height);

  };

  return (
    <div id='photo'>
      <div className='main'>
        <img id='main' src={props.showing.url} onMouseOver={props.hoverIn} onMouseOut={props.hoverOut} onMouseMove={getRelativeDim}/>
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
};

export default Images;
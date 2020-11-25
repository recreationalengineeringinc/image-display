import React from 'react';

const Stars = (props) => {
  let percentage = (Number(props.rating) / 5) * 100;
  return (
    <div class="img-ratings">
      <div class="img-empty-stars"></div>
      <div class="img-full-stars" style={{width: `${percentage}%`}}></div>
    </div>
  );
};

export default Stars;
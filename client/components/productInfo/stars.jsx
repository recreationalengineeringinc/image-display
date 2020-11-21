import React from 'react';

const Stars = (props) => {
  let percentage = (Number(props.rating) / 5) * 100;
  return (
    <div class="ratings">
      <div class="empty-stars"></div>
      <div class="full-stars" style={{width: `${percentage}%`}}></div>
    </div>
  );
};

export default Stars;
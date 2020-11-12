import React from 'react';

const ImageCard = (props) => {

  // Destructuring
  console.log('card', props)
  const {thumbnails, title} = props.imageObj.data

  return(
    <div>
      <h1>ImageCard</h1>
      {thumbnails}
      {title}
    </div>
  );
};

export default ImageCard;
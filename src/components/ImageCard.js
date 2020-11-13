import React from 'react';

const ImageCard = (props) => {

  // Destructuring
  console.log('card', props.imageObj.data.thumbnails)
  const {thumbnail, title} = props.imageObj.data

  return(
    <div>
      <h1>Title: {title}</h1>
      <img src={thumbnail} />
    </div>
  );
};

export default ImageCard;
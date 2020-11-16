import React from 'react';

const ImageCard = (props) => {

  // Destructuring
  const {thumbnail, title} = props.imageObj.data

  // Handle Click
  const handleClick = (evt) => {
    props.handleAddToFavorites(props.imageObj.data)
  }

  return(
    <div>
      <h1>Title: {title}</h1>
      <img src={thumbnail} />
      <button onClick={handleClick}>Add to Favorites</button>
    </div>
  );
};

export default ImageCard;
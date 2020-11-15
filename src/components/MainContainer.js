import React, { useEffect } from 'react';
import ImageCard from './ImageCard';

const MainContainer = (props) => {

  useEffect(() => {
    fetch("https://www.reddit.com/r/MostBeautiful/.json")
    .then(r => r.json())
    .then(data => {
      props.setImageObjects(data.data.children)
    })
  }, [])

  let arrayToRender = props.imageObjects.map((imageObj) => {
    return (
      <ImageCard
        imageObj={imageObj}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
      />
    )
  })


  return (
    <div>
      {arrayToRender}
    </div>
  );
};

export default MainContainer;
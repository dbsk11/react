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

  const renderImages = (imageObj) => {
    let arrayToRender = 
  }


  return (
    <div>
      {arrayToRender}
    </div>
  );
};

export default MainContainer;
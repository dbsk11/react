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
      <div>
        <div className="dropdown">
          <select value={props.listToRender} onChange={(e) => props.setListToRender()}>
            <option value="All Images">
              All Images 
            </option>
            <option value="Favorites">
              Favorites
            </option>
          </select>
        </div>
        <ImageCard
          imageObj={imageObj}
          favorites={props.favorites}
          setFavorites={props.setFavorites}
        />
      </div>
    )
  })


  return (
    <div>
      {arrayToRender}
    </div>
  );
};

export default MainContainer;
import React, { useState } from 'react';
import MainContainer from './components/MainContainer';

const App = () => {
  const [imageObjects, setImageObjects] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [listToRender, setListToRender] = useState([]);
 
  return (
    <div className="App">
      <MainContainer 
        setImageObjects={setImageObjects}
        imageObjects={imageObjects}
        favorites={favorites}
        setFavorites={setFavorites}
        listToRender={listToRender}
        setListToRender={setListToRender}
      />
    </div>
  );
}

export default App;

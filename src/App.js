import React, { useState } from 'react';
import MainContainer from './components/MainContainer';

const App = () => {
  const [imageObjects, setImageObjects] = useState([]);
  const [favorites, setFavorites] = useState([]);
 
  return (
    <div className="App">
      <MainContainer 
        setImageObjects={setImageObjects}
        imageObjects={imageObjects}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}

export default App;

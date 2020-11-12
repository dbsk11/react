import React, { useState } from 'react';
import MainContainer from './components/MainContainer';

const App = () => {
  const [imageObjects, setImageObjects] = useState([]);

  return (
    <div className="App">
      <MainContainer 
        setImageObjects={setImageObjects}
        imageObjects={imageObjects}
      />
    </div>
  );
}

export default App;

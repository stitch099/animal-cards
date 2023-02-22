import React from 'react';
import './style.css';
import Bear from './images/Bear.jpg';

function App() {
  return (
    <div className='contain'>
      <img src={require('./images/Bear.jpg')} alt="BEAR" />
    </div>
  );
}

export default App;

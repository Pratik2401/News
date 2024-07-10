import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import News from './components/News.jsx';

function App() {
  let [update, setUpdate] = useState({
    category: 'general',
    country: 'in'
  });

  const updateStatus = (newValue) => {
    console.log(newValue);
    setUpdate({
      category: newValue.category,
      country: newValue.country
    });
  };

  return (
    <>
      <Navbar updateStatus={updateStatus} category={update.category} country={update.country}/>
      <News country={update.country} category={update.category}/>
    </>
  );
}

export default App;

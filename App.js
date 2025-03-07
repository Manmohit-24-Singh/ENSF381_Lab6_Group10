import React from 'react';
import './App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Home title="Home Page" descrp="Welcome to our website." />
      <About title="About Us" descrp="We are passionate about delivering quality experiences." />
      <Contact title="Contact Us" descrp="Feel free to reach out to us via email or phone." />
    </div>
  );
}

export default App;


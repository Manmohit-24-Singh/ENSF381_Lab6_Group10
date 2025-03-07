import React from 'react';

function Home(prop) {
  return (
    <div>
      <h1>{prop.title}</h1>
      <p>{prop.descrp}</p>
    </div>
  );
}

export default Home;

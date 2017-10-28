import React from 'react';

const Home = () => {
  return (
      <div>
        <div>I'm the home component</div>
        <button onClick={() => console.log('Hello')}>Press Me!</button>
      </div>
  )
};

export default Home;

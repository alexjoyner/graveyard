import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from "./_.pcss";

const Home = () => {
  return (
      <div>
        <div className="home">I'm the home component</div>
        <button onClick={() => console.log('Hello')}>Press Me!</button>
      </div>
  )
};

export default withStyles(s)(Home);

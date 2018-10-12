import React, { Component } from 'react';
import { Header } from 'ro-component-library';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header
          color="dark"
          height="67px"
          fontSize="25px"
          logoText="Closet Pioneer"
          sticky
          />
      </div>
    );
  }
}

export default HomePage;

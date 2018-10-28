import React, { Component } from 'react';
import { Header , CenteredContent } from 'ro-component-library';
import { Feed } from '../../organisms/Feed';
import { data } from './feedData';

const LogoStyle = {
  marginLeft: '16px',
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Header color="primaryLight">
          <h1 style={LogoStyle}>Closet Pioneer</h1>
        </Header>
        <CenteredContent>
          <Feed data={data} />
        </CenteredContent>
      </div>
    );
  }
}

export default HomePage;

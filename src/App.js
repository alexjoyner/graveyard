import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'ro-component-library/lib/atoms/buttons/buttons';
import {Panel} from 'ro-component-library/lib/atoms/panel/panel';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel>
          <Button >Test Button</Button>
        </Panel>
      </div>
    );
  }
}

export default App;

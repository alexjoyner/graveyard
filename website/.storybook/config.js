import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { configure, addDecorator } from "@storybook/react";
import {StyletronProvider, Styletron} from 'ro-component-library';
import {ThemeProvider, LightTheme} from 'baseui';
import { reducers } from '../src/reducers';
import 'ro-component-library/styles/normalize.css';
import 'ro-component-library/styles/fonts.css';

const store = createStore(reducers);

// automatically import all files ending in *.src.js
const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const engine = new Styletron();
addDecorator(story => {
  return (
    <Provider store={store}>
      {story()}
    </Provider>
  )
})
// Add providers for theme and styletron
addDecorator(story => {
  return (
    <StyletronProvider value={engine}>
      <ThemeProvider theme={LightTheme}>{story()}</ThemeProvider>
    </StyletronProvider>
  );
});
configure(loadStories, module);

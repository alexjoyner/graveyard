import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'ro-component-library/styles/normalize.css';
import 'ro-component-library/styles/fonts.css';
import { StyletronProvider, Styletron } from 'ro-component-library/Styletron';
import { customTheme, ThemeProvider } from 'ro-component-library/Themes';
import { reducers } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { App } from './App';

const store = createStore(reducers);
const engine = new Styletron();

export const StyletronSetup = ({ children }:{ children:ReactNode }) => (
  <StyletronProvider value={engine}>
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  </StyletronProvider>
);

export const Base = () => (
  <StyletronSetup>
    <Provider store={store}>
      <App />
    </Provider>
  </StyletronSetup>
);

ReactDOM.render(<Base />, document.getElementById('root'));
registerServiceWorker();

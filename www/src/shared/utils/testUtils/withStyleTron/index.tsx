import React, { ReactNode, ComponentType } from 'react';
import { Provider } from 'react-redux';
import 'ro-component-library/styles/normalize.css';
import 'ro-component-library/styles/fonts.css';
import { StyletronProvider, Styletron } from 'ro-component-library/Styletron';
import { customTheme, ThemeProvider } from 'ro-component-library/Themes';

const engine = new Styletron();

export const StyletronSetup = ({ children }:{ children:ReactNode }) => (
  <StyletronProvider value={engine}>
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  </StyletronProvider>
);

export const withStyleTron = <P extends object>(Component:ComponentType<P>) => {
  return (props:Object) => (
    <StyletronSetup>
        <Component {...props as P} />
    </StyletronSetup>
  )
};
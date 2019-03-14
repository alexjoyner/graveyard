import React from 'react';
import { ThemeProvider, LightTheme } from 'baseui';
import { StyletronProvider, Styletron } from 'ro-component-library/Styletron';
import { render, fireEvent } from 'react-testing-library';
import { SignInForm } from '.';

const engine = new Styletron();
const withStyleTrom = children => (
  <StyletronProvider value={engine}>
    <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
  </StyletronProvider>
);

test('it should exist', () => {
  const { container } = render(withStyleTrom(<SignInForm onSubmit={() => {}} />));
  expect(container).toBeDefined();
});

it('Should allow form submit with correct data', () => {
  const props = {
    onSubmit: jest.fn(),
  };
  const { getByTestId } = render(withStyleTrom(<SignInForm {...props} />));
  expect(props.onSubmit).toHaveBeenCalledTimes(0);
  fireEvent.change(getByTestId('username'), { target: { value: 'user' } });
  fireEvent.change(getByTestId('password'), { target: { value: 'password123' } });
  fireEvent.click(getByTestId('submit'));
  expect(props.onSubmit).toHaveBeenCalledTimes(1);
  expect(props.onSubmit).toHaveBeenCalledWith({
    username: 'user',
    password: 'password123',
  });
});

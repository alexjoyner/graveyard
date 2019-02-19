import React from 'react';
import { ThemeProvider, LightTheme } from 'baseui';
import { StyletronProvider, Styletron } from 'ro-component-library';
import { render, fireEvent } from 'react-testing-library';
import { AccessCodeForm } from '.';

const engine = new Styletron();
const withStyleTrom = children => (
  <StyletronProvider value={engine}>
    <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
  </StyletronProvider>
);

test('it should exist', () => {
  const { container } = render(withStyleTrom(<AccessCodeForm onSubmit={() => {}} />));
  expect(container).toBeDefined();
});

it('Should allow form submit with correct data', () => {
  const props = {
    onSubmit: jest.fn(),
  };
  const { getByTestId } = render(withStyleTrom(<AccessCodeForm {...props} />));
  expect(props.onSubmit).toHaveBeenCalledTimes(0);
  fireEvent.change(getByTestId('accessCode'), { target: { value: 'testing' } });
  fireEvent.click(getByTestId('submit'));
  expect(props.onSubmit).toHaveBeenCalledTimes(1);
  expect(props.onSubmit).toHaveBeenCalledWith({
    accessCode: 'testing',
  });
});

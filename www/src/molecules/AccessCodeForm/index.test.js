import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { AccessCodeForm } from '.';

test('it should exist', () => {
  const { container } = render(<AccessCodeForm onSubmit={() => {}} />);
  expect(container).toBeDefined();
});

it('Should allow form submit with correct data', () => {
  const props = {
    onSubmit: jest.fn(),
  };
  const { getByLabelText, getByTestId } = render(<AccessCodeForm {...props} />);
  expect(props.onSubmit).toHaveBeenCalledTimes(0);
  fireEvent.change(getByLabelText(/Access Code/i), { target: { value: 'testing' } });
  fireEvent.click(getByTestId('submit'));
  expect(props.onSubmit).toHaveBeenCalledTimes(1);
  expect(props.onSubmit).toHaveBeenCalledWith({
    accessCode: 'testing',
  });
});

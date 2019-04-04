// import React from 'react';
// import { render, fireEvent } from 'react-testing-library';
// import { SignInForm } from './SignInForm';
// import { withStyleTron } from '../../../../shared/utils/testUtils/withStyleTron';

// it('should exist', () => {
//   const { container } = render(withStyleTron(<SignInForm onSubmit={() => {}} />));
//   expect(container).toBeDefined();
// });

// it('Should allow form submit with correct data', () => {
//   const props = {
//     onSubmit: jest.fn(),
//   };
//   const { getByTestId } = render(withStyleTron(<SignInForm {...props} />));
//   expect(props.onSubmit).toHaveBeenCalledTimes(0);
//   fireEvent.change(getByTestId('username'), { target: { value: 'user' } });
//   fireEvent.change(getByTestId('password'), { target: { value: 'password123' } });
//   fireEvent.click(getByTestId('submit'));
//   expect(props.onSubmit).toHaveBeenCalledTimes(1);
//   expect(props.onSubmit).toHaveBeenCalledWith({
//     username: 'user',
//     password: 'password123',
//   });
// });
import React from 'react';
import { render } from 'react-testing-library';
import { SignInButton } from './SignInButton';
import { withStyleTron } from '../../../../shared/utils/testUtils/withStyleTron';

describe('Sign In Button', () => {
  it('Should contain Sign In', () => {
    const props = {
      onClick: jest.fn(),
    }
    const { getByText } = render(withStyleTron(<SignInButton {...props}/>));
    expect(getByText('Sign In')).toBeTruthy();
  });
});
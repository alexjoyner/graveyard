import React from 'react';
import { render } from 'react-testing-library';
import { SignInButton } from './SignInButton';
import { withStyleTron } from '../../../../shared/utils/testUtils/withStyleTron';

describe('Sign In Button', () => {
  it('Should contain Sign In', () => {
    const props = {
      onClick: jest.fn(),
    }
    const TestComp = withStyleTron(SignInButton);
    const { getByText } = render(<TestComp {...props} />);
    expect(getByText('Sign In')).toBeTruthy();
  });
});
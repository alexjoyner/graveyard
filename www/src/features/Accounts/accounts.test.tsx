import React from 'react';
import { render } from 'react-testing-library';
import { Accounts as AccountsFeature } from './accounts';
import { AccountsInterface } from './types/accounts';

describe('Accounts Feature', () => {
  let Accounts: AccountsInterface;
  beforeEach(() => {
    Accounts = new AccountsFeature();
  });
  describe('Sign In Button', () => {
    it('Should contain Sign In', () => {
      const { SignInButton } = Accounts;
      const { getByText } = render(<SignInButton />);
      expect(getByText('Sign In')).toBeTruthy();
    });
  });
  describe('Sign Out Button', () => {
    it('Should contain Sign Out', () => {
      const { SignOutButton } = Accounts;
      const { getByText } = render(<SignOutButton />);
      expect(getByText('Sign Out')).toBeTruthy();
    });
  });
});
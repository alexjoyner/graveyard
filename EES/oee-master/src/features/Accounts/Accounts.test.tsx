import React, { useContext } from 'react';
import mockAxios from 'axios';
import { PLACEMENT } from 'baseui/toast';
import { Toast } from 'ro-component-library/Toast';
import { render, wait, fireEvent, TestApp, RenderResult } from '../../shared/AppBuilder/test-utils';
import { FeaturesContext } from '../../shared/AppBuilder/featuresContext';
import { AccountsFeature } from '.';
import { StoreContext } from '../../shared/AppBuilder/storeContext';
import { withToast } from '../../shared/testUtils/withToast';

const AccountsImplement = withToast(() => {
  const features = useContext(FeaturesContext);
  const [state] = useContext(StoreContext);
  const { AuthButton } = features.Accounts;
  return (
    <>
      <AuthButton />
      <h1>{state.Accounts.user.username}</h1>
      {(state.Accounts.token) ? (<span>Got Token</span>) : null}
      <span>{JSON.stringify(state.Accounts)}</span>
      {/* <Toast placement={PLACEMENT.bottomLeft} /> */}
    </>
  )
})

describe('Accounts Feature', () => {
  let utils: RenderResult;
  beforeEach(() => {
    const Base = TestApp({
      children: <AccountsImplement />
    });
    const Test = Base.addFeatures([AccountsFeature]);
    const Root = Test.Run({});
    utils = render(<>{Root}</>)
  });
  test('It should render without exploding', () => {
    const { asFragment } = utils;
    expect(asFragment).toBeDefined();
  })
  test('Sign in button opens modal', () => {
    const { getByText } = utils;
    const signInBtn = getByText('Sign In');
    fireEvent.click(signInBtn);
    expect(getByText('Enter Credentials:')).toBeDefined();
  })
  it('Should allow sign in / sign out process', async () => {
    // @ts-ignore
    mockAxios.post.mockResolvedValueOnce({
      data: {
        user: {
          id: 1234,
          username: 'Philbert'
        },
        token: 'GOMD'
      }
    })
    const { getByText, getByTestId } = utils;
    expect(getByText('OEE Master')).toBeDefined();
    const signInBtn = getByText('Sign In');
    fireEvent.click(signInBtn);
    fireEvent.change(getByTestId('username'), { target: { value: 'testing' } });
    fireEvent.change(getByTestId('password'), { target: { value: '123' } });
    fireEvent.click(getByTestId('submit'));
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith("http://localhost:8080/me/signIn", { "password": "123", "username": "testing" });

    // Assert that user successfully logged in
    await wait(() => {
      expect(getByText('Philbert')).toBeDefined();
      expect(getByText('Got Token')).toBeDefined();
    });

    // Assert user can now log out
    expect(getByText('Sign Out')).toBeDefined();
    fireEvent.click(getByText('Sign Out'));
    expect(getByText('Sign In')).toBeDefined();
  });
});
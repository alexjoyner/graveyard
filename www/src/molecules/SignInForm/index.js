import React from 'react';
import { Input } from 'ro-component-library/Input';
import { Button } from 'ro-component-library/Button';
import { Block } from 'ro-component-library/utilities/Block';
import PropTypes from 'prop-types';

const SignInForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    onSubmit({
      username: username.value,
      password: password.value,
    });
  };
  return (
  <>
    <form
      onSubmit={handleSubmit}
      data-testid="code-form"
    >
      <Block margin="scale200">
        <Input
          id="username"
          model="basic"
          placeholder="Username"
          overrides={{ Input: { props: { 'data-testid': 'username' } } }}
          autoFocus
        />
      </Block>
      <Block margin="scale200">
        <Input
          id="password"
          model="basic"
          placeholder="Password"
          overrides={{ Input: { props: { 'data-testid': 'password' } } }}
        />
      </Block>
      <Block margin="scale200">
        <Button
          model="baseUI"
          type="submit"
          value="Submit"
          data-testid="submit"
        >
            Submit
        </Button>
      </Block>
    </form>
  </>
  );
};
SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { SignInForm };

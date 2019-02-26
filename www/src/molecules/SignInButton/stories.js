import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SignInButton } from '.';


storiesOf('Molecules', module)
  .add('SignInButton', () => (
    <>
      <SignInButton onClick={action('Submit')} />
    </>
  ));

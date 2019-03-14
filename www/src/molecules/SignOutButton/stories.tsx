import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SignOutButton } from '.';


storiesOf('Molecules', module)
  .add('SignOutButton', () => (
    <>
      <SignOutButton onClick={action('Submit')} />
    </>
  ));

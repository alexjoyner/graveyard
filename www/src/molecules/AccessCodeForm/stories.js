import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Card } from 'ro-component-library';
import { AccessCodeForm } from '.';


storiesOf('Molecules', module)
  .add('Access Code Modal', () => (
    <Card>
      {() => (
        <AccessCodeForm onSubmit={action('Submit')} />
      )}
    </Card>
  ));

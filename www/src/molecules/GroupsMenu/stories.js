import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from 'ro-component-library/Card';
import { GroupsMenu } from '.';


storiesOf('Molecules', module)
  .add('Groups Menu', () => (
    <Card>
      {() => (
        <GroupsMenu />
      )}
    </Card>
  ));

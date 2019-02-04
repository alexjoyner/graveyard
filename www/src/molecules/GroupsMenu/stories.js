import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Card } from 'ro-component-library';
import { GroupsMenu } from '.';

const TestGroups = [{
  id: '1',
  name: 'Maintenance',
},{
  id: '2',
  name: 'Operator',
},{
  id: '3',
  name: 'Manager',
}]

storiesOf('Molecules', module)
  .add('Groups Menu', () => (
    <Card>
      {({StyledBody}) => (
        <GroupsMenu groups={TestGroups} changePointGroup={action('clicked')}/>
      )}
    </Card>
  )); 

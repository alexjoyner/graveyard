import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from 'ro-component-library/Card';
import { ChartsSelected } from '../../../../molecules/ChartsSelected';


storiesOf('Gauges', module)
  .add('Charts Selected', () => (
    <Card>
      <ChartsSelected />
    </Card>
  ));

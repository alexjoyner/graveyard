import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, sideBarActions } from 'ro-component-library';
import { SideBar } from '.';

storiesOf('Molecules', module)
  .add('SideBar', () => (
    <SideBar>
      <Button onClick={() => sideBarActions().toggle()}>Toggle SideBar</Button>
    </SideBar>
  ));

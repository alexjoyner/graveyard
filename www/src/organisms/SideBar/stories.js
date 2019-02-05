import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, sideBarActions } from 'ro-component-library';
import { SideBar } from '.';

storiesOf('Organisms', module)
  .add('SideBar', () => (
    <SideBar>
      <Button onClick={() => sideBarActions().toggle()}>Toggle SideBar</Button>
    </SideBar>
  ));

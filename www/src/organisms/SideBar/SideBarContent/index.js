import React from 'react';
import { GroupsMenu } from '../../../molecules/GroupsMenu';
import { ChartsSelected } from '../../../molecules/ChartsSelected';

const SideBarContent = props => (
  <>
    <GroupsMenu {...props} />
    <ChartsSelected />
  </>
);

export { SideBarContent };

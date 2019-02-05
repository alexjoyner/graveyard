import React from 'react';
import { SideBar as RoSideBar, colors } from 'ro-component-library';
import { useWindowSize } from '../../effects/useWindowSize';
import { GroupsMenu } from '../GroupsMenu';
import { MultiSelectedChartsMenu } from '../../organisms/MultiSelectedChartsMenu';

const SideBarContent = props => (
  <>
    <GroupsMenu {...props} />
    <MultiSelectedChartsMenu />
  </>
);
const SideBar = ({ children, ...props }) => {
  const isDocked = useWindowSize();
  const sidebarStyles = {
    sidebar: {
      background: colors.dark,
      width: (isDocked) ? '300px' : '250px',
      top: '56px',
    },
  };
  return (
    <RoSideBar
      sidebar={<SideBarContent {...props} />}
      styles={sidebarStyles}
      docked={isDocked}
    >
      {children}
    </RoSideBar>
  );
};

export { SideBar };

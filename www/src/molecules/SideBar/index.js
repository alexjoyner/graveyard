import React, { useState, useEffect } from 'react';
import { SideBar as RoSideBar, colors } from 'ro-component-library';
import { GroupsMenu } from '../GroupsMenu';


const SideBar = ({ children, ...props }) => {
  const mql = window.matchMedia('(min-width: 800px)');
  const [isDocked, setDocked] = useState(mql.matches);

  useEffect(() => {
    mql.addListener(() => setDocked(mql.matches));
    return () => mql.removeListener(() => setDocked(mql.matches));
  }, []);
  const sidebarStyles = {
    sidebar: {
      background: colors.dark,
      width: (isDocked) ? '300px' : '250px',
      top: '56px',
    },
  };
  return (
    <RoSideBar
      sidebar={<GroupsMenu {...props} />}
      styles={sidebarStyles}
      docked={isDocked}
    >
      {children}
    </RoSideBar>
  );
};

export { SideBar };

// import React from 'react';
// import { SideBar as RoSideBar, colors } from 'ro-component-library';
// import { useWindowSize } from '../../effects/useWindowSize';
// import { SideBarContent } from './SideBarContent';

// const SideBar = ({ children }) => {
//   const { width } = useWindowSize();
//   const sidebarStyles = {
//     sidebar: {
//       background: colors.dark,
//       width: (width > 800) ? '300px' : '250px',
//       top: '56px',
//     },
//   };
//   return (
//     <RoSideBar
//       sidebar={<SideBarContent />}
//       docked={width > 800}
//       styles={sidebarStyles}
//     >
//       {children}
//     </RoSideBar>
//   );
// };

// export { SideBar };
export { SideBar } from './SideBar';

// import React from 'react';
// import { colors } from 'ro-component-library';
// import { act } from 'react-dom/test-utils';
// import { shallow } from 'enzyme';
// import { SideBar } from '.';
// import { SideBarContent } from './SideBarContent';
// import { resizeWindow } from '../../testUtils/resizeWindow';

// const getDefaultProps = () => ({
//   children: <h1>SideBar Test</h1>,
// });

// describe('SideBar Component', () => {
//   let component;
//   let props;
//   beforeEach(() => {
//     props = getDefaultProps();
//     component = shallow(<SideBar {...props} />);
//   });
//   describe('rendering', () => {
//     it('Should render without exploding', () => {
//       expect(component).toBeDefined();
//     });
//     it('Should contain a SideBar from an external library', () => {
//       expect(component.find('SideBar')).toHaveLength(1);
//     });
//     it('Should have content in the sidebar', () => {
//       expect(component.find('SideBar').props().sidebar).toEqual(<SideBarContent />);
//     });
//     it('Should have children content', () => {
//       expect(component.find('h1').text()).toEqual('SideBar Test');
//     });
//     describe('When screen size is large ( width > 800px)', () => {
//       beforeEach(() => {
//         act(() => {
//           resizeWindow(100, 801);
//           component = shallow(<SideBar {...props} />);
//         });
//       });
//       it('Should be in a docked state', () => {
//         expect(component.find('SideBar').props().docked).toEqual(true);
//       });
//       it('Should have correct large screen styles', () => {
//         const largeScreenStyles = {
//           sidebar: {
//             background: colors.dark,
//             width: '300px',
//             top: '56px',
//           },
//         };
//         expect(component.find('SideBar').props().styles).toEqual(largeScreenStyles);
//       });
//     });
//     describe('When screen size is small ( width <= 800px)', () => {
//       beforeEach(() => {
//         act(() => {
//           resizeWindow(100, 800);
//           component = shallow(<SideBar {...props} />);
//         });
//       });
//       it('Should NOT be in a docked state', () => {
//         expect(component.find('SideBar').props().docked).toEqual(false);
//       });
//       it('Should have correct small screen styles', () => {
//         const smallScreenStyles = {
//           sidebar: {
//             background: colors.dark,
//             width: '250px',
//             top: '56px',
//           },
//         };
//         expect(component.find('SideBar').props().styles).toEqual(smallScreenStyles);
//       });
//     });
//   });
// });

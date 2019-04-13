// import React from 'react';
// import { mount, ReactWrapper } from 'enzyme';
// import { DashBoard } from '.';

// describe('DashBoard Page', () => {
//   let component:ReactWrapper;
//   beforeEach(() => {
//     component = mount(<DashBoard />);
//   });
//   it('Should render without exploding', () => {
//     expect(component).toBeDefined();
//   });
//   it('Should have a SideBar', () => {
//     expect(component.find('SideBar')).toHaveLength(1);
//   });
//   it('Should contain a Header', () => {
//     expect(component.find('Header')).toHaveLength(1);
//   });
//   describe('HeaderSideBarPageBody', () => {
//     let HeaderSideBarPageBody:ReactWrapper;
//     beforeEach(() => {
//       HeaderSideBarPageBody = component.find('HeaderSideBarPageBody');
//     });
//     it('Should have one instance', () => {
//       expect(HeaderSideBarPageBody).toHaveLength(1);
//     });
//     it('Should contain a DashBody', () => {
//       expect(HeaderSideBarPageBody.find('Connect(TDashBody)')).toHaveLength(1);
//     });
//   });
//   it('Should have ChartModal', () => {
//     expect(component.find('Connect(TChartModal)')).toHaveLength(1);
//   });
// });

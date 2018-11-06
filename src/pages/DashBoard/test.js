import React from 'react';
import { shallow } from 'enzyme';
import { DashBoard } from '.';

describe('DashBoard Page', () => {
  let component;
  beforeEach(() => {
    component = shallow(<DashBoard />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  xit('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should have ISideBar behavior', () => {
    expect(component.find('Connect(TISideBar)')).toHaveLength(1);
  });
  it('SHould have a Header component', () => {
    expect(component.find('Header')).toHaveLength(1);
  });
  it('Should have a sidebar toggle button', () => {
    expect(component.find('Connect(TISideBarToggle)')).toHaveLength(1);
  });
  it('Should contain a test notification', () => {
    expect(component.find('TestNotification')).toHaveLength(1);
  });
  it('Should have a SideBar', () => {
    expect(component.find('Connect(TISideBar)').props().SideBar).toBeDefined();
  });
  it('Should have a page body', () => {
    expect(component.find('Connect(TISideBar)').props().Body).toBeDefined();
  });
});

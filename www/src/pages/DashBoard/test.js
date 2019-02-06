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
  it('Should have a SideBar', () => {
    expect(component.find('SideBar')).toBeDefined();
  });
  xit('Should have ISideBar behavior', () => {
    expect(component.find('Connect(TISideBar)')).toHaveLength(1);
  });
  xit('Should contain a test notification', () => {
    expect(component.find('TestNotification')).toHaveLength(1);
  });
  xit('Should have a page body', () => {
    expect(component.find('Connect(TISideBar)').props().Body).toBeDefined();
  });
  xit('Should have ChartModal', () => {
    expect(component.find('ChartModal')).toHaveLength(1);
  });
  xit('Should contain a Header', () => {
    expect(component.find('Header')).toHaveLength(1);
  });
});

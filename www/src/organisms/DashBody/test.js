import React from 'react';
import { shallow } from 'enzyme';
import { DashBody } from '.';


describe('DashBody component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<DashBody />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should contain HeaderSideBarPageBody', () => {
    expect(component.find('SideBarPageBody__HeaderSideBarPageBody')).toHaveLength(1);
  });
  it('Should Contain a GaugeBlockArray', () => {
    expect(component.find('Connect(BaseGaugeBlockArray)')).toHaveLength(1);
  });
});

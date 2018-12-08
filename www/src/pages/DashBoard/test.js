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
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should have ISideBar behavior', () => {
    expect(component.find('Connect(TISideBar)')).toHaveLength(1);
  });
});

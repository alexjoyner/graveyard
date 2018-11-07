import React from 'react';
import { shallow } from 'enzyme';
import { DashSideBar } from '.';


describe('DashSideBar component', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      shown: true,
    };
    component = shallow(<DashSideBar {...props} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should contain an Animated SideBar', () => {
    expect(component.find('SideBar__AnimatedSideBar')).toHaveLength(1);
  });
  it('Should contain SideBarContent', () => {
    expect(component.find('Connect(BaseSideBarContent)')).toHaveLength(1);
  });
});

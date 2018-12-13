import React from 'react';
import { shallow } from 'enzyme';
import { DashHeader } from '.';

describe('DashHeader Component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<DashHeader />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should contain a header', () => {
    expect(component.find('Header')).toHaveLength(1);
  });
  it('Should have correct styling', () => {
    expect(component.props().color).toEqual('dark');
  });
  it('Should have a sidebar toggle button', () => {
    expect(component.find('Connect(TISideBarToggle)')).toHaveLength(1);
  });
  it('Should contain the test OEE Master', () => {
    expect(component.find('h1').text()).toEqual('OEE Master');
  });
  it('Should contain a Feedback link', () => {
    expect(component.find('FeedbackButton')).toHaveLength(1);
  });
});

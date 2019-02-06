import React from 'react';
import { mount } from 'enzyme';
import { Header } from '.';

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    global.matchMedia = jest.fn(() => ({
      matches: false,
      addListener: () => null,
    }));
    component = mount(<Header />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should contain a Header from an external library with correct props', () => {
    const RoHeader = component.find('Header').get(1);
    expect(RoHeader).toBeDefined();
    expect(RoHeader.props.color).toEqual('dark');
  });
  it('Should have a sidebar toggle button', () => {
    expect(component.find('ToggleBtn')).toHaveLength(1);
  });
  it('Should contain the test OEE Master', () => {
    expect(component.find('h1').text()).toEqual('OEE Master');
  });
  it('Should contain a Feedback link', () => {
    expect(component.find('FeedbackButton')).toHaveLength(1);
  });
});

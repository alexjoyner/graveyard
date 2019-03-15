import React from 'react';
import { sideBarActionsAPI } from 'ro-component-library';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import { Header } from '.';

const resizeWindow = (height, width) => {
  window.innerHeight = height;
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};
describe('Header Component', () => {
  let component;
  beforeEach(() => {
    act(() => {
      resizeWindow(100, 799);
      component = shallow(<Header />);
    });
  });
  describe('rendering', () => {
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should contain the test OEE Master', () => {
      expect(component.find('h1').text()).toEqual('OEE Master');
    });
    it('Should contain a Header from an external library with correct props', () => {
      const RoHeader = component.find('Header');
      expect(RoHeader).toBeDefined();
      expect(RoHeader.props().color).toEqual('dark');
    });
    describe('While device screen is small (< 800px)', () => {
      it('Should have a sidebar toggle button', () => {
        expect(component.find('ToggleBtn')).toHaveLength(1);
      });
    });
    describe('While device screen is large (> 800px)', () => {
      beforeEach(() => {
        act(() => {
          resizeWindow(100, 801);
          component = shallow(<Header />);
        });
      });
      it('Should have a sidebar toggle button', () => {
        expect(component.find('ToggleBtn')).toHaveLength(0);
      });
    });
    it('Should contain a Feedback link', () => {
      expect(component.find('FeedbackButton')).toHaveLength(1);
    });
  });
  describe('interactions', () => {
    it('Should fire sideBar tabble when ToggleBtn is clicked', () => {
      component.find('ToggleBtn').props().onClick();
      expect(sideBarActionsAPI.toggle).toHaveBeenCalledTimes(1);
    });
  });
});

import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { getPointsFromGroupID } from './utils/getPointsFromGroupID';
import { TDashBody } from '.';

jest.mock('./utils/getPointsFromGroupID', () => ({
  getPointsFromGroupID: jest.fn(() => Promise.resolve({})),
}));

const getDefaultProps = () => ({
  currentGroup: 0,
});
describe('DashBody', () => {
  let component;
  beforeEach(() => {
    const props = getDefaultProps();
    act(() => {
      component = mount(<TDashBody {...props} />);
    });
  });
  describe('rendering', () => {
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    describe('When current group DOESNT return points', () => {
      xit('Should show No Data case content', () => {
        expect(component.find('DashBodyNoDataContent')).toHaveLength(1);
      });
    });
    describe('When current group returns points', () => {
      beforeEach(() => {
        // getPointsFromGroupID.mockReturnValue({
        //   1: { name: 'Test 1' },
        //   2: { name: 'Test 2' },
        // });
        act(() => {
          getPointsFromGroupID.mockClear();
          props = getDefaultProps();
          component = mount(<TDashBody {...props} />);
        });
      });
      xit('Should have called getPointsFromGroupID', () => {
        expect(getPointsFromGroupID).toHaveBeenCalledTimes(1);
      });
      xit('Should initializ with test points', () => {
        expect(component.state('points')).toEqual({
          1: { name: 'Test 1' },
          2: { name: 'Test 2' },
        });
      });
      xit('Should display a LivePointGauge for every point', () => {
        expect(component.find('LivePointGauge')).toHaveLength(2);
      });
    });
  });
});

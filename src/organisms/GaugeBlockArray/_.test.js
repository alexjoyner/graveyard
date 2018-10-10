import React from 'react';
import io from 'socket.io-client';
import { shallow } from 'enzyme';
import { BaseGaugeBlockArray } from './';
import { PointsSocket } from '../../behaviors/iSocketIO';

const mockFetch = data => jest.fn().mockImplementation(() => Promise.resolve({
  status: 200,
  json: () => data,
}));

jest.mock('socket.io-client', () => ({
  on: jest.fn(),
  emit: jest.fn(),
}));

window.fetch = mockFetch([
  { id: 1, name: 'testPoint' },
  { id: 2, name: 'testPoint2' },
]);

describe('BaseGaugeBlockArray component', () => {
  describe('Component without data', () => {
    let component;
    beforeEach(() => {
      const props = {
        publishNewPoints: jest.fn(),
        publishNewLog: jest.fn(),
        removeAllPoints: jest.fn(),
        socket: new PointsSocket({
          socket: io,
        }),
        points: {},
      };
      component = shallow(<BaseGaugeBlockArray {...props} />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe('Component with points', () => {
    let component;
    beforeEach(() => {
      const props = {
        publishNewPoints: jest.fn(),
        publishNewLog: jest.fn(),
        removeAllPoints: jest.fn(),
        socket: new PointsSocket({
          socket: io,
        }),
        points: {
          1: { name: 'Test Input', value: 10 },
        },
      };
      component = shallow(<BaseGaugeBlockArray {...props} />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

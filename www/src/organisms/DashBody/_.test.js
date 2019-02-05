import React from 'react';
import io from 'socket.io-client';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BaseDashBody } from '.';
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

describe('BaseDashBody component', () => {
  describe('Component without data', () => {
    let component;
    let props;
    beforeEach(() => {
      props = {
        publishNewPoints: jest.fn(),
        publishNewLog: jest.fn(),
        removeAllPoints: jest.fn(),
        socket: new PointsSocket({
          socket: io,
        }),
        points: {},
      };
      component = shallow(<BaseDashBody {...props} />);
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
    let props;
    beforeEach(() => {
      props = {
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
      component = shallow(<BaseDashBody {...props} />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe('Full Mounted Component', () => {
    let props;
    let Base;
    beforeEach(() => {
      const mockStore = {
        subscribe: jest.fn(),
        dispatch: jest.fn(),
        getState: jest.fn(),
      };
      props = {
        publishNewPoints: jest.fn(),
        publishNewLog: jest.fn(),
        removeAllPoints: jest.fn(),
        socket: new PointsSocket({
          socket: io,
        }),
        currentGroup: 0,
        points: {
          1: { name: 'Test Input', value: 10 },
        },
      };
      Base = () => (
        <Provider store={mockStore}>
          <BaseDashBody {...props} />
        </Provider>
      );
    });
    it('should call componentDidUpdate', () => {
      const spy = jest.spyOn(BaseDashBody.prototype, 'componentDidUpdate');
      const component = mount(<Base />);
      component.setProps({ ...props });
      expect(spy).toHaveBeenCalled();
    });
    it('should call handleRemoveAllPoints', () => {
      const spy = jest.spyOn(BaseDashBody.prototype, 'handleRemoveAllPoints');
      const root = mount(<Base />);
      const component = root.find('BaseDashBody');
      component.instance().componentDidUpdate({
        ...props,
        currentGroup: 10,
      });
      expect(spy).toHaveBeenCalled();
    });
    it('should call handleSubscribeToGroup', () => {
      const spy = jest.spyOn(BaseDashBody.prototype, 'handleSubscribeToGroup');
      const root = mount(<Base />);
      const component = root.find('BaseDashBody');
      component.instance().componentDidUpdate({
        ...props,
        currentGroup: 10,
      });
      expect(spy).toHaveBeenCalled();
    });
  });
});

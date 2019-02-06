import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { TDashBody } from '.';

const mockFetch = data => jest.fn().mockImplementation(() => Promise.resolve({
  status: 200,
  json: () => data,
}));

window.fetch = mockFetch([
  { id: 1, name: 'testPoint' },
  { id: 2, name: 'testPoint2' },
]);

describe('TDashBody component', () => {
  describe('Component without data', () => {
    let component;
    let props;
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
        currentGroup: 0,
        points: {},
      };
      const Base = () => (
        <Provider store={mockStore}>
          <TDashBody {...props} />
        </Provider>
      );
      component = mount(<Base {...props} />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
  });
  describe('Component with points', () => {
    let component;
    beforeEach(() => {
      const mockStore = {
        subscribe: jest.fn(),
        dispatch: jest.fn(),
        getState: jest.fn(),
      };
      const props = {
        publishNewPoints: jest.fn(),
        publishNewLog: jest.fn(),
        removeAllPoints: jest.fn(),
        currentGroup: 0,
        points: {
          1: { name: 'Test Input', value: 10 },
        },
      };
      const Base = () => (
        <Provider store={mockStore}>
          <TDashBody {...props} />
        </Provider>
      );
      component = mount(<Base {...props} />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
  });
  // describe('Full Mounted Component', () => {
  //   let props;
  //   let Base;
  //   beforeEach(() => {
  //     const mockStore = {
  //       subscribe: jest.fn(),
  //       dispatch: jest.fn(),
  //       getState: jest.fn(),
  //     };
  //     props = {
  //       publishNewPoints: jest.fn(),
  //       publishNewLog: jest.fn(),
  //       removeAllPoints: jest.fn(),
  //       currentGroup: 0,
  //       points: {
  //         1: { name: 'Test Input', value: 10 },
  //       },
  //     };
  //     Base = () => (
  //       <Provider store={mockStore}>
  //         <TDashBody {...props} />
  //       </Provider>
  //     );
  //   });
  //   it('should call componentDidUpdate', () => {
  //     const spy = jest.spyOn(TDashBody.prototype, 'componentDidUpdate');
  //     const component = mount(<Base />);
  //     component.setProps({ ...props });
  //     expect(spy).toHaveBeenCalled();
  //   });
  //   it('should call handleRemoveAllPoints', () => {
  //     const spy = jest.spyOn(TDashBody.prototype, 'handleRemoveAllPoints');
  //     const root = mount(<Base />);
  //     const component = root.find('TDashBody');
  //     component.instance().componentDidUpdate({
  //       ...props,
  //       currentGroup: 10,
  //     });
  //     expect(spy).toHaveBeenCalled();
  //   });
  //   it('should call handleSubscribeToGroup', () => {
  //     const spy = jest.spyOn(TDashBody.prototype, 'handleSubscribeToGroup');
  //     const root = mount(<Base />);
  //     const component = root.find('TDashBody');
  //     component.instance().componentDidUpdate({
  //       ...props,
  //       currentGroup: 10,
  //     });
  //     expect(spy).toHaveBeenCalled();
  //   });
  // });
});

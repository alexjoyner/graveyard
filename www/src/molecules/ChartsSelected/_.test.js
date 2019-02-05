import React from 'react';
import { shallow } from 'enzyme';
import { TChartsSelected } from '.';

describe('TChartsSelected component', () => {
  describe('Base component state', () => {
    let component;
    let props;
    beforeEach(() => {
      props = {
        removePoint: jest.fn(),
        buildGraph: jest.fn(),
        multiSelectedPoints: {
          1: { id: 1, name: 'test' },
          2: { id: 2, name: 'test2' },
        },
        showNotification: jest.fn(),
      };
      component = shallow(<TChartsSelected {...props} />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
    it('should call remove point', () => {
      component.find('Button').forEach((Button) => {
        Button.props().onClick();
      });
      expect(props.removePoint).toHaveBeenCalled();
      expect(props.removePoint).toHaveBeenCalledTimes(2);
    });
    it('should have the last button build the graph', () => {
      component.find('ListItem').last().props().onClick();
      expect(props.showNotification).toHaveBeenCalledTimes(0);
      expect(props.buildGraph).toHaveBeenCalledTimes(1);
    });
    it('should show notification if no points were added', () => {
      component.setProps({
        ...props,
        multiSelectedPoints: {},
      });
      component.find('ListItem').last().props().onClick();
      expect(props.buildGraph).toHaveBeenCalledTimes(0);
      expect(props.showNotification).toHaveBeenCalledTimes(1);
    });
  });
});

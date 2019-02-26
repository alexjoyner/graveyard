import React from 'react';
import { toasterAPI } from 'ro-component-library';
import { shallow } from 'enzyme';
import { TChartsSelected } from '.';

const getDefaultProps = () => ({
  multiSelectedPoints: {
    1: { name: 'Test Point' },
  },
  removePoint: jest.fn(),
  buildGraph: jest.fn(),
});
describe('ChartsSelected component', () => {
  let component;
  let props;
  beforeEach(() => {
    props = getDefaultProps();
    component = shallow(<TChartsSelected {...props} />);
  });
  describe('rendering', () => {
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should contain a List Header', () => {
      expect(component.find('ListHeader')).toHaveLength(1);
    });
    it('Should contain an empty list of points', () => {
      expect(component.find('.selected-point')).toHaveLength(1);
      expect(component.find('.selected-point').contains('Test Point')).toEqual(true);
    });
    it('Should conatin a (Build Graph) button', () => {
      expect(component.find('.build-graph')).toHaveLength(1);
    });
  });
  describe('interaction', () => {
    it('should call remove point', () => {
      component.find('.remove-point').forEach((Button) => {
        Button.props().onClick();
      });
      expect(props.removePoint).toHaveBeenCalled();
      expect(props.removePoint).toHaveBeenCalledTimes(1);
    });
    it('should have the last button build the graph', () => {
      component.find('ListItem').last().props().onClick();
      expect(props.buildGraph).toHaveBeenCalledTimes(1);
    });
    it('should launch toast notification if no points were added', () => {
      component.setProps({
        ...props,
        multiSelectedPoints: {},
      });
      component.find('ListItem').last().props().onClick();
      expect(props.buildGraph).toHaveBeenCalledTimes(0);
      expect(toasterAPI.info).toHaveBeenCalledTimes(1);
      expect(toasterAPI.info).toHaveBeenCalledWith('Please add at least one point', { autoHideDuration: 5000 });
    });
  });
});

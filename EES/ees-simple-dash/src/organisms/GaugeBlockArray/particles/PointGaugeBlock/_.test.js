import React from 'react';
import { shallow, mount } from 'enzyme';
import { BasePointGaugeBlock } from '.';

jest.useFakeTimers();
describe('PointGaugeBlock component', () => {
  let component;
  let props;
  describe('shallow mounted version', () => {
    beforeEach(() => {
      props = {
        point: {
          name: 'test',
          value: 0,
          multiselected: false,
          settings: {
            units: 'T',
          },
        },
      };
      component = shallow(<BasePointGaugeBlock {...props} />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe('full mounted version', () => {
    beforeEach(() => {
      props = {
        multiSelectPoint: jest.fn(),
        multiDeselectPoint: jest.fn(),
        id: 1,
        point: {
          name: 'test',
          value: 0,
          multiselected: false,
          settings: {
            units: 'T',
          },
        },
      };
      component = mount(<BasePointGaugeBlock {...props} />);
    });
    it('should contain a GagueBlock', () => {
      const GaugeBlock = component.find('GaugeBlock');
      expect(GaugeBlock).toHaveLength(1);
    });
    it('should allow clicking chart button', () => {
      const GaugeBlock = component.find('GaugeBlock');
      GaugeBlock.props().onChartClick();
      expect(component.props().multiSelectPoint)
        .toHaveBeenLastCalledWith(props.point, props.id);
      // point is deselected after setTimeout
      jest.runAllTimers();
      expect(component.props().multiDeselectPoint)
        .toHaveBeenLastCalledWith(props.id);
    });
    it('shouldnt allow clicking settings button', () => {
      const GaugeBlock = component.find('GaugeBlock');
      expect(GaugeBlock.props().onSettingsClick)
        .toThrowError(new Error('No on settings click implementation'));
    });
  });
});

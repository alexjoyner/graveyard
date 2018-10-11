import React from 'react';
import { shallow, mount } from 'enzyme';
import { BaseHistoricalGraphModal } from './';

describe('BaseHistoricalGraphModal component', () => {
  describe('Empty Hidden Chart Component', () => {
    let component;
    beforeEach(() => {
      const props = {
        startLoadingNotif: jest.fn(),
        stopLoadingNotif: jest.fn(),
        dispatchNewHistoricalData: jest.fn(),
        showHistoryModal: jest.fn(),
        closeHistoryModal: jest.fn(),
        modalStage: 'CLOSED',
        chartPoints: {},
      };
      component = shallow(<BaseHistoricalGraphModal {...props} />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe('Shown Chart Component', () => {
    let component;
    let props;
    beforeEach(() => {
      props = {
        startLoadingNotif: jest.fn(),
        stopLoadingNotif: jest.fn(),
        dispatchNewHistoricalData: jest.fn(),
        showHistoryModal: jest.fn(),
        closeHistoryModal: jest.fn(),
        modalStage: 'SHOWN',
        chartPoints: {},
      };
      component = shallow(<BaseHistoricalGraphModal {...props} />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
    it('should allow closing history modal', () => {
      component.find('Button').last().props().onClick();
      expect(props.closeHistoryModal).toHaveBeenCalledTimes(1);
    });
  });
  describe('Full Mounted Component', () => {
    let props;
    let spy;
    beforeEach(() => {
      props = {
        startLoadingNotif: jest.fn(),
        stopLoadingNotif: jest.fn(),
        dispatchNewHistoricalData: jest.fn(),
        showHistoryModal: jest.fn(),
        closeHistoryModal: jest.fn(),
        modalStage: 'SHOWN',
        chartPoints: {},
      };
    });
    afterEach(() => {
      if (spy) {
        spy.mockClear();
      }
    });
    it('Should render without exploding', () => {
      const component = mount(<BaseHistoricalGraphModal {...props} />);
      expect(component).toBeDefined();
    });
    it('Should call component did update', () => {
      spy = jest.spyOn(BaseHistoricalGraphModal.prototype, 'componentDidUpdate');
      const component = mount(<BaseHistoricalGraphModal {...props} />);
      component.setProps({ ...props, modalStage: 'TESTING' });
      expect(spy).toHaveBeenCalled();
    });
    it('Should call runBuildGraphProcess', () => {
      spy = jest.spyOn(BaseHistoricalGraphModal.prototype, 'runBuildGraphProcess');
      const component = mount(<BaseHistoricalGraphModal {...props} />);
      component.setProps({ ...props, modalStage: 'BUILDING' });
      expect(spy).toHaveBeenCalled();
    });
    it('Should call runBuildGraphProcess from IntervalButton', () => {
      spy = jest.spyOn(BaseHistoricalGraphModal.prototype, 'runBuildGraphProcess');
      const component = mount(<BaseHistoricalGraphModal {...props} />);
      const IntervalButton = component.find('IntervalButton');
      IntervalButton.forEach((Button) => {
        Button.props().onClick();
      });
      expect(spy).toHaveBeenCalledTimes(5);
    });
  });
});

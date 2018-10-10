import React from 'react';
import { shallow } from 'enzyme';
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
        modalStage: 'hidden',
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
});

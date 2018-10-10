import React from 'react';
import { shallow } from 'enzyme';
import { BaseMultiSelectedChartsMenu } from './';

describe('BaseMultiSelectedChartsMenu component', () => {
  describe('Base component state', () => {
    let component;
    beforeEach(() => {
      const props = {
        removePoint: jest.fn(),
        buildGraph: jest.fn(),
        multiSelectedPoints: {
          1: { id: 1, name: 'test' },
          2: { id: 2, name: 'test3' },
        },
        showNotification: jest.fn(),
      };
      component = shallow(<BaseMultiSelectedChartsMenu {...props} />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

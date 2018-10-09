import React from 'react';
import { shallow } from 'enzyme';
import { BasePointGaugeBlock } from './';

describe('PointGaugeBlock component', () => {
  let component;
  beforeEach(() => {
    const props = {
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

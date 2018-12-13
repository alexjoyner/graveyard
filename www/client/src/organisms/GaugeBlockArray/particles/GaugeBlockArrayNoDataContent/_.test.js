import React from 'react';
import { shallow } from 'enzyme';
import { GaugeBlockArrayNoDataContent } from '.';

describe('GagugeBlock NO Data Content', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeBlockArrayNoDataContent />);
  });
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

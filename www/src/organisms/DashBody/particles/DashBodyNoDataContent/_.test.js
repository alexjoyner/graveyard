import React from 'react';
import { shallow } from 'enzyme';
import { DashBodyNoDataContent } from '.';

describe('GagugeBlock NO Data Content', () => {
  let component;
  beforeEach(() => {
    component = shallow(<DashBodyNoDataContent />);
  });
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

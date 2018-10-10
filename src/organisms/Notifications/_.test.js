import React from 'react';
import { shallow } from 'enzyme';
import { TestNotification } from './';

describe('TestNotification component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<TestNotification />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

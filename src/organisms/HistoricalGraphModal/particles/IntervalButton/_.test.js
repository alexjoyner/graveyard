import React from 'react';
import { shallow } from 'enzyme';
import { IntervalButton } from './';

describe('IntervalButton component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<IntervalButton />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

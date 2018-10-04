import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

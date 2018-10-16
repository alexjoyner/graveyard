import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

const mockFetch = data => jest.fn().mockImplementation(() => Promise.resolve({
  status: 200,
  json: () => data,
}));

describe('App component', () => {
  let component;
  beforeEach(() => {
    window.fetch = mockFetch('test');
    const props = {
      setGroups: jest.fn(),
    };
    component = shallow(<App {...props} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

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
  it('Should NOT be using SideBarPage', () => {
    expect(component.find('SideBarPage')).toHaveLength(0);
  });
  it('Should contain a DashBoard page', () => {
    expect(component.find('DashBoard')).toHaveLength(1);
  });
});

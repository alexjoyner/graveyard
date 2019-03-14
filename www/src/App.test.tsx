import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { App } from './App';

const mockFetch = (data:Object) => jest.fn().mockImplementation(() => Promise.resolve({
  status: 200,
  json: () => data,
}));

describe('App component', () => {
  let component:ReactWrapper;
  beforeEach(() => {
    window.fetch = mockFetch('test');
    const props = {};
    component = mount(<App {...props} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  describe('App Toast', () => {
    it('Should only have one instance', () => {
      expect(component.find('Toast')).toHaveLength(1);
    });
    it('Should have correct props', () => {
      expect(component.find('Toast').props()).toEqual({
        placement: 'bottomLeft',
        overrides: {
          Root: {
            style: {
              zIndex: 1000,
            },
          },
        },
      });
    });
  });
  it('Should contain a DashBoard page', () => {
    expect(component.find('DashBoard')).toHaveLength(1);
  });
});

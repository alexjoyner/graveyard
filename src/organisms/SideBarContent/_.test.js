import React from 'react';
import { shallow } from 'enzyme';
import { BaseSideBarContent } from './';

describe('BaseSideBarContent component', () => {
  let component;
  beforeEach(() => {
    const props = {
      changePointGroup: jest.fn(),
      groups: [
        {id: 1, name: 'test'}, 
        {id: 2, name: 'test2'},
      ],
    }
    component = shallow(<BaseSideBarContent {...props} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

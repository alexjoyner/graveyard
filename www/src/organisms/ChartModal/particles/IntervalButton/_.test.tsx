import React from 'react';
import { shallow } from 'enzyme';

jest.mock('moment');
import { IntervalButton } from '.';  //eslint-disable-line

describe('IntervalButton component', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      onClick: jest.fn(),
    };
    component = shallow(<IntervalButton {...props} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('should allow click', () => {
    component.find('Button').props().onClick();
    expect(props.onClick).toHaveBeenCalledWith({});
  });
});

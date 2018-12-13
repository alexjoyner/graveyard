import React from 'react';
import { shallow } from 'enzyme';

jest.mock('moment');
import { IntervalButton, getInterval } from './';  //eslint-disable-line

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
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should allow click', () => {
    component.find('Button').props().onClick();
    expect(props.onClick).toHaveBeenCalledWith({});
  });
});
describe('getInterval', () => {
  const testMoment = { subtract: expect.any(Function) };
  it('should have correct default values', () => {
    expect(getInterval()).toEqual({});
  });
  it('should allow 1 day', () => {
    expect(getInterval('oneDay')).toEqual({
      end: testMoment,
      start: '24hours',
    });
  });
  it('should allow 1 week', () => {
    expect(getInterval('oneWeek')).toEqual({
      end: testMoment,
      start: '1week',
    });
  });
  it('should allow 1 month', () => {
    expect(getInterval('oneMonth')).toEqual({
      end: testMoment,
      start: '1month',
    });
  });
  it('should allow 6 months', () => {
    expect(getInterval('sixMonths')).toEqual({
      end: testMoment,
      start: '6months',
    });
  });
});

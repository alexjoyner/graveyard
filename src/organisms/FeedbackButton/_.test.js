import React from 'react';
import { shallow } from 'enzyme';
import { FeedbackButton } from '.';

describe('FeedbackButton Component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FeedbackButton />);
  });
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

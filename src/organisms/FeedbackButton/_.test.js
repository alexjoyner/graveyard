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

  it('should link to voicir feedback', () => {
    window.location.assign = jest.fn();
    const Button = component.find('Button');
    Button.props().onClick();
    expect(window.location.assign)
      .toBeCalledWith('http://feedback.voicir.com');
  });
});

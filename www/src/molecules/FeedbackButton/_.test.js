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
  it('Should have a Go component', () => {
    expect(component.find('Go')).toHaveLength(1);
  });
  it('should link to voicir feedback', () => {
    expect(component.find('Go').props().to).toEqual('http://feedback.voicir.com');
  });
});

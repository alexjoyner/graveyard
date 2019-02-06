import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import { useWindowSize } from '.';

const WindowTestComponent = ({ query }) => {
  const doesMatch = useWindowSize(query);
  return (doesMatch) ? (
    <div>true</div>
  ) : <div>false</div>;
};
WindowTestComponent.propTypes = {
  query: PropTypes.string.isRequired,
};


describe('useWindowSize Effect', () => {
  let component;
  let mediaAPI;
  beforeEach(() => {
    mediaAPI = {
      matches: true,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
    global.window.matchMedia = jest.fn(() => mediaAPI);
    component = mount(<WindowTestComponent query="(min-width: 800px)" />);
  });
  it('Should allow GoodTestComponent to exist', () => {
    expect(component).toBeDefined();
  });
  it('Should return good media state', () => {
    expect(component.contains('true')).toEqual(true);
  });
  xit('Should listen to media', () => {
    expect(mediaAPI.addListener).toHaveBeenCalledTimes(1);
  });
});

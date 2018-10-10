import React from 'react';
import { shallow } from 'enzyme';
import { Notification as RoNotif } from 'ro-component-library';
import { Notification } from './';

describe('Notification component', () => {
  let component;
  beforeEach(() => {
    const props = {
      BaseComponent: RoNotif,
      hideNotification: jest.fn(),
      name: 'test',
      test: {
        shown: true,
      },
    };
    component = shallow(<Notification {...props} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

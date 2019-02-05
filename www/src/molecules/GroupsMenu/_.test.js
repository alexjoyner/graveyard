import React from 'react';
import { shallow } from 'enzyme';
import { TGroupsMenu } from '.';

describe('TGroupsMenu component', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      changePointGroup: jest.fn(),
      groups: [
        { id: 1, name: 'test' },
        { id: 2, name: 'test2' },
      ],
    };
    component = shallow(<TGroupsMenu {...props} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should allow changing to the appropriate group', () => {
    component.find('ListItem').forEach((item) => {
      item.props().onClick();
    });
    expect(props.changePointGroup).toBeCalledWith(1);
    expect(props.changePointGroup).toBeCalledWith(2);
  });
});

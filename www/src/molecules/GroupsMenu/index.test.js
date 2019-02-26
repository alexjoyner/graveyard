import React from 'react';
import { mount } from 'enzyme';
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
    component = mount(<TGroupsMenu {...props} />);
  });
  describe('rendering', () => {
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
  });
  describe('interactions', () => {
    it('should fire change group when item is clicked', () => {
      component.find('ListItem').forEach((item) => {
        item.props().onClick();
      });
      expect(props.changePointGroup).toBeCalledWith(1);
      expect(props.changePointGroup).toBeCalledWith(2);
    });
  });
});

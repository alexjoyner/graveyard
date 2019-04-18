import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, ReactWrapper } from 'enzyme';
import { useWindowSize } from '.';

const WindowTestComponent = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <h1>{`height:${height}`}</h1>
      <h2>{`width:${width}`}</h2>
    </>
  );
};
const resizeWindow = (height:number, width:number) => {
  // @ts-ignore
  window.innerHeight = height;
  // @ts-ignore
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};

describe('useWindowSize Effect', () => {
  let component:ReactWrapper;
  beforeEach(() => {
    act(() => {
      resizeWindow(10, 50);
      component = mount(<WindowTestComponent />);
    });
  });
  it('Should allow GoodTestComponent to exist', () => {
    expect(component).toBeDefined();
  });
  it('Should return correct default size', () => {
    expect(component.find('h1').text()).toEqual('height:10');
    expect(component.find('h2').text()).toEqual('width:50');
  });
  it('Should update on widow resize', () => {
    act(() => {
      resizeWindow(123, 456);
    });
    expect(component.find('h1').text()).toEqual('height:123');
    expect(component.find('h2').text()).toEqual('width:456');
  });
});

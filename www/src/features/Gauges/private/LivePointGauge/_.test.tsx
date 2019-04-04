// import React from 'react';
// import { mount, ReactWrapper } from 'enzyme';
// import { TLivePointGauge } from '.';

// jest.useFakeTimers();
// describe('LivePointGauge component', () => {
//   let component: ReactWrapper;
//   let props;
//   describe('shallow mounted version', () => {
//     beforeEach(() => {
//       props = {
//         point: {
//           name: 'test',
//           value: 0,
//           multiselected: false,
//           settings: {
//             units: 'T',
//           },
//         },
//       };
//       component = mount(<TLivePointGauge {...props} />);
//     });
//     it('Should render without exploding', () => {
//       expect(component).toBeDefined();
//     });
//   });
//   describe('full mounted version', () => {
//     beforeEach(() => {
//       props = {
//         multiSelectPoint: jest.fn(),
//         multiDeselectPoint: jest.fn(),
//         id: 1,
//         point: {
//           name: 'test',
//           value: 0,
//           multiselected: false,
//           settings: {
//             units: 'T',
//           },
//         },
//       };
//       component = mount(<TLivePointGauge {...props} />);
//     });
//     it('should contain a GagueBlock', () => {
//       const GaugeBlock = component.find('GaugeBlock');
//       expect(GaugeBlock).toHaveLength(1);
//     });
//     it('should allow clicking chart button', () => {
//       const GaugeBlock = component.find('GaugeBlock');
//       GaugeBlock.props().onChartClick();
//       expect(component.props().multiSelectPoint)
//         .toHaveBeenLastCalledWith(props.point, props.id);
//       // point is deselected after setTimeout
//       jest.runAllTimers();
//       expect(component.props().multiDeselectPoint)
//         .toHaveBeenLastCalledWith(props.id);
//     });
//     it('shouldnt allow clicking settings button', () => {
//       const GaugeBlock = component.find('GaugeBlock');
//       expect(GaugeBlock.props().onSettingsClick)
//         .toThrowError(new Error('No on settings click implementation'));
//     });
//   });
// });

// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import { TChartModal } from '.';

// const mockFetch = data => jest.fn().mockImplementation(() => Promise.resolve({
//   status: 200,
//   json: () => data,
// }));

// window.fetch = mockFetch([
//   { id: 1, name: 'testPoint' },
// ]);
// describe('TChartModal component', () => {
//   describe('Empty Hidden Chart Component', () => {
//     let component;
//     beforeEach(() => {
//       const props = {
//         startLoadingNotif: jest.fn(),
//         stopLoadingNotif: jest.fn(),
//         dispatchNewHistoricalData: jest.fn(),
//         showHistoryModal: jest.fn(),
//         closeHistoryModal: jest.fn(),
//         modalStage: 'CLOSED',
//         chartPoints: {},
//       };
//       component = shallow(<TChartModal {...props} />);
//     });
//     it('Should render without exploding', () => {
//       expect(component).toBeDefined();
//     });
//   });
//   describe('Shown Chart Component', () => {
//     let component;
//     let props;
//     beforeEach(() => {
//       props = {
//         startLoadingNotif: jest.fn(),
//         stopLoadingNotif: jest.fn(),
//         dispatchNewHistoricalData: jest.fn(),
//         showHistoryModal: jest.fn(),
//         closeHistoryModal: jest.fn(),
//         modalStage: 'SHOWN',
//         chartPoints: {},
//       };
//       component = shallow(<TChartModal {...props} />);
//     });
//     it('Should render without exploding', () => {
//       expect(component).toBeDefined();
//     });
//     it('should allow closing history modal', () => {
//       component.find('Button').last().props().onClick();
//       expect(props.closeHistoryModal).toHaveBeenCalledTimes(1);
//     });
//   });
//   describe('Full Mounted Component', () => {
//     let props;
//     let spy;
//     beforeEach(() => {
//       props = {
//         startLoadingNotif: jest.fn(),
//         stopLoadingNotif: jest.fn(),
//         dispatchNewHistoricalData: jest.fn(),
//         showHistoryModal: jest.fn(),
//         closeHistoryModal: jest.fn(),
//         modalStage: 'SHOWN',
//         chartPoints: {
//           1: { id: 1, name: 'test point' },
//         },
//       };
//     });
//     afterEach(() => {
//       if (spy) {
//         spy.mockClear();
//       }
//     });
//     it('Should render without exploding', () => {
//       const component = mount(<TChartModal {...props} />);
//       expect(component).toBeDefined();
//     });
//     it('Should call component did update', () => {
//       spy = jest.spyOn(TChartModal.prototype, 'componentDidUpdate');
//       const component = mount(<TChartModal {...props} />);
//       component.setProps({ ...props, modalStage: 'TESTING' });
//       expect(spy).toHaveBeenCalled();
//     });
//     it('Should call runBuildGraphProcess', () => {
//       spy = jest.spyOn(TChartModal.prototype, 'runBuildGraphProcess');
//       const component = mount(<TChartModal {...props} />);
//       component.setProps({ ...props, modalStage: 'BUILDING' });
//       expect(spy).toHaveBeenCalled();
//     });
//     it('Should call runBuildGraphProcess from IntervalButton', () => {
//       spy = jest.spyOn(TChartModal.prototype, 'runBuildGraphProcess');
//       const component = mount(<TChartModal {...props} />);
//       const IntervalButton = component.find('IntervalButton');
//       IntervalButton.forEach((Button) => {
//         Button.props().onClick();
//       });
//       expect(spy).toHaveBeenCalledTimes(5);
//     });
//   });
// });

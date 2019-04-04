// import { fetchDataForPoints } from '.';
// import { env } from '../../../../.env';

// const mockFetch = jest.fn().mockImplementation(data => ({
//   ...data,
// }));

// describe('fetchDataForPoints', () => {
//   let requests;
//   beforeEach(() => {
//     window.fetch = mockFetch;
//     requests = [
//       { name: 'test' }, // Defaults to id: 1
//       { id: 2, name: 'test2' },
//     ];
//   });
//   it('should return correct value', () => {
//     const testResult = fetchDataForPoints(requests, {});
//     expect(testResult).toEqual([
//       new Request(`${env.serverAddr}/history/all/1`),
//       new Request(`${env.serverAddr}/history/all/2`),
//     ]);
//   });
//   it('should return historical requests with start&end options', () => {
//     const testResult = fetchDataForPoints(requests, {
//       start: {
//         format: () => 'TEST_START',
//       },
//       end: {
//         format: () => 'TEST_END',
//       },
//     });
//     expect(testResult).toEqual([
//       new Request(`${env.serverAddr}/history/1/from/TEST_START/TEST_END`),
//       new Request(`${env.serverAddr}/history/2/from/TEST_START/TEST_END`),
//     ]);
//   });
// });
export const test = 1;
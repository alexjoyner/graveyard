import { buildGraph, BUILD_GRAPH, dispatchNewHistoricalData, NEW_HISTORICAL_DATA, showHistoryModal, SHOW_GRAPH, closeHistoryModal, CLOSE_HISTORICAL_MODAL } from './actions';

describe('HistoricalGraphActions', () => {
  describe('buildGraph', () => {
    it('should return correct action', () => {
      expect(buildGraph([{ id: 1, name: 'testPoint' }])).toEqual({
        type: BUILD_GRAPH,
        data: [{ id: 1, name: 'testPoint' }],
      });
    });
  });
  describe('dispatchNewHistoricalData', () => {
    it('should return correct action', () => {
      const testFormattedHistoricalData = ['test'];
      expect(dispatchNewHistoricalData(testFormattedHistoricalData)).toEqual({
        type: NEW_HISTORICAL_DATA,
        data: testFormattedHistoricalData,
      });
    });
  });
  describe('showHistoricalModal', () => {
    it('should return correct action', () => {
      expect(showHistoryModal()).toEqual({
        type: SHOW_GRAPH,
      });
    });
  });
  describe('closeHistoricalModal', () => {
    it('should return correct action', () => {
      expect(closeHistoryModal()).toEqual({
        type: CLOSE_HISTORICAL_MODAL,
      });
    });
  });
});

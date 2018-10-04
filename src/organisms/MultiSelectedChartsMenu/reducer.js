import { MULTISELECT_POINT } from '../GaugeBlockArray/actions/types';
import { REMOVE_INPUT } from './actions';

const INITIAL_STATE = {
  chartInputs: [],
};

export const MultiSelectedChartsMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MULTISELECT_POINT: {
      const { id } = action.data;
      let alreadyAdded = false;
      state.chartInputs.forEach((input) => {
        if (input.source.id === id) {
          console.error('Already added that input');
          alreadyAdded = true;
        }
      });
      if (alreadyAdded) { return state; }
      return {
        ...state,
        chartInputs: state.chartInputs.concat({
          source: {
            id,
            ...action.data.input,
          },
        }),
      };
    }
    case REMOVE_INPUT: {
      let removedIndex = null;
      state.chartInputs.map((input, i) => {
        if (input.source.id === action.data) {
          removedIndex = i;
        }
        return input;
      });
      if (removedIndex !== null) {
        const newChartInputs = state.chartInputs.slice();
        newChartInputs.splice(removedIndex, 1);
        return { ...state, chartInputs: newChartInputs };
      }
      return state;
    }
    default:
      return state;
  }
};

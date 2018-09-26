import { MULTISELECT_POINT } from "../GaugeBlockArray/actions/types";

const INITIAL_STATE = {
    chartInputs: [],
};

export const MultiSelectedChartsMenuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case MULTISELECT_POINT:
            console.log(state);
            console.log(action);
            let id = action.data.id;
            let alreadyAdded = false;
            state.chartInputs.forEach((input) => {
                if(input.source.id === id){
                    console.error('Already added that input');
                    alreadyAdded = true;
                }
            })
            if(alreadyAdded)
                return state;

            return {...state, chartInputs: state.chartInputs.concat({
                source: {
                    id,
                    ...action.data.input,
                }
            })}
        case 'REMOVE_INPUT':
            console.log(state);
            console.log(action);
            let removedIndex = null;
            state.chartInputs.map((input, i) => {
                if(input.source.id === action.data){
                    removedIndex = i;
                    return;
                }
            })
            if(removedIndex !== null){
                let newChartInputs = state.chartInputs.slice();
                newChartInputs.splice(removedIndex, 1);
                return {...state, chartInputs: newChartInputs}
            }
            return state;
        default: 
            return state;
    }
}
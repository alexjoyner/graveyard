const INITIAL_STATE = {
    modalStage: 'hidden',
    modalData: {},
}

export const HistoricalGraphModalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOADING_HISTORICAL_DATA':
            return {...state, modalStage: 'loading'};
        case 'SHOW_HISTORICAL_MODAL':
            return {...state, modalStage: 'shown'};
        case 'HIDE_HISTORICAL_MODAL':
            return {...state, modalStage: 'hidden'};
        case 'NEW_HISTORICAL_DATA':
            return {...state, modalData: action.data};
        default:
            return state;
    }
}
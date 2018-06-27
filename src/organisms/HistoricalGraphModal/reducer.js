const INITIAL_STATE = {
    modalShown: false,
    modalData: {
        data: [],
    },
}

export const HistoricalGraphModalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SHOW_HISTORICAL_MODAL':
            return {...state, modalShown: true};
        case 'HIDE_HISTORICAL_MODAL':
            return {...state, modalShown: false};
        case 'NEW_HISTORICAL_DATA':
            return {...state, modalData: action.data};
        default:
            return state;
    }
}
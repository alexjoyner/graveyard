const INITIAL_STATE = {
    modalShown: false,
    modalData: JSON.parse(localStorage.getItem('MODAL_DATA')) || {},
}

export const HistoricalGraphModalReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
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
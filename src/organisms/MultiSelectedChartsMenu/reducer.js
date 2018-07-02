const INITIAL_STATE = {
    items: [],
};

export const MultiSelectedChartsMenuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'MULTISELECT_INPUT':
            return {...state, items: state.items.concat({
                ...action.data,
                username: 'AAE599',
                password: 'romeo6424',
            })}
        case 'REMOVE_INPUT':
            return {...state, items: state.items.splice(action.index, 1)}
        default: 
            return state;
    }
}
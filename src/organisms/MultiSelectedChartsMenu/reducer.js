const INITIAL_STATE = {
    items: [],
};

export const MultiSelectedChartsMenuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'MULTISELECT_INPUT':
            let key = `AAE599${action.data.key}`;
            let alreadyAdded = false;
            state.items.forEach((input) => {
                if(input.key === key){
                    console.error('Already added that input');
                    alreadyAdded = true;
                }
            })
            if(alreadyAdded)
                return state;

            return {...state, items: state.items.concat({
                ...action.data,
                key,
                username: 'AAE599',
                password: 'romeo6424',
            })}
        case 'REMOVE_INPUT':
            let newItems = state.items.slice();
            newItems.splice(action.index, 1);
            return {...state, items: newItems}
        default: 
            return state;
    }
}
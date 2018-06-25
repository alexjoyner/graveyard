const INITIAL_STATE = {
    loggedIn: localStorage.getItem('loggedIn') || false,
}

export const AuthModalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGGED_IN':
            localStorage.setItem('loggedIn', true);
            return {...state, loggedIn: localStorage.getItem('loggedIn')};
        default:
            return state;
    }
}
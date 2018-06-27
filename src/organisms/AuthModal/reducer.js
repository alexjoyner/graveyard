const INITIAL_STATE = {
    loggedIn: localStorage.getItem('loggedIn') || false,
    roomCreds: localStorage.getItem('roomsCreds') || []
}

export const AuthModalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGGED_IN':
            localStorage.setItem('loggedIn', true);
            return {...state, loggedIn: localStorage.getItem('loggedIn')};
        case 'ADD_ROOM_CRED':
            let roomCreds = state.roomCreds;
            roomCreds.push(this.action.new_creds);
            this.localStorage.setItem('roomsCreds', roomCreds);
            return {...state, roomCreds};
        default:
            return state;
    }
}
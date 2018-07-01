import React from 'react';

const INITIAL_STATE = {
    shown: false,
}

export const NotificationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOADING_START':
            return {...state, shown: true, contents: <h1>Loading</h1>};
        case 'LOADING_STOP':
        case 'HIDE_NOTIFICATION':
            return {...state, shown: false};
        default: return state;
    }
}
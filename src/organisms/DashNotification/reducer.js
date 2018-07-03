import React from 'react';

const INITIAL_STATE = {
    shown: false,
}

export const NotificationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'NEW_NOTIFICATION':
            return {...state, shown: true, contents: <h3>{action.data}</h3>};
        case 'LOADING_START':
            return {...state, shown: true, contents: <h1>Loading</h1>};
        case 'LOADING_STOP':
        case 'HIDE_NOTIFICATION':
            return {...state, shown: false};
        default: return state;
    }
}
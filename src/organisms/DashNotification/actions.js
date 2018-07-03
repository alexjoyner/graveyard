export const showBasicNotification = (message) => {
    return (dispatch) => {
        dispatch({
            type: 'NEW_NOTIFICATION',
            data: message,
        })
        setTimeout(() => {
            dispatch({type: 'HIDE_NOTIFICATION'});
        }, 2500)
    }
};
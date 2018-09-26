export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

let notifTimer = null;
export const startLoadingNotif = (message) => {
  return (dispatch) => {
    dispatch({
      type: START_LOADING
    })
  }
};
export const stopLoadingNotif = (message) => {
  return (dispatch) => {
    dispatch({
      type: STOP_LOADING
    })
  }
};
export const showNotification = (message) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_NOTIFICATION,
      data: message,
    })
    clearTimeout(notifTimer);
    notifTimer = setTimeout(() => {
      hideNotification()(dispatch);
    }, 2500);
  }
};
export const hideNotification = () => {
  return (dispatch) => {
    dispatch({
      type: HIDE_NOTIFICATION
    })
  }
}
import { MULTISELECT_DESELECT_POINT, MULTISELECT_POINT } from './types';

export const multiSelectPoint = (input, id) => (dispatch) => {
  dispatch({
    type: MULTISELECT_POINT,
    data: { input, id },
  });
  setTimeout(() => {
    dispatch({ type: MULTISELECT_DESELECT_POINT, data: id });
  }, 2000);
};


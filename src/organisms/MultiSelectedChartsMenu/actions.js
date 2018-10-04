export const REMOVE_INPUT = 'REMOVE_INPUT';

export const removeInput = input => (dispatch) => {
  dispatch({
    type: REMOVE_INPUT,
    data: input,
  });
};


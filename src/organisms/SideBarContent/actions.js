import { getPointsFromGroupID } from '../GaugeBlockArray/utils/getPointsFromGroupID';
import { subscribeToNewPoints } from '../GaugeBlockArray/actions/subscribeToNewPoints';

const setNewGroup = groupID => async (dispatch) => {
  try {
    const groupPointsArray = await getPointsFromGroupID(groupID);
    subscribeToNewPoints(groupPointsArray)(dispatch);
  } catch (e) {
    console.log(e);
  }
};

export { setNewGroup };

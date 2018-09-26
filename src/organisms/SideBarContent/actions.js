import { getPointsFromGroupID } from "../GaugeBlockArray/utils/getPointsFromGroupID";
import { subscribeToNewPoints } from "../GaugeBlockArray/actions/subscribeToNewPoints";

const setNewGroup = (groupID) => {
  return async (dispatch) => {
    try {
      let groupPointsArray = await getPointsFromGroupID(groupID);
      subscribeToNewPoints(groupPointsArray)(dispatch);
    } catch (e) {
      console.log(e);
    }
  }
}

export { setNewGroup };
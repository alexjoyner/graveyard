import { getNewGroupPoints } from "../GaugeBlockArray/actions";

const setNewGroup = (group) => {
    return getNewGroupPoints(group.id);
}

export {setNewGroup};
import React, { FC, useEffect, useState, Children } from 'react';
import { PointID, PointsObject } from '../../../../shared/types/oee-master/points';
import { async } from 'q';
import { getPointsFromGroupID } from '../../utils/getPointsFromGroupID';

export type PointsInfoProps = {
  group: number,
  children: (pointsInfo: PointsObject) => void
}

const PointsInfo: FC<PointsInfoProps> = ({ group, children }) => {
  const [pointsInfo, setPointsInfo] = useState({});
  const fetchPointsInfo = async () => {
    const data = await getPointsFromGroupID(group)
    setPointsInfo(data);
  }
  useEffect(() => {
    fetchPointsInfo();
    return () => { };
  }, [group])
  return <>{children(pointsInfo)}</>
}

export { PointsInfo };
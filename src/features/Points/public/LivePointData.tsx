import React, { FC, useEffect, useState } from 'react';
import { SocketSource } from '../../../shared/observables/SocketSource/SocketSource';
import { PointID } from '../../../shared/types/oee-master/points';
import { Log } from '../../../shared/types/oee-master/logs';


export type LivePointDataProps = {
  pointID: PointID,
  socket: SocketSource,
  children: (log: Log) => void
}
const defaultLog: Log = {
  pointID: 0,
  log: {
    value: 0
  }
}
const LivePointData: FC<LivePointDataProps> = ({ socket, pointID, children }) => {
  const [lastLog, setLastLog] = useState(defaultLog);
  const handleNewLog = (log: Log) => {
    setLastLog(log);
  };
  useEffect(() => {
    socket.subscribe(pointID, handleNewLog);
    return () => {
      socket.unsubscribe(handleNewLog, () => null)
    };
  }, [])
  return <>{children(lastLog)}</>
}


export { LivePointData };
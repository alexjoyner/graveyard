import { Point } from '../../../../shared/types/oee-master/points';

type RawPointData = [[number, number]]

export const formatRawPointData =
  (rawDataArray: RawPointData, points: Point[]) =>
    rawDataArray.map((data, i) => (
      {
        ...points[i],
        data,
      }
    ));
export const formatDataForGraph = (rawDataArray, points) => rawDataArray.map((data, i) => ({
  ...points[i],
  data,
}));

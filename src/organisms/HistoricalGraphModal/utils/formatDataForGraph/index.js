export const formatDataForGraph = (rawDataArray, requests) => rawDataArray.map((data, i) => ({
  source: {
    id: requests[i].source.id,
    inputname: requests[i].source.name,
    unit: requests[i].source.unit,
  },
  data,
}));

export const formatDataForGraph = (rawDataArray, requests) => rawDataArray.map((data, i) => ({
  id: requests[i].id,
  name: requests[i].name,
  unit: requests[i].settings.unit,
  data,
}));

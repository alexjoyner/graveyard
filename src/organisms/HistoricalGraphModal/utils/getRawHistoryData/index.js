export const getRawHistoryData = calls => async () => {
  try {
    const responses = await Promise.all(calls);
    const jsonCalls = responses.map(response => response.json());
    const rawData = await Promise.all(jsonCalls);
    return rawData;
  } catch (e) {
    console.error(e);
    return null;
  }
};

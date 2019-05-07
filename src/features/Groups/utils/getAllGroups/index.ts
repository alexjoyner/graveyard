const getAllGroups = async () => {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    const fetchUrl = new Request(`${process.env.REACT_APP_SERVER_ADDRESS}/me/groups`);
    const response = await fetch(fetchUrl, {
      headers,
    });
    const userGroups = await response.json();
    return userGroups;
  } catch (e) {
    /* istanbul ignore next */
    throw new Error(e);
  }
};

export { getAllGroups };

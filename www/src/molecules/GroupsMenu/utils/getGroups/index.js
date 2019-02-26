import { env } from '../../../../.env';

const getGroups = async () => {
  const token = localStorage.getItem('token');
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  console.log('Headers: ', headers);
  try {
    const fetchUrl = new Request(`${env.serverAddr}/me/groups`);
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

export { getGroups };

import { env } from '../../../../.env';

const getGroups = async () => {
  try {
    const fetchUrl = new Request(`${env.serverAddr}/me/groups/1`);
    const response = await fetch(fetchUrl);
    const userGroups = await response.json();
    return userGroups;
  } catch (e) {
    throw new Error(e);
  }
};

export { getGroups };

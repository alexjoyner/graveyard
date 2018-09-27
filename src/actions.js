import { env } from "./.env";

const initializeData = () => {
    return async (dispatch) => {
        try{
            const fetchUrl = new Request(`${env.serverAddr}/me/groups/1`);
            const response = await fetch(fetchUrl);
            const userGroups = await response.json();
            dispatch({
                type: 'INIT_GROUPS',
                data: userGroups
            })
        }
        catch (e) { 
            console.error(e);
        }
    }
} 

export {initializeData};
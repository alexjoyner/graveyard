import { env } from "../../../.env";
import { SocketConnection } from "../../../utils/socket-connection";

export const getAllPoints = async (clientID) => {
  try {
    const requestUrl = new Request(`${env.serverAddr}/me/points/${clientID}`);
    const response = await fetch(requestUrl);
    const pointsArray = await response.json();
    let pointsIdArray = [];
    for(let i = 0; i < pointsArray.length; i++){
      pointsIdArray.push(pointsArray[i].id);
    }
    return pointsIdArray;
  }catch(e){
    console.error(e);
  }
}
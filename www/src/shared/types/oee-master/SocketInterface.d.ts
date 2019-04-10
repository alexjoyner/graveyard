export interface SocketInterface {
  subscribe: (pointsArray: number[], cb: () => void) => void,
  unsubscribe: () => void,
  join?: () => void,
}
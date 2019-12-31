// import { Log } from '../../types/oee-master/logs';
// import { PointID } from '../../types/oee-master/points';
import { toaster } from 'ro-component-library/Toast';
import { SocketObserver, SocketObserverable } from './types';
import io from 'socket.io-client';
interface RoomsObject {
	[key: string]: SocketObserver[];
}
class SocketSource implements SocketObserverable {
	private rooms: RoomsObject = {};
	private socket: SocketIOClient.Emitter;
	private detailsListener: (details: { status: string }) => void;

	constructor(detailsListener: (details: { status: string }) => void) {
		console.log('Starting server in: ', <string>(
			process.env.REACT_APP_SERVER_ADDRESS
		));
		this.socket = io(<string>process.env.REACT_APP_SERVER_ADDRESS);
		this.detailsListener = detailsListener;
		this.startConnectedListener();
		// this.startNewLogListener();
		this.startDisconnectListener();
		this.startReconnectListener();
	}

	// private addRoom(pointID: PointID) {
	//   this.socket.emit('join-group', [pointID]);
	//   this.getLastLog(pointID);
	// }
	// private removeRoom(pointID: PointID) {
	//   delete this.rooms[pointID];
	//   this.socket.emit('leave-group', [pointID]);
	// }
	// private getLastLog(pointID: PointID) {
	//   this.socket.emit('get-last-logs', [pointID]);
	// }
	private startConnectedListener() {
		this.socket.on('connect', () => {
			console.log('Connected To Server');
			this.detailsListener({
				status: 'CONNECTED'
			});
		});
	}
	// private startNewLogListener() {
	//   this.socket.on('add log', /* istanbul ignore next */(log: Log) => {
	//     this.notifyObservers(log.pointID, log);
	//   });
	// }
	private startDisconnectListener() {
		this.socket.on(
			'disconnect',
			/* istanbul ignore next */ () => {
				toaster().negative('Disconnected From Server!', {
					autoHideDuration: 0
				});
				console.log('Connected To Server');
				// this.detailsListener({
				//   status: 'DISCONNECTED'
				// })
			}
		);
	}
	private startReconnectListener() {
		this.socket.on(
			'reconnect',
			/* istanbul ignore next */ () => {
				toaster().clear();
				toaster().positive('Socket Reconnected!', {
					autoHideDuration: 8000
				});
				this.detailsListener({
					status: 'CONNECTED'
				});
				// Object.keys(this.rooms).map(pointID => {
				//   this.addRoom(pointID);
				// })
			}
		);
	}
	// private notifyObservers(pointID: PointID, log: Log): void {
	//   if (this.rooms[pointID] === undefined) return;
	//   this.rooms[pointID].map((observer: SocketObserver) => observer(log));
	// }
	// subscribe(pointID: PointID, o: SocketObserver): void {
	//   if (this.rooms[pointID]) {
	//     this.rooms[pointID].push(o);
	//     return;
	//   }
	//   this.rooms[pointID] = [o];
	//   this.addRoom(pointID);
	// }
	unsubscribe(target: SocketObserver, success: (room: string) => void): void {
		// const emptyRooms: PointID[] = [];
		// Object.keys(this.rooms).map(pointID => {
		//   this.rooms[pointID] = this.rooms[pointID].filter(o => {
		//     if (o == target) {
		//       success(`Point ${pointID}`);
		//       return false;
		//     }
		//     return true;
		//   });
		//   if (this.rooms[pointID].length === 0) {
		//     emptyRooms.push(pointID);
		//   }
		// })
		// emptyRooms.map(pointID => {
		//   this.removeRoom(pointID);
		// });
	}
}

export { SocketSource };

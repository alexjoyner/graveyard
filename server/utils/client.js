import fs from 'fs';
import {CLIENT_EXISTS} from './errors';
import {readFileData} from './readFileData';
class Client {
	constructor({ clientName, problemDesc}){
		this.clientName = clientName.toLowerCase();
		this.description = problemDesc;
		this.check_in = new Date();
		return this;
	}

	saveClient(callback){
		let clients = this._getAllClients();
		let newClient = this.getNewClientData();
		if(this._clientAlreadyExists(clients)){
			return callback(CLIENT_EXISTS);
		}
		this._writeNewClientToDisk(clients, newClient);
		callback();
		return this;
	}

	_getAllClients(){
		return readFileData('clients.txt');
	}

	_clientAlreadyExists(clients){
		let filtered = clients.filter((client) => {
			return (client.clientName === this.clientName)
		});
		return filtered.length !== 0;
	}

	_writeNewClientToDisk(allClients, newClient){
		allClients.push(newClient);
		fs.writeFileSync('clients.txt', JSON.stringify(allClients));
	}

	getNewClientData(){
		return {
			clientName: this.clientName,
			description: this.description,
			checkIn: this.check_in
		}
	}
}

export {Client};

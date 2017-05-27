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
		this._writeClientsToDisk(clients, newClient);
		callback();
		return this;
	}

	checkOut(callback){
		let clients = this._getAllClients();
		if(!this._clientAlreadyExists(clients)){
			return callback({
				status: 400,
				message: 'Client doesn\'t exist'
			});
		}
		let existingClientIndex = this._getExistingClientIndex(clients);
		if(clients[existingClientIndex].checkOut){
			return callback({
				status: 400,
				message: 'Client already checked out'
			});
		}
		clients[existingClientIndex]['checkOut'] = new Date();
		this._writeClientsToDisk(clients);
		callback();
		return this;
	}

	_getAllClients(){
		return readFileData('clients.txt');
	}

	_getExistingClient(clients){
		return clients.filter((client) => {
			return (client.clientName === this.clientName)
		});
	}
	_getExistingClientIndex(clients){
		for(let i = 0; i < clients.length; i++){
			if(clients[i].clientName === this.clientName){
				return i;
			}
		}
	}
	_clientAlreadyExists(clients){
		return this._getExistingClient(clients).length !== 0;
	}

	_writeClientsToDisk(allClients, newClient){
		if(newClient){
			allClients.push(newClient);
		}
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

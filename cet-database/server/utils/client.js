import fs from 'fs';
import {CLIENT_EXISTS} from '../config/error';
import {readFileData} from './readFileData';
class Client {
	constructor({ firstName, lastName, description}){
		this.firstName = firstName.toLowerCase();
		this.lastName = lastName.toLowerCase();
		this.description = description;
		this.check_in = new Date();
		return this;
	}

	saveClient(callback){
		let clients = this.getAllClients();
		let newClient = this.getNewClientData();
		if(this.clientAlreadyExists(clients)){
			return callback(CLIENT_EXISTS);
		}
		this.writeNewClientToDisk(clients, newClient);
		callback();
		return this;
	}

	getAllClients(){
		return readFileData('clients.txt');
	}

	clientAlreadyExists(clients){
		let filtered = clients.filter((client) => {
			return (client.firstName === this.firstName) && (client.lastName === this.lastName)
		});
		return filtered.length !== 0;
	}

	writeNewClientToDisk(allClients, newClient){
		allClients.push(newClient);
		fs.writeFileSync('clients.txt', JSON.stringify(allClients));
	}

	getNewClientData(){
		return {
			firstName: this.firstName,
			lastName: this.lastName,
			description: this.description,
			checkIn: this.check_in
		}
	}
}

export {Client};

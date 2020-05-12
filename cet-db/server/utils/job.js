import fs from 'fs';
import async from 'async';
import {COULDNT_UPDATE, JOB_DOESNT_EXIST, ALREADY_CHECKED_OUT} from './errors';
import {readFileData} from './readFileData';
import {client} from './elasticsearch/client';
class Job {
	constructor({ clientName, problemDesc}){
		this.clientName = clientName.toLowerCase();
		this.problemDesc = problemDesc;
		this.check_in = Date.now();
		return this;
	}

	checkIn(done){
		let newClient = this.getNewClientData();
		client.index({
			index: 'jobs',
			type: 'common',
			body: newClient
		}, function (err) {
			if(err) throw err;
			return done();
		});
	}

	static checkOut(checkOutData, done){
		const {id, techSolution, techName} = checkOutData;
		async.series([
			(callback) => {
				this.getClient(id, (err, result) => {
					if(err) return done(err);
					if(result._source.checkOut){
						return done(ALREADY_CHECKED_OUT);
					}
					callback();
				});
			},
			(callback) => {
				this._updateJob(id, {
					'checkOut': Date.now(),
					techSolution,
					techName
				}, callback)
			}
		], done);
	}

	_getAllClients(){
		return readFileData('jobs.txt');
	}
	static searchUnfinished(term, done){
		client.search({
			index: 'jobs',
			type: 'common',
			body: {
				query: {
					bool: {
						must: {
							fuzzy: {
								_all: term
							}
						},
						must_not: {
							exists: {
								field: "checkOut"
							}
						}
					}
				}
			}
		}, (err, data) => {
			if(err) return done(err);
			let jobs = data.hits.hits;
			done(null, jobs);
		});
	}
	static getClient(id, done){
		client.get({
			index: 'jobs',
			type: 'common',
			id: id
		}, function(err, body){
			if(err)
				return done(JOB_DOESNT_EXIST);
			return done(null, body);
		})
	}
	static _updateJob(id, data, done){
		client.update({
			index: 'jobs',
			type: 'common',
			id: id,
			body: {
				"doc": data
			}
		}, function (err) {
			if(err) {
				done(COULDNT_UPDATE);
				throw err;
			}
			done();
		});
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
		fs.writeFileSync('jobs.txt', JSON.stringify(allClients));
	}

	getNewClientData(){
		return {
			clientName: this.clientName,
			problemDesc: this.problemDesc,
			checkIn: this.check_in
		}
	}
}

export {Job};

export class DataService {
	private _data = ['summer', 'winter', 'boo', 'blah'];

	getRandomString() {
		let rndNum = Math.floor(Math.random() * this._data.length);
		return this._data[rndNum];
	};

	insert(value: string){
		this._data.push(value);
		return 'INSERTED!';
	};
}
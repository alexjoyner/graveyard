import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
@Injectable()
export class GlobalHandlerService {
	data: any;
	dataChange: Observable<any>;
	private dataChangeObserver: Observer<any>;
	constructor(){
		this.dataChange = new Observable((observer: Observer<any>)=>{
			this.dataChangeObserver = observer;
		});
	}
	emitStatusMessage(data: {status: number, body: string}){
		console.log('EMIT STATUS: ', data);
		this.data = data;
		this.dataChangeObserver.next(this.data);
	}
}
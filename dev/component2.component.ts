import {Component} from 'angular2/core';
import {LoggingService} from './services/logging.service';
import {DataService} from './services/data.service';
@Component({
    selector: 'component-2',
    template: `
    	<input type="text" #message>
    	<button (click)="onLog(message.value)">Send</button>
    	<div>
    		<h1>Data Service</h1>
    		<input type="text" #newData>
    		<button (click)="onInsert(newData.value)">Insert Some Data</button>
    		<button (click)="onGetData()">Get Some Data</button>
    		<p>Data: {{data}}</p>
    	</div>
    `,
    providers: [LoggingService, DataService]
})
export class Component2Component {
	data: string;
	constructor(
		private _loggingService: LoggingService,
		private _dataService: DataService
	) {}
	onLog(message: string){
		this._loggingService.log(message);
	}
	onInsert(data: string){
		this.data = this._dataService.insert(data);
	}
	onGetData(data: string){
		this.data = this._dataService.getRandomString();
	}
}
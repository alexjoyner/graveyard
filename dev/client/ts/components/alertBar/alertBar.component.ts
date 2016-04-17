import {Component} from 'angular2/core';
import {GlobalHandlerService} from '../../shared/globalHandler.service';
@Component({
    selector: 'ro-alert-bar',
    templateUrl: 'templates/alertBar/alertBar.tpl.html'
})
export class AlertBarComponent{
	private classType: string = null;
	private message: string = null;
	constructor(
		private _globalHandler: GlobalHandlerService
	) {
		_globalHandler.dataChange.subscribe(
			data => this.emitStatus(data))
	}

	emitStatus(data: {status: number, body: string}){
		switch (data.status){
			case 500:
				this.message = data.body;
				this.classType = 'danger';
				break;
			case 403:
				if(localStorage.getItem('token')){
					localStorage.removeItem('token')
				}
				this.message = data.body;
				this.classType = 'danger';
				break;
		}
		setTimeout(() => {
			this.message = null;
			this.classType = null;
		}, 5000);
	}

}
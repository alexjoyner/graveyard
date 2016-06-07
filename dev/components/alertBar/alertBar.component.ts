declare function require(name: string);
import {Component} from 'angular2/core';
import {GlobalHandlerService} from '../../ts/shared/special-services/globalHandler.service';
@Component({
    selector: 'ro-alert-bar',
    template: require('dev/components/alertBar/alertBar.tpl.html')
})
export class AlertBarComponent{
	private classType: string = null;
	private message: string = null;
	constructor(
		private _globalHandler: GlobalHandlerService
	) {
		/* When the global handler emits an error,
			catch that error and emit notify the user with the alert bar*/
		_globalHandler.dataChange.subscribe(
			data => this.emitStatus(data))
	}

	emitStatus(data: {status: number, body: string}){
		/* 
		Flag for keeping certain error messages
			till the user refreshes the page*/
		let keep: boolean;
		switch (data.status){
			case 403:
				if(localStorage.getItem('token')){
					localStorage.removeItem('token')
				}
			/* 403 should fall through and execute 500*/
			case 500:
				this.message = data.body;
				this.classType = 'danger';
				break;
			case 999:
				this.message = data.body;
				this.classType = 'info';
				keep = true;
				break;
		}
		if(!keep){
			/*Messages not kept should lest for
				5 seconds and then dissapear*/
			setTimeout(() => {
				this.message = null;
				this.classType = null;
			}, 5000);	
		}
	}

}
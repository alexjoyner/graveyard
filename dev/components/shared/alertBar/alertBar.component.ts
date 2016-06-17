declare function require(name: string);
import {Component} from "angular2/core";
import {GlobalHandlerService} from "../../../ts/shared/special-services/globalHandler.service";
import {AuthService} from "../../../ts/shared/net-services/auth.service";
@Component({
    selector: 'ro-alert-bar',
    template: require('dev/components/shared/alertBar/alertBar.tpl.html')
})
export class AlertBarComponent{
	private classType: string = null;
	private message: string = null;
	constructor(
		private _globalHandler: GlobalHandlerService,
		private _authService: AuthService
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
				this._authService.logout();
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
				5 seconds and then disappear*/
			setTimeout(() => {
				this.message = null;
				this.classType = null;
			}, 5000);	
		}
	}

}
declare function require(name: string);
import {Component} from 'angular2/core';
import {TagsFormComponent} from '../forms/tags-form.component';
import {WelcomeUserService} from '../../shared/welcome-user.service'
@Component({//ROUTE NO NEED FOR SELECTOR
    template: require('dev/templates/welcome/welcome.tpl.html'),
    directives: [TagsFormComponent],
    providers: [WelcomeUserService]
})
export class WelcomeComponent {
	private infoStep = 0;
	private tutStep: number = 0;
	private errorString: string;
	private userData: any = {
		fullName: '',
		email: '',
		interests: ''
	}
	constructor(
		private _welcomeService: WelcomeUserService){}
	nextStep(choice: boolean) {
		if (this.tutStep < 3) {
			this.tutStep++;
		}else{
			this.infoStep = 1;
		}
	}
	prevStep() {
		if (this.tutStep > 0) {
			this.tutStep--;
		}
	}
	submitContactInfo(){
		let interests = this.userData.interests.split(',');
		let newUser = this._welcomeService.welcomeNewUser(this.userData.fullName, this.userData.email, interests);
		newUser.subscribe(
			data => {
				this.infoStep = 2;
			},
			err => {
				this.errorString = err;
				console.log('Err: ', err);
			})
	}
}
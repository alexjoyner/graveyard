declare function require(name: string);
import {Component, OnInit} from 'angular2/core';
import {TagsFormComponent} from '../forms/tags-form.component';
import {WelcomeUserService} from '../../shared/welcome-user.service'
@Component({//ROUTE NO NEED FOR SELECTOR
    template: require('dev/templates/welcome/welcome.tpl.html'),
    directives: [TagsFormComponent],
    providers: [WelcomeUserService]
})
export class WelcomeComponent implements OnInit{
	private infoStep = 0;
	private tutStep: number = 0;
	private errorString: string;
	private userData: any = {
		fullName: '',
		email: '',
		interests: '',
		tester: true
	}
	constructor(
		private _welcomeService: WelcomeUserService){}
	ngOnInit():any{
		this.nextStep();
	}
	nextStep() {
		if (this.tutStep <= 3) {
			setTimeout(() => {
				this.tutStep++;
				this.nextStep();
			},4500)
		}else{
			this.infoStep = 1;
		}
	}
	prevStep() {
		if (this.tutStep > 0) {
			this.tutStep--;
		}
	}
	resetUserData(){
		this.userData = {
			fullName: '',
			email: '',
			interests: '',
			tester: true
		}
	}
	submitContactInfo(){
		let interests = this.userData.interests.split(',');
		let concerns = this.userData.concerns.split(',');
		let newUser = this._welcomeService.welcomeNewUser(
			this.userData.fullName, this.userData.email, interests, concerns, this.userData.tester);
		newUser.subscribe(
			data => {
				this.infoStep = 2;
				this.resetUserData();
			},
			err => {
				this.errorString = err;
				console.log('Err: ', err);
			})
	}
}
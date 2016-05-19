declare function require(name: string);
import {Component} from 'angular2/core';
import {TagsFormComponent} from '../forms/tags-form.component';
@Component({//ROUTE NO NEED FOR SELECTOR
    template: require('dev/templates/welcome/welcome.tpl.html'),
    directives: [TagsFormComponent]
})
export class WelcomeComponent {
	private infoStep = 0;
	private tutStep: number = 0;
	private userData: any = {
		email: '',
		reentered: '',
		zipcode: null,
		fullName: '',
		cantactMethod: '',
		contactName: '',
		participationLevel: '',
		questions: [null,null,null,null,null],
		interests: []
	}
	nextStep(choice: boolean) {
		if (this.tutStep < 5) {
			this.userData.questions[this.tutStep] = choice;
			this.tutStep++;
			console.log(this.userData);
		}else{
			this.infoStep = 1;
		}
	}
	prevStep(){
		if (this.tutStep > 0) {
			this.tutStep--;
		}
	}
	submitContactInfo(){
		console.log(this.userData);
		this.infoStep = 2;
	}
}
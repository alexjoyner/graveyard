import {Router} from "angular2/router";
import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {TagsFormComponent} from '../tags-form/tags-form.component';
import {Post} from '../../../ts/shared/structures/post';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {AuthService} from '../../../ts/shared/net-services/auth.service';
import {UsersService} from "../../../ts/shared/net-services/users.service";

@Component({
	selector: 'ro-create-question',
    template: require('./create-question-form.tpl.html'),
    directives: [TagsFormComponent]
})
export class CreateQuestionFormComponent implements OnInit{
	@Input('question') question: string;
	@Output() close: EventEmitter<any> = new EventEmitter();
	@Output() search: EventEmitter<any> = new EventEmitter();
	@Output() switchTags: EventEmitter<any> = new EventEmitter();
	private alertString: string;
	private acceptedTags: any[] = [];
	private privQ: boolean = false;
	private alertType: string;
	private mode: string = 'question';
	private qComplete: boolean = false;
	constructor(
		private _authService: AuthService,
		private _postsService: PostsService,
		private _router: Router,
		private _usersService: UsersService) {}
	ngOnInit():any {
		this.questionControl()
	}
	endTut(){
		this.close.emit(null);
	}
	onCreate() {
		let newQuestion: Post = new Post(this.question, 1);
		if (newQuestion.title[newQuestion.title.length - 1] !== '?') {
			newQuestion.title += '?'
		}
		let tags: any = [];
		for (var i = this.acceptedTags.length - 1; i >= 0; i--) {
			tags.push(this.acceptedTags[i]._id)
		}
		if (tags.length > 2) {
			if (this._authService.checkTokenExists()) {
				console.log('PRIVATE? : ', this.privQ);
				this._postsService.insertPost({ 'post': newQuestion, 'tags': tags}, this.privQ)
					.subscribe(
					data => {
						console.log('Success Posting Question', data);
						this._usersService.profile.follows.push(data._id);
						this._router.navigate(['Question', { id: data._id }]);
					},
					err => console.log('Error: ', err)
					);
			}
		}else{
			alert('You need to add at least 3 tag to a question. Search 3 categories that best describe your question.');
		}
	}
	questionControl(): void{
		let daQ = this.question; // daQ (The question)
		this.alertString = undefined;

		/*
		* If there is no question or there isn't at least 2 characters to check*/
		if(!daQ || !daQ.length > 2){
			// No alerts raised yet
			this.alertString = undefined;
			return;
		}
		/*
		* If the question isn't a yes or no*/
		if(!checkIsYesOrNo(daQ)){
			this.alertType = "warning";
			this.alertString = "Whoa!! Questions must be yes or no.";
			return;
		}

		/*
		* If the question isn't at least 3 words (A complete sentence). Ex: Should I run? */
		if(!isThreeWords(daQ)){
			this.alertType = "warning";
			this.alertString = "Hey! Your question needs to be at least 3 words!";
			return;
		}

		/*
		* If the question is a comparison */
		if(is_comparison(daQ)){
			this.alertType = "warning";
			this.alertString =
				`Wait right there!! We don't accept comparisons in these parts! \n
				 You can't have a question contain the word OR.`;
			return;
		}
		/*
		* If the question contains the word you*/
		if(contains_you(daQ)){
			this.alertType = "warning"
			this.alertString =
				`Don't put (you) your question, you can direct the question towards yourself, but not another person`;
			return;
		}

		/*
		* Everything checked out but the last character isn't a question mark*/
		if (daQ[daQ.length - 1] !== '?') {
			this.search.emit(daQ);
			this.alertType = "success";
			this.alertString = 'Awesome, now just top it of with a question mark when your finished to move on!';
			return;
		}

		this.alertType = "success";
		this.alertString = 'Great! Double check your question then hit Enter / Return.';
		this.qComplete = true;
	}
	switchToTags(){
		if(this.qComplete){
			this.mode = 'tags';
			this.switchTags.emit(null);
		}
	}
}

/*
* =================  EXTERNAL FUNCTIONS =================*/
function checkIsYesOrNo(searchStr: string):boolean {
	let validCases: string[] = ['should', 'would','will','could','are','is','can','shall','did','am','do']
	let firstword: string = searchStr.match(/^([\w\-]+)/)[0].toLowerCase();
	return validCases.indexOf(firstword) > -1;
}
function is_comparison(searchStr: string):boolean {
	let lwrStr: string = searchStr.toLowerCase();
	let test: boolean =
		/* or is in the string*/
		(lwrStr.indexOf(' or') !== -1);
	return 	test;
}
function contains_you(searchStr: string):boolean {
	let lwrStr: string = searchStr.toLowerCase();
	let test: boolean =
		/* the word YOU is contained in the string*/
		(lwrStr.indexOf(' you') !== -1);
	console.log(test);
	return test;
}
function isThreeWords(searchStr: string): boolean{
	return (searchStr.match(/^((?:\S+\s+){2}\S+)/) !== null)
}
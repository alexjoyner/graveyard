import {Router} from "angular2/router";
declare function require(name: string);
import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {TagsFormComponent} from '../tags-form/tags-form.component';
import {Post} from '../../../ts/shared/structures/post';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {AuthService} from '../../../ts/shared/net-services/auth.service';
@Component({
	selector: 'ro-create-question',
    template: require('dev/components/forms/create-question-form/create-question-form.tpl.html'),
    directives: [TagsFormComponent]
})
export class CreateQuestionFormComponent implements OnInit{
	@Output() close: EventEmitter<any> = new EventEmitter();
	@Output() search: EventEmitter<any> = new EventEmitter();
	@Output() switchTags: EventEmitter<any> = new EventEmitter();
	@Input('question') question: string;
	private alertString: string;
	private acceptedTags: any[] = [];
	private privQ: boolean = false;
	private alertType: string;
	private mode: string = 'question';
	private count: number;
	private qComplete: boolean = false;
	constructor(
		private _authService: AuthService,
		private _postsService: PostsService,
		private _router: Router) {}
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
						this._router.navigate(['Question', { id: data._id }]);
					},
					err => console.log('Error: ', err)
					);
			}
		}else{
			alert('You need to add at least 3 tag to a question. Search 3 categories that best describe your question.');
		}
	}
	questionControl(){
		let daQ = this.question; // daQ (The question)
		this.alertString = undefined;
		if(daQ && daQ.length > 2){
			if (checkIsYesOrNo(daQ)) {
				if (isThreeWords(daQ)) {
					if (checkNotComparison(daQ)) {
						if (checkNoYou) {
							this.search.emit(daQ);
							this.alertType = "success"
							this.alertString = 'Awesome, now just top it of with a question mark when your finished to move on!'
							if (daQ[daQ.length - 1] === '?') {
								this.alertType = "success"
								this.alertString = 'Great! Double check your question then click "Tag my question".';
								this.qComplete = true;
							}
						} else {
							this.alertType = "warning"
							this.alertString =
								`Don't put (you) your question, you can direct the question towards yourself, but not another person`
						}
					} else {
						this.alertType = "warning"
						this.alertString =
							`Wait right there!! We don't accept comparisons in thes parts 
						You can't have a question contain the word OR`
					}
				}else{
					this.alertType = "warning"
					this.alertString =
						`Your question should be at least 3 words.`
				}
			}else {
				this.alertType = "warning"
				this.alertString = "Whoa!! Questions must be yes or no."
			}
		}else{
			this.alertString = undefined;
		}
	}
	switchToTags(){
		this.mode = 'tags'
		this.switchTags.emit(null);
	}
}
function checkIsYesOrNo(searchStr: string):boolean {
	let validCases: string[] = ['should', 'would','will','could','are','is','can','shall','did','am','do']
	let firstword: string = searchStr.match(/^([\w\-]+)/)[0].toLowerCase();
	return validCases.indexOf(firstword) > -1;
}
function checkNotComparison(searchStr: string):boolean {
	let lwrStr: string = searchStr.toLowerCase();
	let test: boolean =
		/* or is not in the string*/
		(lwrStr.indexOf(' or') === -1);
	console.log(test);
	return 	test;
}
function checkNoYou(searchStr: string):boolean {
	let lwrStr: string = searchStr.toLowerCase();
	let test: boolean =
		/* or is not in the string    and    and is not int the string*/
		(lwrStr.indexOf(' you') === -1);
	console.log(test);
	return test;
}
function isThreeWords(searchStr: string): boolean{
	return (searchStr.match(/^((?:\S+\s+){2}\S+)/) !== null)
}
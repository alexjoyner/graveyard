declare function require(name: string);
import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {TagsFormComponent} from './tags-form.component';
import {Post} from '../../shared/post';
import {PostsService} from '../../shared/posts.service';
import {AuthService} from '../../shared/auth.service';
@Component({
	selector: 'ro-create-question',
    template: require('dev/templates/forms/create-question-form.tpl.html'),
    directives: [TagsFormComponent]
})
export class CreateQuestionFormComponent implements OnInit{
	@Output() close: EventEmitter<any> = new EventEmitter();
	@Output() search: EventEmitter<any> = new EventEmitter();
	@Output() switchTags: EventEmitter<any> = new EventEmitter();
	private alertString: string;
	@Input('question') question: string;	
	private alertType: string;
	private mode: string = 'question';
	private count: number;
	constructor(
		private _authService: AuthService,
		private _postsService: PostsService) {}
	endTut(){
		this.close.emit(null);
	}
	onCreate(acceptedTags: any[]) {
		let newQuestion: Post = new Post(this.question, 1);
		if (newQuestion.title[newQuestion.title.length - 1] !== '?') {
			newQuestion.title += '?'
		}
		let tags: any = [];
		for (var i = acceptedTags.length - 1; i >= 0; i--) {
			tags.push(acceptedTags[i]._id)
		}
		if (this._authService.checkValid()) {
			this._postsService.insertPost({ 'post': newQuestion, 'tags': tags })
				.subscribe(
				data => {
					console.log('Success Posting Question', data);
				},
				err => console.log('Error: ', err)
				);
		}
	}
	questionControl(){
		let daQ = this.question; // daQ (The question)
		this.alertString = undefined;
		if(daQ && daQ.length > 2){
			if (daQ.length > 5 && checkIsYesOrNo(daQ)) {
				if (isThreeWords(daQ)) {
					if (checkNotComparison(daQ)) {
						if (checkNoYou) {
							this.search.emit(daQ);
							this.alertType = "success"
							this.alertString = 'Awesome, now just top it of with a question mark when your finished to move on!'
							if (daQ[daQ.length - 1] === '?') {
								this.alertType = "success"
								this.alertString = 'Moving on... One moment please'
								setTimeout(() => {
									this.mode = 'tags'
									this.switchTags.emit(null);
								}, 3000);
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
}
function checkIsYesOrNo(searchStr: string):boolean {
	let validCases: string[] = ['should', 'would','will','could','are','is','can','shall','did','am']
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
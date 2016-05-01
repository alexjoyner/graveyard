declare function require(name: string);
import {Component, Output, EventEmitter, OnInit} from 'angular2/core';

@Component({
	selector: 'ro-create-question',
    template: require('dev/templates/forms/create-question-form.tpl.html')
})
export class CreateQuestionFormComponent implements OnInit{
	@Output() close: EventEmitter<any> = new EventEmitter();
	@Output() search: EventEmitter<any> = new EventEmitter();
	private question: string;
	ngOnInit():any{
	}
	endTut(){
		this.close.emit(null);
	}
	questionControl(){
		let daQ = this.question; // daQ (The question)
		if(daQ.length > 5){
			this.search.emit(daQ);
		}
	}
}